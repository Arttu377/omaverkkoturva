import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
interface OrderFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}
const OrderForm: React.FC<OrderFormProps> = ({
  onClose,
  onSubmit
}) => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { cartItems, clearCart } = useShoppingCart();
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      toast({
        title: "Hyväksy ehdot",
        description: "Sinun täytyy hyväksyä kaikki ehdot jatkaaksesi tilausta.",
        variant: "destructive"
      });
      return;
    }

    // Salli tilaus myös ilman sisäänkirjautumista

    if (cartItems.length === 0) {
      toast({
        title: "Tyhjä ostoskori",
        description: "Ostoskorisi on tyhjä. Lisää tuotteita ennen tilaamista.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());
      
      // Calculate total amount
      const totalAmount = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
        return total + (price * item.quantity);
      }, 0);

      // Build payload for save-order function
      const orderData = {
        customer_email: data.email,
        customer_first_name: (data.firstName as string)?.split(' ')[0] || (data.firstName as string),
        customer_last_name: (data.firstName as string)?.split(' ').slice(1).join(' ') || '',
        customer_phone: data.phone,
        customer_birth_date: data.birthdate,
        billing_address: data.address,
        billing_postal_code: data.postalCode,
        billing_city: data.city,
        products: cartItems.map(ci => ({ title: ci.title, price: ci.price, quantity: ci.quantity })),
        total_price: totalAmount,
        promo_code: data.promoCode || undefined,
      };

      // Send admin-only order email via Resend (no DB save required)
      const { error: emailError } = await supabase.functions.invoke('send-admin-order', {
        body: {
          customer: {
            name: data.firstName,
            email: data.email,
            phone: data.phone,
            birthdate: data.birthdate,
          },
          billing: {
            address: data.address,
            postalCode: data.postalCode,
            city: data.city,
            method: (data.billingMethod as string) || 'paper',
          },
          items: cartItems,
          totalAmount
        }
      });

      if (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't throw error for email failure - order is still created
      }

      // Clear cart and close form
      clearCart();
      onClose();
      
      toast({
        title: "Kiitos tilauksestasi!",
      });

      // Call the original onSubmit for any additional handling
      onSubmit(data);

    } catch (error: any) {
      console.error('Error submitting order:', error);
      toast({
        title: "Virhe",
        description: "Tilauksen lähettämisessä tapahtui virhe. Yritä uudelleen.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mt-12 md:mt-0 space-y-6 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-foreground">Tilaustiedot</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Etu- ja sukunimi *</Label>
              <Input id="firstName" name="firstName" placeholder="Etu- ja sukunimi" required />
            </div>
            <div>
              <Label htmlFor="email">Sähköpostiosoite *</Label>
              <Input id="email" name="email" type="email" placeholder="Sähköpostiosoite" required />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Puhelinnumero *</Label>
              <Input id="phone" name="phone" type="tel" placeholder="Puhelinnumero" required />
            </div>
            <div>
              <Label htmlFor="birthdate">Syntymäaika *</Label>
              <Input id="birthdate" name="birthdate" type="date" defaultValue="1990-01-01" required />
            </div>
          </div>
          
          <div>
            <Label htmlFor="address">Laskutusosoite *</Label>
            <Input id="address" name="address" placeholder="Esimerkkikatu 1 A 2" required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="postalCode">Postinumero *</Label>
              <Input id="postalCode" name="postalCode" placeholder="40100" required />
            </div>
            <div>
              <Label htmlFor="city">Postitoimipaikka *</Label>
              <Input id="city" name="city" placeholder="JYVÄSKYLÄ" required />
            </div>
          </div>
          
          {/* Laskun lähettämistapa */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Laskun lähettämistapa</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-accent/30 cursor-pointer">
                <input type="radio" name="billingMethod" value="paper" className="accent-blue-600" defaultChecked />
                <span className="text-sm">Paperilasku (+3,90 €)</span>
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-accent/30 cursor-pointer">
                <input type="radio" name="billingMethod" value="email" className="accent-blue-600" />
                <span className="text-sm">Sähköposti</span>
              </label>
              <label className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-accent/30 cursor-pointer">
                <input type="radio" name="billingMethod" value="elasku" className="accent-blue-600" />
                <span className="text-sm">E-lasku</span>
              </label>
            </div>
          </div>
          
          <div>
            <Label htmlFor="promoCode">Tarjouskoodi</Label>
            <Input id="promoCode" name="promoCode" placeholder="Kirjoita koodi tähän" />
          </div>
          
          <div className="space-y-4 pt-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="privacy" checked={privacyAccepted} onCheckedChange={checked => setPrivacyAccepted(checked as boolean)} className="mt-1" />
                <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">Lähettämällä tämän lomakkeen vakuutan, että antamani tiedot ovat oikein. Lisäksi hyväksyn henkilötietojeni käsittelyn OmaVerkkoturvan tietosuojaselosteen mukaisesti.</Label>
              </div>
              

            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              style={{ background: 'var(--gradient-navy)' }}
              disabled={!privacyAccepted || loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Lähetetään...
                </>
              ) : (
                'Lähetä tilaus'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>;
};
export default OrderForm;