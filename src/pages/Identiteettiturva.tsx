import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Identiteettiturva = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [openCards, setOpenCards] = useState<{ [key: string]: boolean }>({});
  const coverageRef = useRef(null);
  
  const toggleCard = (cardId: string) => {
    setOpenCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };
  
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
        threshold: 0.6,
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
              rgba(30, 58, 138, 1) 53%,
              rgba(30, 58, 138, 0.7) 58%,
              rgba(30, 58, 138, 0.4) 63%,
              rgba(30, 58, 138, 0.2) 68%,
              rgba(30, 58, 138, 0.1) 73%,
              rgba(30, 58, 138, 0.05) 78%,
              transparent 83%,
              transparent 88%,
              transparent 100%
            )`,
            zIndex: -1
          }}></div>

          
  
        <div className="w-full py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="space-y-8 pl-0 lg:pl-20">
              {/* Title section */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Turvaa rahasi ja henkilötietosi helposti yhdellä ratkaisulla
                </h1>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Havaitsee jos tietosi joutuvat vääriin käsiin
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Palvelu monitoroi ja ilmoittaa, mikäli tietojasi päätyy verkossa vääriin käsiin.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Vakuutusturva 13 500 € asti
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Korvaa taloudelliset vahingot ilman omavastuuta.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Kattaa myös huijaukset
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Suojaa tietojenkalastelun, petosten ja väärinkäytösten seurauksilta, 0 € omavastuu.
                    </p>
                  </div>
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
        <div className="w-full py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-32">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Kuinka henkilösuoja sitten toimii?
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               {/* Left side - content */}
               <div className="space-y-20">
                 <div>
                   <h3 className="text-2xl font-bold text-foreground mb-4">Valvoo tärkeintä ennen kuin ongelmat alkavat</h3>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     Henkilösuoja ei rajoitu vain tietovuotojen tarkkailuun. Palvelu seuraa henkilötietojasi, kuten sähköpostia, puhelinnumeroa, maksukortteja ja tunnuksia. Saat varoitukset ajoissa, jos tietojasi käytetään luvatta tai jos havaitsemme muutoksia, jotka voivat viitata väärinkäytökseen. Seuraamme myös luottoon liittyviä tapahtumia ja julkisia rekistereitä. Ilmoitamme luvattomista muutoksista, rikollisesta käytöstä ja varhaisista varoitusmerkeistä, jotta ehdit reagoida ajoissa ja pysyt turvassa.
                   </p>
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-foreground mb-4">Suojaa ja opi reaaliajassa</h3>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     Turva ei ole pelkkiä ilmoituksia. Henkilösuoja ohjaa käyttäjää heti riskien ilmetessä antamalla neuvoja, käytännön toimenpiteitä ja lyhyitä oppaita. Lisäksi poistamme paljastuneita henkilötietoja julkisista lähteistä, ennen kuin niitä voidaan hyödyntää väärin.
                   </p>
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-foreground mb-4">Vakuutusturva antaa turvaa pahimman sattuessa</h3>
                   <p className="text-lg text-muted-foreground leading-relaxed">
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
        <div className="relative py-12 px-6 lg:px-12">
          <div className="relative py-12">
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
                  <div className="max-w-3xl">
                    <div className="space-y-6 text-left">
                      <p className="text-lg text-foreground leading-relaxed">
                        Verkkorikollisuus, tietovuodot ja identiteettivarkaudet ovat yleistyneet merkittävästi viime vuosina. Jo pelkän sähköpostiosoitteen ja salasanan avulla rikolliset voivat saada pääsyn henkilökohtaisiin tileihisi, tehdä ostoksia nimissäsi tai hakea lainaa luvattomasti.
                      </p>
                      
                      <p className="text-lg text-foreground leading-relaxed">
                        Digitaalinen identiteetti on nyky-yhteiskunnassa arvokas resurssi ja sen väärinkäyttö voi aiheuttaa vakavia taloudellisia sekä juridisia seurauksia.
                      </p>
                      
                      <p className="text-lg text-foreground leading-relaxed mb-16">
                        Siksi yksilön tunnistetietojen suojaaminen tulisi nähdä yhtä tärkeänä kuin pankkitunnusten turvaaminen.
                      </p>
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
              
              <div className="max-w-4xl mx-auto mt-16">
                <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-6">
                   <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl py-8 px-4 text-center max-w-md mx-auto lg:mx-0">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      62,9M €
                    </div>
                    <p className="text-white text-sm">
                      Vuonna 2024 suomalaiset menettivät nettihuijauksiin 62,9 miljoonaa euroa, joka on 40 % enemmän kuin vuonna 2023, jolloin summa oli 44,2 miljoonaa euroa.
                    </p>
                      <p className="text-white/80 text-xs mt-2">* Finanssiala ry</p>
                   </div>
                   
                   <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl py-8 px-4 text-center max-w-md mx-auto lg:mx-0">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        107,8M €
                      </div>
                      <p className="text-white text-sm">
                        Yritettyjä huijausyrityksiä oli 107,2 milj. euroa vuonna 2024, kun taas pankit onnistuivat estämään ja palauttamaan 44,3 milj. euroa.
                      </p>
                      <p className="text-white/80 text-xs mt-2">* Finanssiala ry</p>
                   </div>
                   
                   <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-2xl py-8 px-4 text-center max-w-md mx-auto lg:mx-0">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        70%
                      </div>
                      <p className="text-white text-sm">
                        Lähes 70 % suomalaisista on ollut digihuijausten uhreja tai kohdannut yrityksiä, joissa heitä on yritetty huijata.
                      </p>
                      <p className="text-white/80 text-xs mt-2">* Finanssiala ry</p>
                   </div>
                 </div>
               </div>
            </div>
           </div>
          </div>
        </div>
         
                   {/* Cases section */}
           <div className="w-full py-16 mb-16 relative overflow-hidden">
             {/* Background image for this section only */}
             <div className="absolute inset-0 w-full h-full z-0">
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
           <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Vakuutus - 0€ omavastuulla
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                 {/* Taloudelliset tappiot */}
                 <motion.div 
                   className="bg-transparent border border-white rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -2,
                     scale: 1.005,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-white mb-4">Taloudelliset tappiot</h3>
                   <p className="text-white leading-relaxed">
                     Premium-tason vakuutuksemme korvaa kyberhyökkäyksen aiheuttamat taloudelliset vahingot aina 13 500 euroon saakka. Tämä koskee muun muassa huijauksia, kuten sähköpostin, puheluiden tai tekstiviestien kautta tapahtuvaa tietojen kalastelua, sekä tilanteita, joissa sinut on johdettu väärennetylle verkkosivulle. Jos rikollinen on saanut haltuunsa esimerkiksi verkkopankkitunnuksesi, mobiilivarmenteesi tai muita arkaluontoisia tietoja ja käyttänyt niitä rahallisen vahingon aiheuttamiseen, vakuutus auttaa kattamaan menetykset.
                   </p>
                 </motion.div>
                 
                 {/* Suoja sovellusostoksille */}
                 <motion.div 
                   className="bg-transparent border border-white rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -2,
                     scale: 1.005,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-white mb-4">Suoja sovellusostoksille</h3>
                   <p className="text-white leading-relaxed">
                     Jos alle 10-vuotias lapsi kotitaloudessasi tekee vahingossa tai ilman lupaa sovellusten tai sovellusten sisäisiä ostoksia esimerkiksi App Storesta, Google Playsta, Playstation Storesta, Microsoft Storesta tai Steamista, vakuutus korvaa kulut aina 135 euroon asti.
                   </p>
                 </motion.div>
                 
                 {/* Turva verkko-ostoksille */}
                 <motion.div 
                   className="bg-transparent border border-white rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -2,
                     scale: 1.005,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-white mb-4">Turva verkko-ostoksille</h3>
                   <p className="text-white leading-relaxed">
                     Jos ostat tuotteen verkosta tai yksityiseltä myyjältä 50–700 euron hintaluokassa ja saat väärän tuotteen, toimituksesta puuttuu osa tavaroista tai lähetystä ei saavu lainkaan, vakuutus maksaa sinulle korvauksen.
                   </p>
                 </motion.div>
                 
                 {/* SIM-kortin väärinkäytön suoja */}
                 <motion.div 
                   className="bg-transparent border border-white rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -2,
                     scale: 1.005,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-white mb-4">SIM-kortin väärinkäytön suoja</h3>
                   <p className="text-white leading-relaxed">
                     Jos puhelimesi tai tablettisi varastetaan ja SIM-korttiasi käytetään luvatta, vakuutus kattaa aiheutuneet kustannukset jopa 135 euroon asti. Suoja on voimassa enintään 48 tuntia varkauden jälkeen.
                   </p>
                 </motion.div>
              </div>
            </div>
                </div>

           {/* Support Services */}
           <div className="container mx-auto px-4 py-32">
             <div className="text-center mb-16">
               <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                 Saat tukea myös muutenkin<br />kuin taloudellisesti
               </h2>
                </div>

             <div className="max-w-6xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Tietojen suoja */}
                 <motion.div 
                   className="bg-transparent border border-black rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -8,
                     scale: 1.02,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-foreground mb-4">Tietojen suoja</h3>
                   <p className="text-foreground leading-relaxed">
                     Valvoo henkilökohtaisia tietojasi ja saat ilmoituksen, jos ne päätyvät luvattomiin käsiin. Se seuraa puhelinnumeroita, sähköposteja, henkilötunnuksia sekä pankki- ja korttitietoja ja ohjeistaa tietovuotojen estämisessä.
                   </p>
                 </motion.div>
                 
                 {/* Psyykkinen tuki */}
                 <motion.div 
                   className="bg-transparent border border-black rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -8,
                     scale: 1.02,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-foreground mb-4">Psyykkinen tuki</h3>
                   <p className="text-foreground leading-relaxed">
                     Kriisiapu kyberhyökkäyksen seurauksena, jopa 1 350 € saakka.
                   </p>
                 </motion.div>
                 
                 {/* Nettikiusaamistuki */}
                 <motion.div 
                   className="bg-transparent border border-black rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -8,
                     scale: 1.02,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-foreground mb-4">Nettikiusaamistuki</h3>
                   <p className="text-foreground leading-relaxed">
                     25 h ohjausta ja neuvoja ei-toivotun sisällön leviämisen estämiseen sekä väärennettyjen profiilien ja hakkeroitujen tilien hallinnan palauttamiseen.
                   </p>
                 </motion.div>
                 
                 {/* Oikeusapu */}
                 <motion.div 
                   className="bg-transparent border border-black rounded-2xl p-8 cursor-pointer"
                   initial={{ y: 0, scale: 1 }}
                   animate={{ y: 0, scale: 1 }}
                   whileHover={{ 
                     y: -8,
                     scale: 1.02,
                     transition: { duration: 0.15, ease: "easeOut" }
                   }}
                   whileTap={{ 
                     y: -4,
                     scale: 1.01,
                     transition: { duration: 0.1, ease: "easeOut" }
                   }}
                   transition={{ duration: 0.2, ease: "easeOut" }}
                 >
                   <h3 className="text-2xl font-bold text-foreground mb-4">Oikeusapu</h3>
                   <p className="text-foreground leading-relaxed">
                     Oikeudellinen apu suomalaiselta asianajajalta, vakuutettu 135 000 € saakka tietyissä tilanteissa.
                   </p>
                 </motion.div>
              </div>
            </div>
          </div>
          
                     {/* Pricing section */}
           <div className="w-full py-24 relative">
             {/* Background image for this section only */}
             <div className="absolute inset-0 w-full h-full z-0">
               <img 
                 src="/kuvapankki/iStock-2222199654.jpg" 
                 alt="Identity Protection Background" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-white/80"></div>
             </div>
             
             {/* Content with higher z-index */}
             <div className="relative z-20 container mx-auto px-4">
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Valitse suojaksesi
              </h2>
              <p className="text-lg text-muted-foreground">
                Jokaisessa tilauksessa on 14vrk maksuton peruutosoikeus.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
              {/* Plan 1 */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Henkilösuoja Yhdelle</h3>
                <div className="text-4xl font-bold text-primary mb-6">21,99 €/kk</div>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li>• Tietojen monitorointi ja ilmoitus tietovuodoista</li>
                  <li>• Vakuutus, joka turvaa sinut vahinkojen varalta</li>
                  <li>• Apu ja tuki</li>
                </ul>
                <Link 
                  to="/verkkokauppa" 
                  className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ background: 'var(--gradient-navy)' }}
                >
                  Suojaa laite
                </Link>
              </div>
                
              {/* Plan 2 */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Henkilösuoja Tupla</h3>
                <div className="text-4xl font-bold text-primary mb-6">28,99 €/kk</div>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li>• Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä läheisellesi</li>
                  <li>• Vakuutus, joka turvaa sinut ja läheisesi vahinkojen varalta</li>
                  <li>• Apu ja tuki</li>
                </ul>
                <Link 
                  to="/verkkokauppa" 
                  className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ background: 'var(--gradient-navy)' }}
                >
                  Suojaa laite
                </Link>
              </div>
              
              {/* Plan 3 */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Henkilösuoja Perhe</h3>
                <div className="text-4xl font-bold text-primary mb-6">32,99 €/kk</div>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li>• Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä koko perheellesi</li>
                  <li>• Vakuutus, joka turvaa sinut ja koko perheesi vahinkojen varalta</li>
                  <li>• Apu ja tuki</li>
                </ul>
                <Link 
                  to="/verkkokauppa" 
                  className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ background: 'var(--gradient-navy)' }}
                >
                  Suojaa laite
                </Link>
              </div>
            </div>
            </div>
          </div>
          
          {/* FAQ section */}
          <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Usein kysyttyjä kysymyksiä
              </h2>
                </div>
                
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <motion.div
                  className="bg-card border border-border rounded-2xl shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onClick={() => toggleCard('faq1')}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">Onko tietosuoja pakollinen?</h3>
                      <svg 
                        className={`w-6 h-6 text-foreground transition-transform duration-200 ${openCards['faq1'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq1'] && (
                        <motion.p 
                          className="text-muted-foreground leading-relaxed mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Ei, henkilötietojen suojaaminen ei ole lain mukaan pakollista yksityishenkilöille, mutta se on erittäin suositeltavaa, koska tietomurrot ja huijaukset ovat yleistyneet merkittävästi.
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 2 */}
                <motion.div
                  className="bg-card border border-border rounded-2xl shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  onClick={() => toggleCard('faq2')}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">On myös ilmaisia tietoturvapalveluita – miksi maksaisin tästä?</h3>
                      <svg 
                        className={`w-6 h-6 text-foreground transition-transform duration-200 ${openCards['faq2'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq2'] && (
                        <motion.p 
                          className="text-muted-foreground leading-relaxed mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Ilmaiset palvelut tarjoavat yleensä vain rajallista seurantaa, eivätkä sisällä esimerkiksi vakuutusturvaa, reaaliaikaista hälytystä tai asiantuntijan toimintaohjeita. Maksullinen palvelu tarjoaa laajemman suojan ja konkreettista apua vahinkotilanteissa.
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 3 */}
                <motion.div
                  className="bg-card border border-border rounded-2xl shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  onClick={() => toggleCard('faq3')}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">Jos tietoni löytyvät verkosta, voitteko poistaa ne?</h3>
                      <svg 
                        className={`w-6 h-6 text-foreground transition-transform duration-200 ${openCards['faq3'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq3'] && (
                        <motion.p 
                          className="text-muted-foreground leading-relaxed mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Kaikkia tietoja ei valitettavasti voida poistaa, jos ne ovat jo päätyneet rikollisille. Palvelumme kuitenkin opastaa, miten minimoit riskit ja estät tietojen väärinkäytön.
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 4 */}
                <motion.div
                  className="bg-card border border-border rounded-2xl shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  onClick={() => toggleCard('faq4')}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">Miten usein tietojani tarkastetaan?</h3>
                      <svg 
                        className={`w-6 h-6 text-foreground transition-transform duration-200 ${openCards['faq4'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq4'] && (
                        <motion.p 
                          className="text-muted-foreground leading-relaxed mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Tietoja seurataan jatkuvasti eri lähteistä, ja mahdollisista havainnoista ilmoitetaan heti.
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
                
                {/* FAQ Item 5 */}
                <motion.div
                  className="bg-card border border-border rounded-2xl shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  onClick={() => toggleCard('faq5')}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">Voiko palvelu estää huijauksen tapahtumasta?</h3>
                      <svg 
                        className={`w-6 h-6 text-foreground transition-transform duration-200 ${openCards['faq5'] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="overflow-hidden">
                      {openCards['faq5'] && (
                        <motion.p 
                          className="text-muted-foreground leading-relaxed mt-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Palvelu ei voi estää kaikkia hyökkäyksiä, mutta se voi havaita riskit ajoissa ja antaa selkeät ohjeet, joilla voit estää tai minimoida vahingot.
                        </motion.p>
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