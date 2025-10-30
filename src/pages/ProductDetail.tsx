import React, { useMemo, useState } from 'react';
import PublicPageLayout from '@/components/PublicPageLayout';
import SEO from '@/components/SEO';
import { useParams, useNavigate } from 'react-router-dom';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import ShoppingCartModal from '@/components/ShoppingCart';
import OrderForm from '@/components/OrderForm';

type Product = {
  slug: string;
  title: string;
  price: number; // month price in EUR
  licenses: number;
  description: string;
  features: string[];
};

const PRODUCTS: Product[] = [
  {
    slug: 'henkilosuoja-yhdelle',
    title: 'Henkilösuoja Yhdelle',
    price: 21.99,
    licenses: 1,
    description:
      'Kattava suoja arjen digielämään - helppokäyttöinen palvelu, joka yhdistää tietoturvan, tuen ja vakuutuksen yhteen selkeään kokonaisuuteen.',
    features: [
      'Tietovuotovahti: Seuraa, jos henkilötietosi vuotavat verkkoon, ja ilmoittaa heti riskistä.',
      'Vakuutusturva: Korvaa vahinkoja, jos joudut tietomurron, huijauksen tai muun kyberrikoksen uhriksi. Omavastuu: 0 €',
      'Apu ja ohjeistus: Asiantuntijoiden tuki ja käytännön neuvot riskitilanteissa.',
    ],
  },
  {
    slug: 'henkilosuoja-tupla',
    title: 'Henkilösuoja Tupla',
    price: 28.99,
    licenses: 2,
    description:
      'Kattava suoja arjen digielämään - helppokäyttöinen palvelu, joka yhdistää tietoturvan, tuen ja vakuutuksen yhteen selkeään kokonaisuuteen.',
    features: [
      'Tietovuotovahti: Seuraa, jos henkilötietosi vuotavat verkkoon, ja ilmoittaa heti riskistä.',
      'Vakuutusturva: Korvaa vahinkoja, jos joudut tietomurron, huijauksen tai muun kyberrikoksen uhriksi. Omavastuu: 0 €',
      'Apu ja ohjeistus: Asiantuntijoiden tuki ja käytännön neuvot riskitilanteissa.',
    ],
  },
  {
    slug: 'henkilosuoja-perhe',
    title: 'Henkilösuoja Perhe',
    price: 32.99,
    licenses: 5,
    description:
      'Kattava suoja arjen digielämään - helppokäyttöinen palvelu, joka yhdistää tietoturvan, tuen ja vakuutuksen yhteen selkeään kokonaisuuteen.',
    features: [
      'Tietovuotovahti: Seuraa, jos henkilötietosi vuotavat verkkoon, ja ilmoittaa heti riskistä.',
      'Vakuutusturva: Korvaa vahinkoja, jos joudut tietomurron, huijauksen tai muun kyberrikoksen uhriksi. Omavastuu: 0 €',
      'Apu ja ohjeistus: Asiantuntijoiden tuki ja käytännön neuvot riskitilanteissa.',
    ],
  },
];

const PRODUCT_IMAGES: Record<string, { src: string; alt: string }> = {
  'henkilosuoja-yhdelle': { src: '/kuvapankki/viisi 1.png', alt: 'Henkilösuoja Yhdelle kuva' },
  'henkilosuoja-tupla': { src: '/kuvapankki/kaksi 1.png', alt: 'Henkilösuoja Tupla kuva' },
  'henkilosuoja-perhe': { src: '/kuvapankki/yksi 1.png', alt: 'Henkilösuoja Perhe kuva' },
};

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems, updateQuantity, removeFromCart, clearCart } = useShoppingCart();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState<'12' | '24'>('12');
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const pricesBySlug: Record<string, { twelve: number; twentyfour: number }> = {
    'henkilosuoja-yhdelle': { twelve: 129, twentyfour: 199 },
    'henkilosuoja-tupla': { twelve: 179, twentyfour: 279 },
    'henkilosuoja-perhe': { twelve: 219, twentyfour: 349 },
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = useMemo(() => PRODUCTS.find(p => p.slug === slug), [slug]);
  // Build image gallery: for 'henkilosuoja-yhdelle' use custom primary image first, then existing
  const galleryImages = useMemo(() => {
    if (!product) return [] as { src: string; alt: string }[];
    const main = PRODUCT_IMAGES[product.slug] || { src: '/kuvapankki/viisi 1.png', alt: product.title };
    const slugsWithPrimary = ['henkilosuoja-yhdelle', 'henkilosuoja-tupla', 'henkilosuoja-perhe'];
    if (slugsWithPrimary.includes(product.slug)) {
      const primary = { src: '/kuvapankki/henkilosuoja.png', alt: 'Henkilösuoja tuotekuva' };
      const rest = main.src === primary.src ? [] : [main];
      return [primary, ...rest];
    }
    return [main];
  }, [product]);

  if (!product) {
    return (
      <PublicPageLayout>
        <SEO title="Tuote ei löytynyt" description="Tuotetta ei löytynyt." />
        <div className="min-h-screen pt-44 pb-24 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Tuotetta ei löytynyt</h1>
            <button
              className="px-4 py-2 rounded-lg text-white"
              style={{ background: 'var(--gradient-navy)' }}
              onClick={() => navigate('/verkkokauppa')}
            >
              Takaisin verkkokauppaan
            </button>
          </div>
        </div>
      </PublicPageLayout>
    );
  }

  const addItem = () => {
    const mapping = pricesBySlug[product.slug];
    const priceToUse = mapping ? (selectedDuration === '12' ? mapping.twelve : mapping.twentyfour) : product.price;
    const priceLabelStr = priceToUse.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' }).replace('\u00A0€', ' €');
    addToCart({ title: `${product.title} – ${selectedDuration === '12' ? '12 kk' : '24 kk'}`, price: priceLabelStr });
    setShowCart(true);
  };

  // Use yearly pricing for this page; show 129 € for 'henkilosuoja-yhdelle'
  const priceLabel = selectedDuration === '24' ? '24kk hinta' : 'Vuosihinta';
  const displayPrice = (() => {
    const map = pricesBySlug[product.slug];
    if (!map) return product.price;
    return selectedDuration === '12' ? map.twelve : map.twentyfour;
  })();
  const pageTitle =
    product.slug === 'henkilosuoja-yhdelle'
      ? 'OmaVerkkoturva – Henkilösuoja Yhdelle'
      : product.slug === 'henkilosuoja-tupla'
      ? 'OmaVerkkoturva – Henkilösuoja Tupla'
      : product.slug === 'henkilosuoja-perhe'
      ? 'OmaVerkkoturva – Henkilösuoja Perhe'
      : product.title;
  return (
    <PublicPageLayout>
      <SEO title={`${product.title} – OmaVerkkoturva`} description={product.description} />
      <div className="min-h-screen pt-44 pb-24 bg-gradient-to-b from-white via-blue-50 to-blue-200">
        <div className="max-w-6xl mx-auto px-4">
          {/* Page title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-16">{pageTitle}</h1>
          {/* Three-column layout: image | details (wider) | pricing */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 xl:gap-2 items-start">
            {/* Left: product image */}
            <div className="flex flex-col items-center lg:items-start lg:col-span-1 lg:-ml-6 xl:-ml-10">
              <img
                src={(galleryImages[currentImageIndex] || { src: '/kuvapankki/viisi 1.png' }).src}
                alt={(galleryImages[currentImageIndex] || { alt: product.title }).alt || product.title}
                className="w-full h-auto max-w-sm lg:max-w-lg xl:max-w-xl bg-transparent lg:scale-105 xl:scale-110 origin-left"
              style={{ background: 'transparent', backgroundColor: 'transparent' }}
              loading="eager"
              decoding="async"
            />
              {galleryImages.length > 1 && (
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
              )}
                </div>
            {/* Middle: details content on page background (no card) */}
            <div className="mt-6 lg:mt-10 lg:col-span-2 lg:ml-0 xl:ml-0 lg:-mr-10 xl:-mr-16 2xl:-mr-20 lg:w-[520px] xl:w-[560px] 2xl:w-[600px] lg:justify-self-end">
              {/* Specs */}
              <div className="mb-6">
                {/* Kesto - kaksi korttia rinnakkain, vasen 12 kk, oikea 24 kk */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('12')}
                    className={`text-left rounded-lg border px-4 py-3 bg-white/80 ${selectedDuration === '12' ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:bg-white'}`}
                    aria-pressed={selectedDuration === '12'}
                  >
                    <div className="text-[11px] uppercase tracking-wide text-gray-500">Kesto</div>
                    <div className="text-base font-semibold text-gray-900">12 kk – {(pricesBySlug[product.slug]?.twelve ?? 129).toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' }).replace('\u00A0€', ' €')}</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDuration('24')}
                    className={`text-left rounded-lg border px-4 py-3 bg-white/80 ${selectedDuration === '24' ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:bg-white'}`}
                    aria-pressed={selectedDuration === '24'}
                  >
                    <div className="text-[11px] uppercase tracking-wide text-gray-500">Kesto</div>
                    <div className="text-base font-semibold text-gray-900">24 kk – {(pricesBySlug[product.slug]?.twentyfour ?? 199).toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' }).replace('\u00A0€', ' €')}</div>
                  </button>
                </div>

                {/* Lisenssit kestojen alla */}
                <div className="rounded-lg border border-gray-200 bg-white/80 px-4 py-3">
                  <div className="text-[11px] uppercase tracking-wide text-gray-500">Lisenssit</div>
                  <div className="text-base font-semibold text-gray-900">{product.licenses} kpl</div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300/60 to-transparent mb-4" />

              {/* Collapsible details */}
                <button
                type="button"
                onClick={() => setShowDetails(v => !v)}
                className="w-full flex items-center gap-2 text-blue-900 font-semibold hover:underline focus:outline-none focus:ring-0 bg-transparent py-1"
                aria-expanded={showDetails}
              >
                <span>Avaa tuotetiedot</span>
                <span
                  className={showDetails ? 'transform rotate-180 transition-transform text-sm' : 'transform rotate-0 transition-transform text-sm'}
                  aria-hidden="true"
                >
                  ▼
                </span>
                </button>
              <div
                className={showDetails ? 'mt-2 overflow-hidden transition-all duration-300 ease-out max-h-[1000px]' : 'mt-2 overflow-hidden transition-all duration-300 ease-in max-h-0'}
              >
                <div className="mb-2 text-[13px] font-semibold tracking-wide text-gray-900">Sisältää</div>
                <div className="grid grid-cols-1 gap-3 mb-5">
                  {product.features.map((f, idx) => {
                    const parts = f.split(':');
                    const hasTitle = parts.length > 1;
                    const title = hasTitle ? parts[0] : '';
                    const rest = hasTitle ? f.slice(f.indexOf(':') + 1).trim() : f;
                  return (
                    <div key={idx} className="rounded-xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm">
                      {hasTitle ? (
                        <>
                          <div className="text-[15px] font-semibold text-gray-900">{title}</div>
                          <div className="text-[14px] leading-6 text-gray-900">{rest}</div>
                        </>
                      ) : (
                        <div className="text-[14px] leading-6 text-gray-900">{f}</div>
                      )}
                    </div>
                  );
                  })}
                </div>
                <div className="rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-gray-800 leading-relaxed">{product.description}</div>
              </div>
              {/* Buttons removed here because actions are in the right column */}
            </div>

            {/* Right: pricing and add-to-cart */}
            <div className="rounded-2xl p-10 border border-blue-200/50 shadow-lg mt-4 lg:mt-0 lg:fixed lg:top-24 lg:right-4 xl:right-6 2xl:right-8 lg:w-[290px] xl:w-[330px] 2xl:w-[370px]" style={{ background: 'linear-gradient(135deg, #1e2a5e 0%, #1e3a8a 100%)' }}>
              <div className="text-white/80 text-sm mb-1">{priceLabel}</div>
              <div className="text-3xl font-extrabold text-white tracking-tight mb-4">{displayPrice.toLocaleString('fi-FI', { style: 'currency', currency: 'EUR' }).replace('\u00A0€', ' €')}</div>
              <div className="text-white/80 text-sm mb-6">Sopii {product.licenses === 1 ? 'yhdelle käyttäjälle' : product.licenses === 2 ? 'kahdelle käyttäjälle' : 'koko perheelle (5)'}.</div>
              <button
                className="w-full px-4 py-2.5 rounded-md text-blue-900 bg-white text-sm font-medium hover:opacity-90 transition-opacity"
                onClick={addItem}
              >
                Siirry tilaamaan
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
          onSubmit={() => { /* handled inside component with toasts */ }}
        />
      )}
    </PublicPageLayout>
  );
};

export default ProductDetail;


