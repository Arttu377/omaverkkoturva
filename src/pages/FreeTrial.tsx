import React, { useState } from 'react';
import PublicPageLayout from '@/components/PublicPageLayout';
import SEO from '@/components/SEO';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import ShoppingCartModal from '@/components/ShoppingCart';
import OrderForm from '@/components/OrderForm';

const FreeTrial: React.FC = () => {
  const { addToCart, cartItems, updateQuantity, removeFromCart, clearCart } = useShoppingCart();
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const title = 'OmaVerkkoturva – Ilmainen kokeilu 14 päivää';
  const priceText = '0 €';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryImages = [
    { src: '/kuvapankki/henkilosuoja.png', alt: 'Henkilösuoja tuotekuva' },
    { src: '/kuvapankki/viisi 1.png', alt: 'Henkilösuoja Yhdelle kuva' },
  ];

  const addItem = () => {
    addToCart({ title: 'Ilmainen kokeilu 14 päivää', price: priceText });
    setShowCart(true);
  };

  return (
    <PublicPageLayout>
      <SEO title={title} description="Kokeile OmaVerkkoturvaa maksutta 14 päivää. (Huom. Ei sisällä vakuutusta)" />
      <div className="min-h-screen pt-44 pb-24 bg-gradient-to-b from-white via-blue-50 to-blue-200">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-16">{title}</h1>

          {/* Layout: images | details | pricing */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 xl:gap-2 items-start">
            {/* Images (same style as product pages) */}
            <div className="flex flex-col items-center lg:items-start lg:col-span-1 lg:-ml-6 xl:-ml-10">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-auto max-w-sm lg:max-w-lg xl:max-w-xl bg-transparent lg:scale-105 xl:scale-110 origin-left"
                style={{ background: 'transparent', backgroundColor: 'transparent' }}
                loading="eager"
                decoding="async"
              />
              <div className="mt-3 w-full max-w-xl overflow-x-auto">
                <div className="flex gap-2 justify-center pl-4 lg:pl-8">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`shrink-0 rounded-md border ${idx === currentImageIndex ? 'border-blue-500' : 'border-gray-300'} bg-white/80`}
                      onClick={() => setCurrentImageIndex(idx)}
                      aria-label={`Näytä kuva ${idx + 1}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-16 w-16 object-contain p-1"
                        style={{ background: 'transparent', backgroundColor: 'transparent' }}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Details (wider) */}
            <div className="mt-6 lg:mt-10 lg:col-span-2 lg:ml-0 xl:ml-0 lg:-mr-10 xl:-mr-16 2xl:-mr-20 lg:justify-self-end">
              {/* Descriptor */}
              <div className="mb-3 text-base font-semibold text-gray-900">Tutustu palveluun maksutta 14 päivän ajan</div>

              {/* Features */}
              <ul className="grid grid-cols-1 gap-3 mb-5">
                {[
                  'Tietojen monitorointi ja ilmoitus tietovuodoista',
                  'Ei jatku automaattisesti maksullisena',
                  'Mahdollisuus tutustua palvelun ominaisuuksiin',
                ].map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                    <span className="text-gray-900 leading-6">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-600 italic">(huom. Ei sisällä vakuutusta)</div>
            </div>

            {/* Pricing card */}
            <div className="rounded-2xl p-10 border border-blue-200/50 shadow-lg lg:fixed lg:top-24 lg:right-4 xl:right-6 2xl:right-8 lg:w-[290px] xl:w-[330px] 2xl:w-[370px]" style={{ background: 'linear-gradient(135deg, #1e2a5e 0%, #1e3a8a 100%)' }}>
              <div className="text-white/80 text-sm mb-1">Hinta</div>
              <div className="text-3xl font-extrabold text-white tracking-tight mb-4">{priceText}</div>
              <div className="text-white/80 text-sm mb-6">Ilmainen 14 päivää</div>
              <button
                className="w-full px-4 py-2.5 rounded-md text-blue-900 bg-white text-sm font-medium hover:opacity-90 transition-opacity"
                onClick={addItem}
              >
                Aloita ilmainen kokeilu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart modal */}
      {showCart && (
        <ShoppingCartModal
          items={cartItems}
          onContinueOrder={() => { setShowCart(false); setShowOrderForm(true); }}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      )}

      {/* Order form modal */}
      {showOrderForm && (
        <OrderForm
          onClose={() => setShowOrderForm(false)}
          onSubmit={() => {}}
        />
      )}
    </PublicPageLayout>
  );
};

export default FreeTrial;


