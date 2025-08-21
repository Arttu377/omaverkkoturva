import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const handler = async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders
    });
  }
  
  try {
    const { confirmation_token } = await req.json();
    
    if (!confirmation_token) {
      throw new Error("Vahvistustoken puuttuu");
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Supabase ympäristömuuttujat puuttuvat");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Find order by confirmation token
    const { data: order, error: findError } = await supabase
      .from("orders")
      .select("*")
      .eq("confirmation_token", confirmation_token)
      .single();

    if (findError || !order) {
      throw new Error("Tilausta ei löytynyt tai token on virheellinen");
    }

    if (order.status === "confirmed") {
      // Order already confirmed
      return new Response(JSON.stringify({
        success: true,
        order_id: order.id,
        message: "Tilaus on jo vahvistettu",
        customer_name: order.customer_name,
        customer_email: order.customer_email
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders
        }
      });
    }

    // Update order status to confirmed
    const { error: updateError } = await supabase
      .from("orders")
      .update({ 
        status: "confirmed",
        confirmed_at: new Date().toISOString()
      })
      .eq("id", order.id);

    if (updateError) {
      throw new Error("Tilauksen päivitys epäonnistui");
    }

    // Return success response
    return new Response(JSON.stringify({
      success: true,
      order_id: order.id,
      message: "Tilaus vahvistettu onnistuneesti",
      customer_name: order.customer_name,
      customer_email: order.customer_email
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });

  } catch (error) {
    console.error("Error confirming order:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  }
};

serve(handler);
