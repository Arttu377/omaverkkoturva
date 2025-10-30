import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") || "arttu.simanainen@telendor.fi";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AdminOrderPayload {
  customer: {
    name: string;
    email: string;
    phone: string;
    birthdate?: string;
  };
  billing: {
    address: string;
    postalCode: string;
    city: string;
    method: "paper" | "email" | "elasku";
  };
  items: Array<{ title: string; price: string; quantity: number }>;
  totalAmount: number;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: AdminOrderPayload = await req.json();

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 720px; margin: 0 auto; background: #ffffff; color: #111827; padding: 24px; border:1px solid #e5e7eb; border-radius: 12px;">
        <h1 style="margin: 0 0 16px 0; font-size: 22px;">Uusi tilaustietolomake</h1>
        <p style="margin: 0 0 12px 0;">Alla asiakkaan tiedot ja tilauksen yhteenveto.</p>

        <h2 style="margin: 24px 0 8px 0; font-size: 16px;">Asiakkaan tiedot</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:4px 0; width:160px; color:#6b7280;">Nimi</td><td>${payload.customer.name || ""}</td></tr>
          <tr><td style="padding:4px 0; color:#6b7280;">Sähköposti</td><td>${payload.customer.email || ""}</td></tr>
          <tr><td style="padding:4px 0; color:#6b7280;">Puhelin</td><td>${payload.customer.phone || ""}</td></tr>
          <tr><td style="padding:4px 0; color:#6b7280;">Syntymäaika</td><td>${payload.customer.birthdate || ""}</td></tr>
        </table>

        <h2 style="margin: 24px 0 8px 0; font-size: 16px;">Laskutustiedot</h2>
        <table style="width:100%; border-collapse:collapse;">
          <tr><td style="padding:4px 0; width:160px; color:#6b7280;">Osoite</td><td>${payload.billing.address}</td></tr>
          <tr><td style="padding:4px 0; color:#6b7280;">Postinumero</td><td>${payload.billing.postalCode}</td></tr>
          <tr><td style="padding:4px 0; color:#6b7280;">Postitoimipaikka</td><td>${payload.billing.city}</td></tr>
          <tr><td style="padding:4px 0; color:#6b7280;">Lähetystapa</td><td>${payload.billing.method}</td></tr>
        </table>

        <h2 style="margin: 24px 0 8px 0; font-size: 16px;">Tilatut tuotteet</h2>
        <div style="border:1px solid #e5e7eb; border-radius:8px; padding:12px; background:#f9fafb;">
          ${payload.items.map(it => `
            <div style="display:flex; justify-content:space-between; padding:6px 0;">
              <div>${it.title}</div>
              <div>${it.price} × ${it.quantity}</div>
            </div>
          `).join("")}
          <div style="border-top:1px solid #e5e7eb; margin-top:8px; padding-top:8px; display:flex; justify-content:space-between; font-weight:700;">
            <div>Yhteensä</div>
            <div>${payload.totalAmount.toFixed(2).replace('.', ',')} €</div>
          </div>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "tuki@omaverkkoturva.fi",
      to: [ADMIN_EMAIL],
      subject: "Uusi tilaustietolomake",
      html,
    });

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    console.error("send-admin-order error", err);
    return new Response(JSON.stringify({ success: false, error: (err as any)?.message || "Unknown error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});


