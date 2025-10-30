import React from 'react';
import { Button } from '@/components/ui/button';

interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  onContinueOrder: () => void;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, onContinueOrder, onClose, onUpdateQuantity, onRemoveItem }) => {
  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.,]/g, '').replace(',', '.'));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full space-y-6 max-h-[80vh] overflow-y-auto my-0">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Tilausyhteenveto</h2>
            <p className="text-sm text-muted-foreground mt-1">Tarkista tilatut tuotteet ja hinta ennen tietojen täyttämistä</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Ostoskori on tyhjä</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">Tilatut tuotteet:</h3>
            </div>
            {items.map((item) => (
              <div key={item.id} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="font-semibold text-foreground whitespace-pre-line">{item.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">Määrä: 1</div>
                    <div className="font-bold text-primary mt-1">{item.price}</div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Poista tuote"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex items-center justify-between"></div>
              </div>
            ))}
          </div>
        )}
        
        {items.length > 0 && (
          <>
            {/* Terms summary */}
            <div className="space-y-3 text-sm text-foreground border-t border-border pt-4">
              <div className="font-semibold">Tilaus- ja käyttöehdot tiivistetysti</div>
              <p>Lähettämällä tämän tilauksen sitoudut OmaVerkkoturva-palvelun jatkuvaan tilaukseen, josta veloitetaan säännöllisesti. (Ilmaiskokeilut, jotka eivät vaadi sitoutumista, poikkeavat tästä.)</p>
              <p>Tilauksen hinta ja kesto näkyy tilauksen yhteenvedossa. Tilaus on voimassa toistaiseksi ja sen voi irtisanoa kuluvan kauden loppuun. Irtisanominen tulee tehdä vähintään 14 päivää ennen seuraavan kauden alkua.</p>
              <p>Tilatuilla palveluilla on 14 päivän peruutusoikeus.</p>
              <p>Palvelun käyttö edellyttää, että maksu on suoritettu. OmaVerkkoturva pidättää oikeuden keskeyttää palvelun, mikäli maksua ei ole vastaanotettu.</p>
              <p>Lähettämällä tilauksen hyväksyt myös OmaVerkkoturvan yleiset sopimusehdot ja palvelukohtaiset käyttöehdot, jotka löytyvät verkkosivuiltamme ja toimitetaan tilausvahvistuksen yhteydessä ilmoitettuun sähköpostiosoitteeseen.</p>
              <p>OmaVerkkoturva voi käyttää asiakkaan henkilötietoja ja tunnistamistietoja myös omaan suoramarkkinointiinsa tietosuojaselosteen mukaisesti.</p>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Yhteensä:</span>
                <span className="text-primary">{total.toFixed(2).replace('.', ',')} €/kk</span>
              </div>
            </div>
            
            <Button 
              onClick={onContinueOrder}
              className="w-full"
              style={{ background: 'var(--gradient-navy)' }}
            >
              Jatka tilausta
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;