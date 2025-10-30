import React from 'react';
import PublicPageLayout from '@/components/PublicPageLayout';
import SEO from '@/components/SEO';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Verkkokauppa = () => {
  const { addToCart } = useShoppingCart();
  const navigate = useNavigate();
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
        {/* Floating ostoskori poistettu tämän sivun yläreunasta pyynnöstä */}
        
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
              <div key={index} className="relative rounded-2xl p-0">
                <div className="rounded-2xl bg-white/90 backdrop-blur-sm text-left h-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  {/* Accent bar */}
                  <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {pkg.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                        {index === 0 && 'Yhdelle'}
                        {index === 1 && 'Kahdelle'}
                        {index === 2 && 'Perhe'}
                      </span>
                    </div>
                    {/* Descriptor */}
                    <div className="text-sm text-gray-600">
                      {index === 0 && 'Sisältää vakuutusturvan'}
                      {index === 1 && 'Sisältää vakuutusturvan kahdelle'}
                      {index === 2 && 'Sisältää vakuutusturvan viidelle'}
                    </div>
                    {/* Starting price */}
                    <div className="text-sm font-semibold text-gray-900 mb-5">
                      {index === 0 && 'Alk. 129€/vuosi'}
                      {index === 1 && 'Alk. 179€/vuosi'}
                      {index === 2 && 'Alk. 219€/vuosi'}
                    </div>
                
                {/* Package images removed per request */}
                
                    <ul className="space-y-3 mb-7">
                      {pkg.features
                        .filter((feature) => !feature.startsWith('Sisältää '))
                        .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                          <span className="text-gray-800 leading-6">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => navigate(`/verkkokauppa/tuote/${index === 0 ? 'henkilosuoja-yhdelle' : index === 1 ? 'henkilosuoja-tupla' : 'henkilosuoja-perhe'}`)}
                      className="w-full text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                      style={{ background: 'var(--gradient-navy)' }}
                    >
                      Valitse paketti
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ilmainen kokeilujakso - moved below paid packages */}
          <div id="free-trial" className="mt-16 flex justify-center scroll-mt-40">
            <div className="w-full max-w-2xl">
              <div className="rounded-2xl bg-white/90 backdrop-blur-sm text-left border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                      {freeTrial.title}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Kokeile</span>
                  </div>
                  <div className="text-sm text-gray-600">Tutustu palveluun maksutta</div>
                  <div className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">{freeTrial.price}</div>

                  <ul className="space-y-3 mb-5">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                      <span className="text-gray-800 leading-6">Tietojen monitorointi ja ilmoitus tietovuodoista</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                      <span className="text-gray-800 leading-6">Ei sitoumuksia eikä avausmaksuja</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                      <span className="text-gray-800 leading-6">Mahdollisuus tutustua palvelun ominaisuuksiin</span>
                    </li>
                  </ul>
                  <div className="text-sm text-gray-600 mb-5">(huom. Ei sisällä vakuutusta)</div>

                  <button 
                    onClick={() => navigate('/verkkokauppa/ilmainen-kokeilu')}
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  >
                    Aloita ilmainen kokeilu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicPageLayout>
  );
};

export default Verkkokauppa;