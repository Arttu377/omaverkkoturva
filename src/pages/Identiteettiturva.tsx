import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Identiteettiturva = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [coverageSnapEnabled, setCoverageSnapEnabled] = useState(false);
  const [supportSnapEnabled, setSupportSnapEnabled] = useState(false);
  const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});
  const coverageRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const supportCarouselRef = useRef<HTMLDivElement>(null);
  
  // Ensure the card currently in view appears on top by adjusting z-index dynamically
  const updateCarouselZIndex = (container: HTMLDivElement | null) => {
    if (!container) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-card="true"]'));
    // Compute distance to center and assign higher z-index to closer cards
    const distances = cards.map((el) => {
      const rectLeft = el.offsetLeft; // relative to scroll container
      const center = rectLeft + el.offsetWidth / 2;
      const distance = Math.abs(center - containerCenter);
      return { el, distance };
    }).sort((a, b) => a.distance - b.distance);
    // Highest z-index for the closest card, then decreasing
    const base = 1000;
    distances.forEach(({ el }, idx) => {
      el.style.zIndex = String(base - idx);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      updateCarouselZIndex(carouselRef.current);
      updateCarouselZIndex(supportCarouselRef.current);
    };
    const updateCardMargins = () => {
      const isMobile = window.innerWidth < 768;
      const containers = [carouselRef.current, supportCarouselRef.current];
      
      containers.forEach((container) => {
        if (!container) return;
        // Update container padding
        if (isMobile) {
          container.style.paddingRight = '16px';
        } else {
          container.style.paddingRight = 'calc(50vw - 325px)';
        }
        
        // Update spacers
        const spacers = container.querySelectorAll('.flex-shrink-0.snap-start');
        spacers.forEach((spacer) => {
          const spacerEl = spacer as HTMLElement;
          if (isMobile) {
            const cardWidth = 300; // mobile card width
            spacerEl.style.width = `max(16px, calc(50vw - ${cardWidth / 2}px))`;
            spacerEl.style.minWidth = `max(16px, calc(50vw - ${cardWidth / 2}px))`;
          } else {
            spacerEl.style.width = 'calc(50vw - 325px)';
            spacerEl.style.minWidth = 'calc(50vw - 325px)';
          }
        });
        
        const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-card="true"]'));
        cards.forEach((card, index) => {
          const cardWidth = card.offsetWidth || (isMobile ? 300 : 650);
          const isFirst = index === 0;
          const isLast = index === cards.length - 1;
          const cardStyle = card.style;
          
          if (isMobile) {
            // Mobile: smaller margins and adjust scrollMargin
            const scrollMargin = `max(16px, calc(50vw - ${cardWidth / 2}px))`;
            cardStyle.scrollMarginLeft = scrollMargin;
            if (isFirst) {
              cardStyle.marginRight = '-20px';
              cardStyle.marginLeft = '0';
            } else if (isLast) {
              cardStyle.marginLeft = '-20px';
              cardStyle.marginRight = '0';
              cardStyle.scrollMarginRight = scrollMargin;
            } else {
              cardStyle.marginLeft = '-20px';
              cardStyle.marginRight = '-20px';
            }
          } else {
            // Desktop: original margins
            const scrollMargin = 'calc(50vw - 325px)';
            cardStyle.scrollMarginLeft = scrollMargin;
            if (isFirst) {
              cardStyle.marginRight = '-150px';
              cardStyle.marginLeft = '0';
            } else if (isLast) {
              cardStyle.marginLeft = '-150px';
              cardStyle.marginRight = '0';
              cardStyle.scrollMarginRight = scrollMargin;
            } else {
              cardStyle.marginLeft = '-150px';
              cardStyle.marginRight = '-150px';
            }
          }
        });
      });
    };
    
    const handleResize = () => {
      handleScroll();
      updateCardMargins();
    };
    // Initial
    handleScroll();
    handleResize();
    // Listeners
    const cov = carouselRef.current;
    const sup = supportCarouselRef.current;
    cov?.addEventListener('scroll', handleScroll, { passive: true } as AddEventListenerOptions);
    sup?.addEventListener('scroll', handleScroll, { passive: true } as AddEventListenerOptions);
    window.addEventListener('resize', handleResize, { passive: true } as AddEventListenerOptions);
    return () => {
      cov?.removeEventListener('scroll', handleScroll as EventListener);
      sup?.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('resize', handleResize as EventListener);
    };
  }, []);
  
  const scrollToNextCard = (container: HTMLDivElement | null, direction: 'prev' | 'next') => {
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-card="true"]'));
    if (cards.length === 0) return;
    
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    
    // Find the currently visible card (closest to center)
    let currentIndex = 0;
    let minDistance = Infinity;
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const distance = Math.abs(cardCenter - containerCenterX);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = index;
      }
    });
    
    // Calculate target index
    let targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    targetIndex = Math.max(0, Math.min(targetIndex, cards.length - 1));
    
    if (targetIndex === currentIndex) return;
    
    // Scroll to target card
    const targetCard = cards[targetIndex];
    const cardRect = targetCard.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft + (cardRect.left - containerRect.left) - (containerRect.width / 2) + (cardRect.width / 2);
    
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    scrollToNextCard(carouselRef.current, 'prev');
  };
  const scrollNext = () => {
    scrollToNextCard(carouselRef.current, 'next');
  };

  const scrollSupportPrev = () => {
    scrollToNextCard(supportCarouselRef.current, 'prev');
  };
  const scrollSupportNext = () => {
    scrollToNextCard(supportCarouselRef.current, 'next');
  };
  
  const toggleCard = (cardId: string) => {
    setOpenCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };
  
  useLayoutEffect(() => {
    // Force initial scroll before paint so it appears as the default position
    const desiredStartPx = 240;

    const forceInitialScroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = desiredStartPx;
      }
      if (supportCarouselRef.current) {
        supportCarouselRef.current.scrollLeft = desiredStartPx;
      }
    };

    forceInitialScroll();
    // Redo after layout and after a tick to cover font/image reflow
    requestAnimationFrame(() => {
      forceInitialScroll();
      setTimeout(forceInitialScroll, 0);
    });

    // Enable snapping after we set the starting scroll
    setCoverageSnapEnabled(true);
    setSupportSnapEnabled(true);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsAnimated(true);
        } else {
          setIsAnimated(false);
        }
      },
      { 
        threshold: 0.4,
        rootMargin: '-50px 0px -50px 0px'
      }
    );
    
    if (coverageRef.current) {
      observer.observe(coverageRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <PageLayout>
      <SEO title="Identiteettiturva - Turvaa rahasi ja henkilötietosi" description="Kattava identiteettiturva joka havaitsee tietovuodot, tarjoaa vakuutusturvan 13 500 € asti ja suojaa huijauksilta." />
      
      <div className="min-h-screen relative">
          {/* Navy blue gradient background for the entire page */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              transparent 18%,
              rgba(30, 58, 138, 0.2) 23%,
              rgba(30, 58, 138, 0.4) 28%,
              rgba(30, 58, 138, 0.6) 33%,
              rgba(30, 58, 138, 0.8) 38%,
              rgba(30, 58, 138, 0.9) 43%,
              rgba(30, 58, 138, 0.95) 48%,
              rgba(30, 58, 138, 0.3) 53%,
              rgba(30, 58, 138, 0.25) 58%,
              rgba(30, 58, 138, 0.2) 63%,
              rgba(30, 58, 138, 0.15) 68%,
              rgba(30, 58, 138, 0.1) 73%,
              rgba(30, 58, 138, 0.05) 78%,
              transparent 83%,
              transparent 88%,
              transparent 100%
            )`,
            zIndex: -1
          }}></div>

          
  
        <div className="w-full pt-24 pb-40 relative">
          {/* Subtle blue gradient background */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `linear-gradient(
              to bottom,
              rgba(147, 197, 253, 0.08) 0%,
              rgba(147, 197, 253, 0.12) 50%,
              rgba(147, 197, 253, 0.08) 100%
            )`,
            zIndex: 0
          }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="space-y-8 pl-0 lg:pl-20">
              {/* Title section */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Turvaa rahasi ja henkilötietosi helposti yhdellä ratkaisulla
                </h1>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-6 bg-gradient-to-r from-blue-50/50 to-transparent py-4 rounded-r-lg" style={{ borderLeft: '4px solid rgb(30, 42, 94)' }}>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                      Havaitsee jos tietosi joutuvat vääriin käsiin
                    </h3>
                  <p className="text-base text-muted-foreground leading-relaxed pr-2">
                      Palvelu monitoroi ja ilmoittaa, mikäli tietojasi päätyy verkossa vääriin käsiin.
                    </p>
                </div>
                
                <div className="relative pl-6 bg-gradient-to-r from-blue-50/50 to-transparent py-4 rounded-r-lg" style={{ borderLeft: '4px solid rgb(30, 42, 94)' }}>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                      Vakuutusturva 13 500 € asti
                    </h3>
                  <p className="text-base text-muted-foreground leading-relaxed pr-2">
                      Korvaa taloudelliset vahingot ilman omavastuuta.
                    </p>
                </div>
                
                <div className="relative pl-6 bg-gradient-to-r from-blue-50/50 to-transparent py-4 rounded-r-lg" style={{ borderLeft: '4px solid rgb(30, 42, 94)' }}>
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">
                      Kattaa myös huijaukset
                    </h3>
                  <p className="text-base text-muted-foreground leading-relaxed pr-2">
                      Suojaa tietojenkalastelun, petosten ja väärinkäytösten seurauksilta, 0 € omavastuu.
                    </p>
                </div>
              </div>
              
              {/* Mobile image - shown before Verkkokauppaan button on mobile */}
              <div className="lg:hidden mb-6 mx-[-1rem] sm:mx-auto sm:w-full sm:max-w-[520px] md:mx-0 md:w-full md:max-w-[600px] md:mx-auto">
                <img 
                  src="/kuvapankki/Kappaleen teksti (81).png" 
                  alt="Henkilösuoja kuva" 
                  className="block w-screen h-[80vw] object-cover object-center sm:w-full sm:h-auto sm:max-w-[520px] md:w-full md:h-auto md:max-w-[600px]"
                  style={{ 
                    background: 'transparent', 
                    backgroundColor: 'transparent',
                    display: 'block'
                  }}
                />
              </div>
              
              {/* Verkkokauppaan button */}
              <div className="mt-8">
                <Link 
                  to="/verkkokauppa" 
                   className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  style={{ background: 'var(--gradient-navy)' }}
                >
                  Verkkokauppaan
                </Link>
              </div>
            </div>
            
            {/* Right side - henkilösuoja 2.png image */}
            <div className="hidden lg:block lg:flex lg:justify-end lg:items-center lg:translate-x-20">
              <img 
                src="/kuvapankki/Kappaleen teksti (81).png" 
                alt="Henkilösuoja kuva" 
                className="h-auto"
                style={{ 
                  background: 'transparent', 
                  backgroundColor: 'transparent',
                  width: '800px',
                  maxWidth: 'none'
                }}
              />
            </div>
            </div>
          </div>
          

        </div>
        
        {/* How identity protection works section */}
        <div className="w-full py-24 relative" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
          {/* Solid blue background - darker navy like top banner */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'rgb(30, 42, 94)',
            zIndex: 0
          }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-32">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Kuinka henkilösuoja sitten toimii?
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               {/* Left side - content */}
               <div className="space-y-16">
                 <div className="relative pl-6 border-l-4 border-blue-300/80">
                   <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">
                     Valvoo tärkeintä ennen kuin ongelmat alkavat
                   </h3>
                   <p className="text-lg text-white/95 leading-relaxed pr-4">
                     Henkilösuoja ei rajoitu vain tietovuotojen tarkkailuun. Palvelu seuraa henkilötietojasi, kuten sähköpostia, puhelinnumeroa, maksukortteja ja tunnuksia. Saat varoitukset ajoissa, jos tietojasi käytetään luvatta tai jos havaitsemme muutoksia, jotka voivat viitata väärinkäytökseen. Seuraamme myös luottoon liittyviä tapahtumia ja julkisia rekistereitä. Ilmoitamme luvattomista muutoksista, rikollisesta käytöstä ja varhaisista varoitusmerkeistä, jotta ehdit reagoida ajoissa ja pysyt turvassa.
                   </p>
                 </div>
                 <div className="relative pl-6 border-l-4 border-blue-300/80">
                   <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">
                     Suojaa ja opi reaaliajassa
                   </h3>
                   <p className="text-lg text-white/95 leading-relaxed pr-4">
                     Turva ei ole pelkkiä ilmoituksia. Henkilösuoja ohjaa käyttäjää heti riskien ilmetessä antamalla neuvoja, käytännön toimenpiteitä ja lyhyitä oppaita. Lisäksi poistamme paljastuneita henkilötietoja julkisista lähteistä, ennen kuin niitä voidaan hyödyntää väärin.
                   </p>
                 </div>
                 <div className="relative pl-6 border-l-4 border-blue-300/80">
                   <h3 className="text-3xl font-bold text-white mb-5 tracking-tight">
                     Vakuutusturva antaa turvaa pahimman sattuessa
                   </h3>
                   <p className="text-lg text-white/95 leading-relaxed pr-4">
                     Jos vahinko silti tapahtuu, et jää yksin. Henkilösuoja sisältää vakuutuksen ja tukipalvelut, jotka auttavat esimerkiksi identiteettivarkauden, SIM-kortin kaappauksen, verkkohäirinnän ja taloudellisten menetysten sattuessa. Käytössäsi on asiantuntijatuki ja korvaus turvaksi.
                   </p>
                 </div>
                  </div>
               
               {/* Right side - henkilösuoja 5.png image */}
               <div className="hidden lg:block lg:flex lg:justify-end lg:items-center mt-24 translate-x-16 lg:translate-x-20 xl:translate-x-24">
                 <img 
                   src="/kuvapankki/Kappaleen teksti (41).png" 
                   alt="Henkilösuoja 5 kuva" 
                   className="w-[360px] h-auto max-w-[360px] lg:w-[420px] lg:max-w-[420px] xl:w-[480px] xl:max-w-[480px]"
                   style={{ 
                     background: 'transparent', 
                     backgroundColor: 'transparent'
                   }}
                 />
               </div>
            </div>
            
            {/* Mobile image - shown after content on mobile */}
            <div className="lg:hidden flex justify-center items-center mt-16 mb-8">
              <img 
                src="/kuvapankki/Kappaleen teksti (41).png" 
                alt="Henkilösuoja 5 kuva" 
                className="h-auto w-[450px] md:w-[600px]"
                style={{ 
                  background: 'transparent', 
                  backgroundColor: 'transparent',
                  maxWidth: 'none'
                }}
              />
            </div>
          </div>
        </div>
        </div>
        
        {/* Identity protection section */}
        <div className="relative py-12 px-6 lg:px-12 overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
          {/* Subtle blue gradient background - overlay to lighten the darker blue */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.6) 0%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(255, 255, 255, 0.6) 100%
            )`,
            zIndex: 0
          }}></div>
          <div className="absolute inset-0 pointer-events-none" style={{
            background: `linear-gradient(
              to bottom,
              rgba(147, 197, 253, 0.08) 0%,
              rgba(147, 197, 253, 0.12) 50%,
              rgba(147, 197, 253, 0.08) 100%
            )`,
            zIndex: 1
          }}></div>
          <div className="relative py-12 z-10">
          <div className="relative container mx-auto px-4">
                        <div className="mb-16">
              <div className="max-w-3xl mx-auto mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-center">
                  Identiteetti on nykyajan valuutta
                </h2>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mt-6 mb-24 text-center">
                  Yksi tietovuoto voi maksaa tuhansia euroja
                </h3>
              </div>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div className="max-w-3xl pt-8">
                    <div className="relative pl-6 border-l-4 rounded-r-lg bg-gradient-to-r from-blue-50/30 to-transparent py-6 pr-6" style={{ borderLeftColor: 'rgb(30, 42, 94)' }}>
                    <div className="space-y-6 text-left">
                      <p className="text-lg text-foreground leading-relaxed">
                        Verkkorikollisuus, tietovuodot ja identiteettivarkaudet ovat yleistyneet merkittävästi viime vuosina. Jo pelkän sähköpostiosoitteen ja salasanan avulla rikolliset voivat saada pääsyn henkilökohtaisiin tileihisi, tehdä ostoksia nimissäsi tai hakea lainaa luvattomasti.
                      </p>
                      
                      <p className="text-lg text-foreground leading-relaxed">
                        Digitaalinen identiteetti on nyky-yhteiskunnassa arvokas resurssi ja sen väärinkäyttö voi aiheuttaa vakavia taloudellisia sekä juridisia seurauksia.
                      </p>
                      
                        <p className="text-lg text-foreground leading-relaxed">
                        Siksi yksilön tunnistetietojen suojaaminen tulisi nähdä yhtä tärkeänä kuin pankkitunnusten turvaaminen.
                      </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center lg:justify-end items-start">
                    <img 
                      src="/kuvapankki/Kappaleen teksti (60).png" 
                      alt="Identiteettiturva kuva" 
                      className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto -mt-8 lg:-mt-16"
                      style={{ 
                        background: 'transparent', 
                        backgroundColor: 'transparent'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="max-w-5xl mx-auto mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 py-8 px-6 text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                      62,9M €
                    </div>
                    <div className="h-1 w-16 bg-blue-300/50 mx-auto mb-4 rounded-full"></div>
                    <p className="text-white text-sm leading-relaxed mb-3">
                      Vuonna 2024 suomalaiset menettivät nettihuijauksiin 62,9 miljoonaa euroa, joka on 40 % enemmän kuin vuonna 2023, jolloin summa oli 44,2 miljoonaa euroa.
                    </p>
                      <p className="text-white/70 text-xs mt-3">* Finanssiala ry</p>
                   </div>
                   
                   <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 py-8 px-6 text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                        107,8M €
                      </div>
                      <div className="h-1 w-16 bg-blue-300/50 mx-auto mb-4 rounded-full"></div>
                      <p className="text-white text-sm leading-relaxed mb-3">
                        Yritettyjä huijausyrityksiä oli 107,2 milj. euroa vuonna 2024, kun taas pankit onnistuivat estämään ja palauttamaan 44,3 milj. euroa.
                      </p>
                      <p className="text-white/70 text-xs mt-3">* Finanssiala ry</p>
                   </div>
                   
                   <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 py-8 px-6 text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                        70%
                      </div>
                      <div className="h-1 w-16 bg-blue-300/50 mx-auto mb-4 rounded-full"></div>
                      <p className="text-white text-sm leading-relaxed mb-3">
                        Lähes 70 % suomalaisista on ollut digihuijausten uhreja tai kohdannut yrityksiä, joissa heitä on yritetty huijata.
                      </p>
                      <p className="text-white/70 text-xs mt-3">* Finanssiala ry</p>
                 </div>
                   </div>
                 </div>
               </div>
            </div>
           </div>
          </div>
        </div>
         
                   {/* Cases section */}
          <div className="w-full py-16 mb-16 relative overflow-hidden"
            style={{
              width: '100vw',
              marginLeft: 'calc(50% - 50vw)',
              marginRight: 'calc(50% - 50vw)'
            }}
          >
             {/* White overlay to hide global gradient before image */}
             <div className="absolute inset-0 bg-white pointer-events-none" style={{ zIndex: 0 }}></div>
             {/* Background image for this section only */}
             <div className="absolute inset-0 w-full h-full z-10">
               <img 
                 src="/kuvapankki/iStock-1394172078.jpg" 
                 alt="Scam Cases Background" 
                 className="w-full h-full object-cover object-top"
               />
               <div className="absolute inset-0 bg-black/50"></div>
             </div>
             
             {/* Content with higher z-index */}
             <div className="relative z-20">
                               <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
                    Esimerkkitapauksia identiteettivarkaudesta
                  </h2>
                </div>
               
               <div className="max-w-6xl mx-auto px-4 sm:px-6">
                 <div className="grid grid-cols-1 gap-10 items-start">
               <motion.div
                 className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                   openCards['tietojenkalastelu'] ? 'w-full max-w-4xl bg-transparent border border-white/20 shadow-lg' : 'w-full max-w-2xl'
                 } justify-self-start mr-auto`}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ 
                   opacity: 1, 
                   y: [-4, 4, -4] 
                 }}
                 transition={{ 
                   opacity: { duration: 0.8, ease: "easeOut" },
                   y: { 
                     duration: 4, 
                     ease: "easeInOut", 
                     repeat: Infinity, 
                     repeatType: "reverse" 
                   } 
                 }}
                 onClick={() => toggleCard('tietojenkalastelu')}
               >
                                  <div className="text-center mb-4">
                   <div className="w-12 h-12 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg mx-auto mb-2">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Valesivustohuijaus</h3>
                   <div className="flex justify-center">
                     <svg 
                       className={`w-4 h-4 text-white transition-transform duration-200 ${openCards['tietojenkalastelu'] ? 'rotate-180' : ''}`} 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </div>
                 </div>
                                    <div className="overflow-hidden">
                     {openCards['tietojenkalastelu'] && (
                       <motion.p 
                         className="text-white leading-relaxed"
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         transition={{ duration: 0.3 }}
                       >
                        Nina tarkisti sähköpostinsa kiireisen työpäivän lomassa. Viesti näytti tulevan hänen omasta pankistaan. Sama logo, sama sävy, jopa tuttu asiakaspalvelijan nimi. Ilman epäilystä hän kirjautui linkin kautta “pankkisivulleen”. Pian hän ei kuitenkaan hallinnut enää omia tietojaan ja rikollinen käytti hänen henkilöllisyyttään nostaakseen kolme pikavippiä yhteensä 11 200 euron arvosta, muutti hänen postiosoitteensa ja puhelinnumeronsa sekä yritti avata uusia tilejä ja maksukortteja hänen nimissään.
 Onneksi palveluun kuuluva vakuutus turvasi tilanteen kattaen jopa 13 500 euron menetykset ja asiantuntijat ottivat prosessin hallintaansa, jotta Nina ei jäänyt yksin.
                       </motion.p>
                     )}
                    </div>
               </motion.div>
               
               <motion.div
                 className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 lg:-mt-16 ${
                   openCards['verkkokauppahuijaus'] ? 'w-full max-w-4xl bg-transparent border border-white/20 shadow-lg' : 'w-full max-w-2xl'
                 } justify-self-end ml-auto`}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ 
                   opacity: 1, 
                   y: [-4, 4, -4] 
                 }}
                 transition={{ 
                   opacity: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                   y: { 
                     duration: 4, 
                     ease: "easeInOut", 
                     repeat: Infinity, 
                     repeatType: "reverse" 
                   } 
                 }}
                 onClick={() => toggleCard('verkkokauppahuijaus')}
               >
                 <div className="text-center mb-4">
                   <div className="w-12 h-12 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg mx-auto mb-2">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Verkkokauppahuijaus</h3>
                   <div className="flex justify-center">
                     <svg 
                       className={`w-4 h-4 text-white transition-transform duration-200 ${openCards['verkkokauppahuijaus'] ? 'rotate-180' : ''}`} 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </div>
                 </div>
                 <div className="overflow-hidden">
                   {openCards['verkkokauppahuijaus'] && (
                     <motion.p 
                       className="text-white leading-relaxed"
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       Laura huomasi sosiaalisen median mainoksessa houkuttelevan tarjouksen merkkilaukusta, jonka hinta oli lähes puolet tavallista edullisempi. Verkkokauppa vaikutti uskottavalta. Sivuilla oli brändin logo, asiakasarvioita ja tuttuja maksutapoja. Laura maksoi 249 € pankkikortilla, mutta tuotetta ei koskaan toimitettu. Muutaman päivän kuluttua verkkokauppa katosi jäljettömiin. Koska ostos sijoittui 50–700 € hintahaarukkaan, Laura saa rahansa takaisin verkkokauppahuijauksia koskevan vakuutuksen turvin.
                     </motion.p>
                   )}
                  </div>
               </motion.div>
               
               <motion.div
                 className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                   openCards['sovellushankinnat'] ? 'w-full max-w-4xl bg-transparent border border-white/20 shadow-lg' : 'w-full max-w-2xl'
                 } justify-self-start mr-auto`}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ 
                   opacity: 1, 
                   y: [-4, 4, -4] 
                 }}
                 transition={{ 
                   opacity: { duration: 0.8, ease: "easeOut", delay: 0.4 },
                   y: { 
                     duration: 4, 
                     ease: "easeInOut", 
                     repeat: Infinity, 
                     repeatType: "reverse" 
                   } 
                 }}
                 onClick={() => toggleCard('sovellushankinnat')}
               >
                                  <div className="text-center mb-4">
                   <div className="w-12 h-12 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg mx-auto mb-2">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Vahinkotilaus</h3>
                   <div className="flex justify-center">
                     <svg 
                       className={`w-4 h-4 text-white transition-transform duration-200 ${openCards['sovellushankinnat'] ? 'rotate-180' : ''}`} 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </div>
                 </div>
                 <div className="overflow-hidden">
                   {openCards['sovellushankinnat'] && (
                     <motion.p 
                       className="text-white leading-relaxed"
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                      Mikon 8-vuotias tytär pelasi hetken isänsä tabletilla. Hän innostui värikkäästä pelistä, joka vaikutti maksuttomalta, mutta sisälsikin 95 euron kuukausitilauksen. Koska maksukortti oli tallennettuna laitteeseen, maksu veloittui heti. Perhe huomasi laskun vasta seuraavalla viikolla, kun tililtä puuttui yllättäen rahaa. Onneksi vakuutus korvasi kulut nopeasti ja neuvoi samalla, kuinka vastaavat tilanteet voi jatkossa välttää. Vakuutus kattaa kulut, jotka johtuvat alle 10-vuotiaan vahingossa tekemistä sovellusostoista (alle 135 €) suurimmilla alustoilla, kuten App Storessa, Google Playssa ja Steamissa.
                     </motion.p>
                   )}
                  </div>
               </motion.div>

               {/* New case card: SIM-kortin väärinkäyttö (moved earlier to left column) */}
               <motion.div
                 className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                   openCards['sim'] ? 'w-full max-w-4xl bg-transparent border border-white/20 shadow-lg' : 'w-full max-w-2xl'
                 } justify-self-end ml-auto`}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ 
                   opacity: 1, 
                   y: [-4, 4, -4] 
                 }}
                 transition={{ 
                   opacity: { duration: 0.8, ease: "easeOut", delay: 0.6 },
                   y: { 
                     duration: 4, 
                     ease: "easeInOut", 
                     repeat: Infinity, 
                     repeatType: "reverse" 
                   } 
                 }}
                 onClick={() => toggleCard('sim')}
               >
                 <div className="text-center mb-4">
                   <div className="w-12 h-12 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg mx-auto mb-2">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zM13 3v4h4" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">SIM-kortin väärinkäyttö</h3>
                   <div className="flex justify-center">
                     <svg 
                       className={`w-4 h-4 text-white transition-transform duration-200 ${openCards['sim'] ? 'rotate-180' : ''}`} 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </div>
                 </div>
                 <div className="overflow-hidden">
                   {openCards['sim'] && (
                     <motion.p 
                       className="text-white leading-relaxed"
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       Marian puhelin varastettiin bussissa. Varas käytti SIM-korttia ja teki sillä luvattomia mobiilimaksuja verkkokaupoissa, yhteensä useiden kymmenien eurojen arvosta. Koska kyse oli SIM-kortin vilpillisestä käytöstä, vakuutus korvasi ostojen kulut 48 tunnin ajalta varkauden jälkeen.
                     </motion.p>
                   )}
                 </div>
               </motion.div>

               <motion.div
                 className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                   openCards['nettikiusaaminen'] ? 'w-full max-w-4xl bg-transparent border border-white/20 shadow-lg' : 'w-full max-w-2xl'
                 } justify-self-start mr-auto`}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ 
                   opacity: 1, 
                   y: [-4, 4, -4] 
                 }}
                 transition={{ 
                   opacity: { duration: 0.8, ease: "easeOut", delay: 0.6 },
                   y: { 
                     duration: 4, 
                     ease: "easeInOut", 
                     repeat: Infinity, 
                     repeatType: "reverse" 
                   } 
                 }}
                 onClick={() => toggleCard('nettikiusaaminen')}
               >
                 <div className="text-center mb-4">
                   <div className="w-12 h-12 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg mx-auto mb-2">
                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Nettikiusaaminen</h3>
                   <div className="flex justify-center">
                     <svg 
                       className={`w-4 h-4 text-white transition-transform duration-200 ${openCards['nettikiusaaminen'] ? 'rotate-180' : ''}`} 
                       fill="none" 
                       stroke="currentColor" 
                       viewBox="0 0 24 24"
                     >
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                   </div>
                 </div>
                 <div className="overflow-hidden">
                   {openCards['nettikiusaaminen'] && (
                                                                 <motion.p 
                       className="text-white leading-relaxed"
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: 'auto' }}
                         exit={{ opacity: 0, height: 0 }}
                         transition={{ duration: 0.3 }}
                       >
                        Emilia joutui nettikiusaaminen kohteeksi sen jälkeen, kun hänen TikTok-videonsa levisi yllättäen laajalle. Tuntemattomat ihmiset alkoivat kommentoida videoita loukkaavasti ja joku perusti tekaistun tilin hänen nimellään ja profiilikuvallaan. Väärennetyllä tilillä julkaistiin sisältöä, joka sai Emilian näyttämään nololta. Hän saa asiantuntijoilta neuvoja ja apuja (25 h) sisällön poistoon ja tilien palautukseen. Tarvittaessa hänen käytössä on myös oikeudellinen tuki ja psykologinen kriisiapu.
                       </motion.p>
                   )}
                                    </div>
                 </motion.div>
               </div>
             </div>
           </div>
           </div>
          
                     {/* Insurance Coverage Details */}
           <div className="relative py-24" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)', marginTop: '-80px', paddingTop: '104px' }}>
             {/* Subtle blue gradient background - overlay to lighten the darker blue */}
             <div className="absolute inset-0 pointer-events-none" style={{
               background: `linear-gradient(
                 to bottom,
                 rgba(255, 255, 255, 0.85) 0%,
                 rgba(255, 255, 255, 0.9) 50%,
                 rgba(255, 255, 255, 0.85) 100%
               )`,
               zIndex: 0
             }}></div>
             <div className="absolute inset-0 pointer-events-none" style={{
               background: `linear-gradient(
                 to bottom,
                 rgba(147, 197, 253, 0.08) 0%,
                 rgba(147, 197, 253, 0.12) 50%,
                 rgba(147, 197, 253, 0.08) 100%
               )`,
               zIndex: 1
             }}></div>
           <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
            <div className="flex items-center justify-center gap-4 mb-16">
               <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Palveluun sisältyvä vakuutus
              </h2>
              <img 
                src="/kuvapankki/0€.png" 
                alt="0€" 
                className="h-20 lg:h-28 w-auto ml-12"
                style={{ 
                  background: 'transparent', 
                  backgroundColor: 'transparent'
                }}
              />
            </div>
            
            <div className="max-w-7xl mx-auto">
              {/* Carousel Navigation */}
              <div className="flex justify-end items-center gap-2 mb-6 px-4 sm:px-6 lg:px-8">
                <button 
                  onClick={scrollPrev}
                  aria-label="Edellinen"
                  className="w-9 h-9 rounded-full bg-white shadow border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={scrollNext}
                  aria-label="Seuraava"
                  className="w-9 h-9 rounded-full bg-white shadow border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
              
              {/* Horizontal Carousel */}
              <div 
                ref={carouselRef}
                className={`flex overflow-x-auto pb-4 scrollbar-hide ${coverageSnapEnabled ? 'snap-x snap-mandatory' : ''}`}
                style={{
                  scrollBehavior: 'smooth',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  width: '100vw',
                  marginLeft: 'calc(50% - 50vw)',
                  marginRight: 'calc(50% - 50vw)',
                  paddingLeft: '0',
                  paddingRight: 'calc(50vw - 325px)'
                }}
              >
                {/* Spacer for initial positioning */}
                <div className="flex-shrink-0 snap-start" style={{ width: 'calc(50vw - 325px)', minWidth: 'calc(50vw - 325px)' }}></div>
                
                {/* Suoja sovellusostoksille */}
                <div data-card="true" className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{
                    background: 'rgb(219, 228, 240)',
                    border: '1px solid rgb(186, 200, 228)',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    marginRight: '-150px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgb(207, 223, 242)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgb(219, 228, 240)';
                  }}
                >
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Suoja sovellusostoksille</h3>
                    <div className="text-xl font-semibold text-foreground mt-6 mb-6">135 €</div>
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                     Jos alle 10-vuotias lapsi kotitaloudessasi tekee vahingossa tai ilman lupaa sovellusten tai sovellusten sisäisiä ostoksia esimerkiksi App Storesta, Google Playsta, Playstation Storesta, Microsoft Storesta tai Steamista, vakuutus korvaa kulut aina 135 euroon asti.
                   </p>
                </div>
                 
                {/* Taloudelliset tappiot */}
                <div data-card="true" className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{
                    background: 'rgb(219, 228, 240)',
                    border: '1px solid rgb(186, 200, 228)',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    marginRight: '-150px',
                    marginLeft: '-150px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgb(207, 223, 242)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgb(219, 228, 240)';
                  }}
                >
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Taloudelliset tappiot</h3>
                    <div className="text-xl font-semibold text-foreground mt-6 mb-6">13 500 €</div>
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                    Premium-tason vakuutuksemme korvaa kyberhyökkäyksen aiheuttamat taloudelliset vahingot aina 13 500 euroon saakka. Tämä koskee muun muassa huijauksia, kuten sähköpostin, puheluiden tai tekstiviestien kautta tapahtuvaa tietojen kalastelua, sekä tilanteita, joissa sinut on johdettu väärennetylle verkkosivulle.
                   </p>
                </div>
                 
                 {/* Turva verkko-ostoksille */}
                <div data-card="true" className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{
                    background: 'rgb(219, 228, 240)',
                    border: '1px solid rgb(186, 200, 228)',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    marginRight: '-150px',
                    marginLeft: '-150px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgb(207, 223, 242)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgb(219, 228, 240)';
                  }}
                >
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Turva verkko-ostoksille</h3>
                    <div className="text-xl font-semibold text-foreground mt-6 mb-6">50–700 €</div>
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                     Jos ostat tuotteen verkosta tai yksityiseltä myyjältä 50–700 euron hintaluokassa ja saat väärän tuotteen, toimituksesta puuttuu osa tavaroista tai lähetystä ei saavu lainkaan, vakuutus maksaa sinulle korvauksen.
                   </p>
                </div>
                 
                 {/* SIM-kortin väärinkäytön suoja */}
                <div data-card="true" className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{
                    background: 'rgb(219, 228, 240)',
                    border: '1px solid rgb(186, 200, 228)',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    scrollMarginRight: 'calc(50vw - 325px)',
                    marginLeft: '-150px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgb(207, 223, 242)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgb(219, 228, 240)';
                  }}
                >
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">SIM-kortin väärinkäytön suoja</h3>
                    <div className="text-xl font-semibold text-foreground mt-6 mb-6">135 €</div>
                  </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                     Jos puhelimesi tai tablettisi varastetaan ja SIM-korttiasi käytetään luvatta, vakuutus kattaa aiheutuneet kustannukset jopa 135 euroon asti. Suoja on voimassa enintään 48 tuntia varkauden jälkeen.
                   </p>
              </div>
                 {/* End spacer so the last card can be centered */}
                <div className="flex-shrink-0 snap-start" style={{ width: 'calc(50vw - 325px)', minWidth: 'calc(50vw - 325px)' }} />
            </div>
            </div>
                </div>

           {/* Support Services */}
           <div className="relative" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
             {/* Subtle blue gradient background - overlay to lighten the darker blue */}
             <div className="absolute inset-0 pointer-events-none" style={{
               background: `linear-gradient(
                 to bottom,
                 rgba(255, 255, 255, 0.85) 0%,
                 rgba(255, 255, 255, 0.9) 50%,
                 rgba(255, 255, 255, 0.85) 100%
               )`,
               zIndex: 0
             }}></div>
             <div className="absolute inset-0 pointer-events-none" style={{
               background: `linear-gradient(
                 to bottom,
                 rgba(147, 197, 253, 0.08) 0%,
                 rgba(147, 197, 253, 0.12) 50%,
                 rgba(147, 197, 253, 0.08) 100%
               )`,
               zIndex: 1
             }}></div>
           <div className="container mx-auto px-4 py-32 relative" style={{ zIndex: 10 }}>
             <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Tukee muullakin tavoin kuin taloudellisesti
              </h2>
                </div>

             <div className="max-w-7xl mx-auto">
               {/* Carousel Navigation */}
               <div className="flex justify-end items-center gap-2 mb-6 px-4 sm:px-6 lg:px-8">
                 <button 
                   onClick={scrollSupportPrev}
                   aria-label="Edellinen"
                   className="w-9 h-9 rounded-full bg-white shadow border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-all"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                   </svg>
                 </button>
                 <button 
                   onClick={scrollSupportNext}
                   aria-label="Seuraava"
                   className="w-9 h-9 rounded-full bg-white shadow border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-all"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                 </button>
             </div>
               
              {/* Horizontal Carousel */}
              <div 
                ref={supportCarouselRef}
                className={`flex overflow-x-auto pb-4 scrollbar-hide ${supportSnapEnabled ? 'snap-x snap-mandatory' : ''}`}
                style={{
                  scrollBehavior: 'smooth',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  width: '100vw',
                  marginLeft: 'calc(50% - 50vw)',
                  marginRight: 'calc(50% - 50vw)',
                  paddingLeft: '0',
                  paddingRight: 'calc(50vw - 325px)'
                }}
              >
                 {/* Spacer for initial positioning */}
                 <div className="flex-shrink-0 snap-start" style={{ width: 'calc(50vw - 325px)', minWidth: 'calc(50vw - 325px)' }}></div>
                 
                 {/* Tietojen suoja */}
                <motion.div 
                  data-card="true"
                  className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{ 
                    scrollSnapAlign: 'start',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    background: 'rgb(240, 246, 255)', 
                    border: '1px solid rgb(208, 222, 252)',
                    marginRight: '-150px'
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(232, 240, 255)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(240, 246, 255)'; }}
                >
                  <div className="mb-2">
                     <h3 className="text-2xl font-bold text-foreground mb-2">Tietojen suoja</h3>
                     <div className="text-lg font-semibold text-foreground mt-6 mb-6">24/7</div>
                   </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                     Valvoo henkilökohtaisia tietojasi ja saat ilmoituksen, jos ne päätyvät luvattomiin käsiin. Se seuraa puhelinnumeroita, sähköposteja, henkilötunnuksia sekä pankki- ja korttitietoja ja ohjeistaa tietovuotojen estämisessä.
                   </p>
                 </motion.div>
                 
                  {/* Psyykkinen tuki */}
                 <motion.div 
                  data-card="true"
                  className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{ 
                    background: 'rgb(240, 246, 255)', 
                    border: '1px solid rgb(208, 222, 252)',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    marginRight: '-150px',
                    marginLeft: '-150px'
                  }}
                   onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(232, 240, 255)'; }}
                   onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(240, 246, 255)'; }}
                 >
                  <div className="mb-2">
                     <h3 className="text-2xl font-bold text-foreground mb-2">Psyykkinen tuki</h3>
                     <div className="text-xl font-semibold text-foreground mt-6 mb-6">1 350 €</div>
                   </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                     Kyberhyökkäyksen aiheuttaman kriisitilanteen jälkeen vakuutus kattaa psyykkisen tuen ja kriisiavun kustannuksia. Tuki sisältää ammattilaisten tarjoamaa keskusteluapua ja ohjausta.
                   </p>
                 </motion.div>
                 
                  {/* Nettikiusaamistuki */}
                 <motion.div 
                  data-card="true"
                  className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{ 
                    background: 'rgb(240, 246, 255)', 
                    border: '1px solid rgb(208, 222, 252)',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    marginRight: '-150px',
                    marginLeft: '-150px'
                  }}
                   onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(232, 240, 255)'; }}
                   onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(240, 246, 255)'; }}
                 >
                  <div className="mb-2">
                     <h3 className="text-2xl font-bold text-foreground mb-2">Nettikiusaamistuki</h3>
                     <div className="text-xl font-semibold text-foreground mt-6 mb-6">25 h</div>
                   </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                     Ohjausta ja neuvoja ei-toivotun sisällön leviämisen estämiseen sekä väärennettyjen profiilien ja hakkeroitujen tilien hallinnan palauttamiseen.
                   </p>
                 </motion.div>
                 
                  {/* Oikeusapu */}
                 <motion.div 
                  data-card="true"
                  className="min-w-[300px] sm:min-w-[400px] md:min-w-[650px] min-h-[400px] rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-300 snap-start relative shadow-xl flex flex-col"
                  style={{ 
                    background: 'rgb(240, 246, 255)', 
                    border: '1px solid rgb(208, 222, 252)',
                    scrollMarginLeft: 'calc(50vw - 325px)',
                    scrollMarginRight: 'calc(50vw - 325px)',
                    marginLeft: '-150px'
                  }}
                   onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(232, 240, 255)'; }}
                   onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgb(240, 246, 255)'; }}
                 >
                  <div className="mb-2">
                     <h3 className="text-2xl font-bold text-foreground mb-2">Oikeusapu</h3>
                     <div className="text-xl font-semibold text-foreground mt-6 mb-6">135 000 €</div>
                   </div>
                  <p className="text-foreground/90 leading-relaxed text-lg mt-2">
                    Vakuutus kattaa oikeudellisen avun kustannuksia tietyissä tilanteissa. Tarvittaessa saat tueksesi suomalaisen asianajajan, joka auttaa selvittämään riita- ja vastuukysymyksiä sekä edustaa sinua oikeudellisissa prosesseissa.
                   </p>
                 </motion.div>
                 {/* End spacer so the last card can be centered */}
                <div className="flex-shrink-0 snap-start" style={{ width: 'calc(50vw - 325px)', minWidth: 'calc(50vw - 325px)' }} />
            </div>
          </div>
          </div>
          
                     {/* Pricing section */}
           <div className="w-full py-24 relative overflow-hidden">
             {/* Background image for this section only */}
             <div className="absolute inset-0 w-full h-full z-0">
               <img 
                 src="/kuvapankki/iStock-2222199654.jpg" 
                 alt="Identity Protection Background" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-white/70"></div>
              
             </div>
             
             {/* Content with higher z-index */}
             <div className="relative z-20 container mx-auto px-4">
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Valitse suojauksesi
              </h2>
              <p className="text-lg text-foreground/80">
                Valitse parhaiten sopiva suojaus.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
              {/* Card 1 */}
              <div className="rounded-2xl bg-white/90 backdrop-blur-sm text-left border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Henkilösuoja Yhdelle</h3>
                    <span className="text-[11px] uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Yhdelle</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-5">Sisältää vakuutusturvan</div>
                  <ul className="space-y-3 mb-7">
                    {[
                      'Tietojen monitorointi ja ilmoitus tietovuodoista',
                      'Vakuutus, joka turvaa sinut vahinkojen varalta',
                      'Apu ja tuki',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                        <span className="text-gray-800 leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/verkkokauppa/tuote/henkilosuoja-yhdelle" 
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ background: 'var(--gradient-navy)' }}
                  >
                    Valitse paketti
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl bg-white/90 backdrop-blur-sm text-left border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Henkilösuoja Tupla</h3>
                    <span className="text-[11px] uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Kahdelle</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-5">Sisältää vakuutusturvan kahdelle</div>
                  <ul className="space-y-3 mb-7">
                    {[
                      'Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä läheisellesi',
                      'Vakuutus, joka turvaa sinut ja läheisesi vahinkojen varalta',
                      'Apu ja tuki',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                        <span className="text-gray-800 leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/verkkokauppa/tuote/henkilosuoja-tupla" 
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ background: 'var(--gradient-navy)' }}
                  >
                    Valitse paketti
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl bg-white/90 backdrop-blur-sm text-left border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500"></div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Henkilösuoja Perhe</h3>
                    <span className="text-[11px] uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Perhe</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-5">Sisältää vakuutusturvan viidelle</div>
                  <ul className="space-y-3 mb-7">
                    {[
                      'Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä koko perheellesi',
                      'Vakuutus, joka turvaa sinut ja koko perheesi vahinkojen varalta',
                      'Apu ja tuki',
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-black inline-block shrink-0"></span>
                        <span className="text-gray-800 leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/verkkokauppa/tuote/henkilosuoja-perhe" 
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ background: 'var(--gradient-navy)' }}
                  >
                    Valitse paketti
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
          
          {/* FAQ section */}
          <div className="container mx-auto px-4 pt-32 pb-24 relative z-30 bg-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Usein kysyttyjä kysymyksiä
              </h2>
                </div>
                
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <motion.div
                  className="relative bg-white border-l-4 rounded-r-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden group"
                  style={{ borderLeftColor: 'rgb(30, 42, 94)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onClick={() => toggleCard('faq1')}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 pl-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground flex-1 pr-4">Onko tietosuoja pakollinen?</h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
                        <svg 
                          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openCards['faq1'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq1'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-muted-foreground leading-relaxed mt-4 pr-2">
                          Ei, henkilötietojen suojaaminen ei ole lain mukaan pakollista yksityishenkilöille, mutta se on erittäin suositeltavaa, koska tietomurrot ja huijaukset ovat yleistyneet merkittävästi.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 2 */}
                <motion.div
                  className="relative bg-white border-l-4 rounded-r-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden group"
                  style={{ borderLeftColor: 'rgb(30, 42, 94)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  onClick={() => toggleCard('faq2')}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 pl-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground flex-1 pr-4">On myös ilmaisia tietoturvapalveluita – miksi maksaisin tästä?</h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
                        <svg 
                          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openCards['faq2'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq2'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-muted-foreground leading-relaxed mt-4 pr-2">
                          Ilmaiset palvelut tarjoavat yleensä vain rajallista seurantaa, eivätkä sisällä esimerkiksi vakuutusturvaa, reaaliaikaista hälytystä tai asiantuntijan toimintaohjeita. Maksullinen palvelu tarjoaa laajemman suojan ja konkreettista apua vahinkotilanteissa.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 3 */}
                <motion.div
                  className="relative bg-white border-l-4 rounded-r-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden group"
                  style={{ borderLeftColor: 'rgb(30, 42, 94)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  onClick={() => toggleCard('faq3')}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 pl-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground flex-1 pr-4">Jos tietoni löytyvät verkosta, voitteko poistaa ne?</h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
                        <svg 
                          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openCards['faq3'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq3'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-muted-foreground leading-relaxed mt-4 pr-2">
                          Kaikkia tietoja ei valitettavasti voida poistaa, jos ne ovat jo päätyneet rikollisille. Palvelumme kuitenkin opastaa, miten minimoit riskit ja estät tietojen väärinkäytön.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 4 */}
                <motion.div
                  className="relative bg-white border-l-4 rounded-r-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden group"
                  style={{ borderLeftColor: 'rgb(30, 42, 94)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  onClick={() => toggleCard('faq4')}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 pl-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground flex-1 pr-4">Miten usein tietojani tarkastetaan?</h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
                        <svg 
                          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openCards['faq4'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq4'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-muted-foreground leading-relaxed mt-4 pr-2">
                          Tietoja seurataan jatkuvasti eri lähteistä, ja mahdollisista havainnoista ilmoitetaan heti.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 5 */}
                <motion.div
                  className="relative bg-white border-l-4 rounded-r-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 overflow-hidden group"
                  style={{ borderLeftColor: 'rgb(30, 42, 94)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  onClick={() => toggleCard('faq5')}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 pl-8">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground flex-1 pr-4">Voiko palvelu estää huijauksen tapahtumasta?</h3>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
                        <svg 
                          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${openCards['faq5'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq5'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-muted-foreground leading-relaxed mt-4 pr-2">
                          Palvelu ei voi estää kaikkia hyökkäyksiä, mutta se voi havaita riskit ajoissa ja antaa selkeät ohjeet, joilla voit estää tai minimoida vahingot.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </div>
    </PageLayout>
  );
};
export default Identiteettiturva;