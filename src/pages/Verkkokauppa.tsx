import React from 'react';
import PublicPageLayout from '@/components/PublicPageLayout';
import SEO from '@/components/SEO';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import FloatingCart from '@/components/FloatingCart';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Verkkokauppa = () => {
  const { addToCart } = useShoppingCart();
  const location = useLocation();

  const packages = [
    {
      title: "Henkilösuoja Yhdelle",
      price: "21,99 €/kk",
      features: [
        "Tietojen monitorointi ja ilmoitus tietovuodoista", 
        "Vakuutus, joka turvaa sinut vahinkojen varalta",
        "Apu ja tuki"
      ]
    },
    {
      title: "Henkilösuoja Tupla", 
      price: "28,99 €/kk",
      features: [
        "Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä läheisellesi",
        "Vakuutus, joka turvaa sinut ja läheisesi vahinkojen varalta", 
        "Apu ja tuki",
        "Sisältää 2 lisenssiä"
      ]
    },
    {
      title: "Henkilösuoja Perhe", 
      price: "32,99 €/kk", 
      features: [
        "Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä koko perheellesi",
        "Vakuutus, joka turvaa sinut ja koko perheesi vahinkojen varalta", 
        "Apu ja tuki",
        "Sisältää 5 lisenssiä"
      ]
    }
  ];

  const freeTrial = {
    title: "Henkilösuoja - Veloitukseton kokeilujakso 14pv",
    price: "0€"
  };

  useEffect(() => {
    // Jos tultiin etusivulta napilta ja mukana state scrollTo
    if (location.state && (location.state as any).scrollTo === 'free-trial') {
      // Odota seuraavaan tikkiin, jotta layout on valmis
      setTimeout(() => {
        const el = document.getElementById('free-trial');
        if (el) {
          const isMobile = window.innerWidth < 768;
          const navbarOffsetPx = isMobile ? 100 : 160; // mobiilissa hieman pienempi offset
          const rect = el.getBoundingClientRect();
          const targetTop = rect.top + window.scrollY - navbarOffsetPx;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location.state]);


  return (
    <PublicPageLayout>
      <SEO 
        title="Verkkokauppa - Identiteettiturva paketit" 
        description="Valitse sinulle sopiva identiteettiturva paketti. Suojaa itsesi ja läheisesi verkkorikollisuudelta."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-200 pt-44 pb-12">
        {/* Floating ostoskori */}
        <FloatingCart />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Valitse sinulle sopivin turva
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Valitse parhaiten sopiva suojaus.
            </p>
            <p className="text-sm text-muted-foreground">
              Jokaisessa tilauksessa on 14vrk maksuton peruutusoikeus.
            </p>
          </div>

          {/* Maksulliset paketit */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {pkg.title}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-6">
                    {pkg.price}
                  </div>
                </div>
                
                {/* Image for Henkilösuoja Yhdelle package */}
                {index === 0 && (
                  <div className="flex justify-center mb-2">
                    <img 
                      src="/kuvapankki/viisi 1.png" 
                      alt="Henkilösuoja Yhdelle kuva" 
                      className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg"
                      style={{ 
                        background: 'transparent', 
                        backgroundColor: 'transparent'
                      }}
                    />
                  </div>
                )}
                
                {/* Image for Henkilösuoja Tupla package */}
                {index === 1 && (
                  <div className="flex justify-center mb-2">
                    <img 
                      src="/kuvapankki/kaksi 1.png" 
                      alt="Henkilösuoja Tupla kuva" 
                      className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg"
                      style={{ 
                        background: 'transparent', 
                        backgroundColor: 'transparent'
                      }}
                    />
                  </div>
                )}
                
                {/* Image for Henkilösuoja Perhe package */}
                {index === 2 && (
                  <div className="flex justify-center mb-2">
                    <img 
                      src="/kuvapankki/yksi 1.png" 
                      alt="Henkilösuoja Perhe kuva" 
                      className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg"
                      style={{ 
                        background: 'transparent', 
                        backgroundColor: 'transparent'
                      }}
                    />
                  </div>
                )}
                
                <ul className="space-y-3 mb-8 text-left">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-gray-700">• {feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => addToCart(pkg)}
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Valitse paketti
                </button>
              </div>
            ))}
          </div>

          {/* Ilmainen kokeilujakso - moved below paid packages */}
          <div id="free-trial" className="mt-16 flex justify-center scroll-mt-40">
            <div className="w-full max-w-md">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {freeTrial.title}
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  {freeTrial.price}
                </div>
                {/* Image for free trial card */}
                <div className="flex justify-center mb-2">
                  <img 
                    src="/kuvapankki/Kappaleen teksti (15).png" 
                    alt="Kokeilujakso kuva" 
                    className="w-full h-auto max-w-[180px] md:max-w-[260px]"
                    style={{ 
                      background: 'transparent', 
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
                {/* Features under free trial image */}
                <ul className="space-y-2 mb-6 text-left">
                  <li className="flex items-start"><span className="text-gray-700">• Tietojen monitorointi ja ilmoitus tietovuodoista</span></li>
                  <li className="flex items-start"><span className="text-gray-700">• Ei sitoumuksia eikä avausmaksuja</span></li>
                  <li className="flex items-start"><span className="text-gray-700">• Mahdollisuus tutustua palvelun ominaisuuksiin</span></li>
                </ul>
                
                <button 
                  onClick={() => addToCart(freeTrial)}
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  Aloita ilmainen kokeilu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicPageLayout>
  );
};

export default Verkkokauppa;