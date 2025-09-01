
import { ArrowRight, Bell, FileText, Shield, Clock, Search, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { memo, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";

const Hero = memo(() => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  // Ref for the features section to track scroll position
  const featuresRef = useRef<HTMLDivElement>(null);
  

  
  // State for expanding/collapsing cards
  const [showPhishing, setShowPhishing] = useState(false);
  const [showShopping, setShowShopping] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [showCyberbullying, setShowCyberbullying] = useState(false);

  // State for modal content
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);

  // State for email search
  const [email, setEmail] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<any>(null);
  const [searchError, setSearchError] = useState("");

  // Function to open modal with content
  const openModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
    setModalTitle("");
  };

  // Function to search email in Have I Been Pwned
  const searchEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSearching(true);
    setSearchError("");
    setSearchResult(null);

    try {
      // Debug: Tarkista environment-variables
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      console.log('Supabase key available:', !!supabaseKey);
      console.log('Supabase key length:', supabaseKey?.length || 0);
      
      let data;
      
      if (supabaseKey) {
        // Käytä Supabase-funktiota
        console.log('Käytetään Supabase-funktiota');
        const response = await fetch('https://fsirlcxhtyppecjjdqbp.supabase.co/functions/v1/check-email-breach', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`
          },
          body: JSON.stringify({ email })
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('API error response:', errorText);
          throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        }

        data = await response.json();
      } else {
        // Fallback: Kutsu Have I Been Pwned API:a suoraan
        console.log('Käytetään fallback-API:a (ilman Supabase-avainta)');
        const response = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`, {
          headers: {
            'hibp-api-key': '4b94686e2e8740fb82ae6106cffddcd5',
            'user-agent': 'OmaVerkkoturva-Identity-Protection'
          }
        });

        if (response.status === 404) {
          data = { 
            found: false, 
            message: 'Sähköpostiosoitteesi ei ole esiintynyt tunnettujen tietovuotojen tiedoissa.' 
          };
        } else if (response.ok) {
          const breaches = await response.json();
          data = { 
            found: true, 
            breaches, 
            count: breaches.length 
          };
        } else {
          throw new Error(`Have I Been Pwned API error: ${response.status}`);
        }
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setSearchResult(data);
    } catch (error) {
      console.error('Error searching email:', error);
      if (error instanceof Error) {
        setSearchError(`Virhe tietojen haussa: ${error.message}`);
      } else {
        setSearchError("Virhe tietojen haussa. Yritä uudelleen myöhemmin.");
      }
    } finally {
      setIsSearching(false);
    }
  };

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Per-letter reading effect variants for the monitoring paragraph
  const readingStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Simple floating animation for the scam case blocks
  const floatingVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterFade = {
    hidden: { color: "rgb(55,65,81)" }, // gray-700
    visible: {
      color: "rgb(156,163,175)", // gray-400 (lighter but still readable)
      transition: { duration: 1.8, ease: "easeOut" }
    }
  };

  const monitoringText =
     "Valvomme automaattisesti Dark Webiä, sosiaalista mediaa ja tietovuototietokantoja, jotta tietosi pysyvät turvassa vuorokauden jokaisena hetkenä.";
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
      {/* Fixed background image for parallax effect */}
      <div className="fixed inset-0 w-full h-full z-0">
        <motion.img 
          src="/kuvapankki/iStock-2222199654.jpg" 
          alt="Identity Protection - Secure Digital Life" 
          className={`w-full h-full object-cover ${isMobile ? 'object-center' : 'object-center'}`}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      <motion.div 
        className="relative w-full" 
        initial="hidden" 
        animate="visible" 
        variants={containerVariants}
        style={{ willChange: 'transform' }}
      >
        {/* Hero section with transparent background */}
        <motion.div 
          className="relative h-screen w-full flex items-center"
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full" style={{ position: 'relative', zIndex: 20 }}>
            <motion.div className="w-full max-w-2xl text-left ml-4 sm:ml-8" variants={staggerContainer}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>
                Estä identiteettivarkaus ennen kuin se ehtii tapahtua.
              </motion.h1>
              <motion.p className="banner-subtitle text-white mt-4 sm:mt-6" variants={itemVariants}>
                Yksi helppo keino suojata sekä rahasi että yksityiset tietosi.
              </motion.p>
              <motion.div className="flex justify-center sm:justify-start mt-6 sm:mt-8" variants={itemVariants}>
                <motion.button 
                  className="w-auto max-w-[280px] sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-md hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group text-sm sm:text-base font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => {
                    const featuresSection = document.getElementById('features');
                    if (featuresSection) {
                      featuresSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Tutustu tästä
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      
        <motion.div 
          ref={featuresRef}
          id="features"
          className="relative w-full bg-gradient-to-b from-white via-blue-100 to-blue-900 py-16 pb-24"
          style={{ position: 'relative', zIndex: 10 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* New section with image on the right and space for text on the left */}
            <motion.div className="mb-32 md:mb-64" variants={fadeInUpVariants}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                {/* Left side - text content */}
                <div className="md:w-1/2 space-y-4 md:space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12">
                      Henkilötietojasi on kaikkialla
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Nykyään henkilökohtaisia tietoja kertyy lukemattomiin paikkoihin, kuten some-tileihin, verkkokauppoihin, suoratoistopalveluihin ja viranomaisrekistereihin. Nämä tiedot voivat sisältää kaikkea sähköpostista, salasanoista ja maksukorteista aina terveystietoihin ja biometrisiin tunnisteisiin.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Jos tiedot vuotavat tai päätyvät rikollisten käsiin, seuraukset voivat olla vakavia: identiteettivarkaudet, väärinkäytökset ja taloudelliset menetykset.
                    </p>
                  </div>
                </div>
                
                {/* Right side - image */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-32">
                  <img 
                    src="/kuvapankki/Kappaleen teksti (21).png" 
                    alt="Kappaleen teksti kuva" 
                    className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
                    loading="eager"
                    decoding="async"
                    style={{ 
                      background: 'transparent', 
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div className="text-center mb-16 md:mb-24" variants={fadeInUpVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pidämme identiteettisi turvassa<br />
                edistyksellisin ratkaisuin
              </h2>
              <p className="text-lg text-gray-700 mb-12 md:mb-16">
                OmaVerkkoturva tarjoaa kattavan suojan henkilötiedoillesi
              </p>
              
              {/* Features section */}
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="space-y-6 md:space-y-8 lg:space-y-16 md:w-1/2">
                    <div className="text-left max-w-lg mt-6 md:mt-8 lg:mt-16">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                          <Bell className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Reaaliaikainen hälytys
                        </h3>
                      </div>
                      <p className="text-gray-900 leading-relaxed">
                        Saat välittömän ilmoituksen, jos tietosi vuotavat verkkoon. Palvelu suojaa sähköpostisi, henkilötunnuksesi ja maksukorttitietosi sekä valvoo epäilyttäviä luotonhakuja ja osoitteenmuutoksia, jotka voivat viitata huijaukseen.
                      </p>
                    </div>
                    
                    <div className="text-left max-w-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Saat ohjeet
                        </h3>
                      </div>
                      <p className="text-gray-900 leading-relaxed">
                        Jos riski havaitaan, saat heti selkeät ohjeet seuraaviin toimiin, kuten kortin sulkemiseen tai salasanan vaihtoon.
                      </p>
                    </div>
                    
                    <div className="text-left max-w-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Vakuutus
                        </h3>
                      </div>
                      <p className="text-gray-900 leading-relaxed">
                        Kun identiteettisi joutuu vaaraan, tilanteen ratkaiseminen voi kestää viikkoja ja maksaa tuhansia euroja. Tuotteeseen sisältyvä vakuutus tuo mielenrauhaa myös pahimman sattuessa.
                      </p>
                    </div>
                    
                    <div className="text-left max-w-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Jatkuva valvonta
                        </h3>
                      </div>
                      <p className="text-gray-900 leading-relaxed mb-4">
                        Valvomme automaattisesti Dark Webiä, sosiaalista mediaa ja tietovuototietokantoja, jotta tietosi pysyvät turvassa vuorokauden jokaisena hetkenä.
                      </p>
                      
                      {/* Mobile image - shown only on very small screens (below medium) */}
                      <div className="md:hidden flex justify-center mb-6">
                        <img 
                          src="/kuvapankki/Kappaleen teksti (15).png" 
                          alt="Kappaleen teksti kuva" 
                          className="w-full h-auto max-w-md"
                          loading="eager"
                          decoding="async"
                          style={{ 
                            background: 'transparent', 
                            backgroundColor: 'transparent'
                          }}
                        />
                      </div>
                      
                      <button 
                        className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base"
                        onClick={() => {
                          navigate('/henkilosuoja');
                        }}
                      >
                        Lue lisää
                      </button>
                    </div>
                  </div>
                  
                  {/* Desktop/Tablet image - shown on medium screens and up */}
                  <div className="hidden md:flex md:w-1/2 md:justify-center md:items-start">
                    <img 
                      src="/kuvapankki/Kappaleen teksti (15).png" 
                      alt="Kappaleen teksti kuva" 
                      className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-8 md:mt-16 lg:mt-24 xl:mt-40"
                      loading="eager"
                      decoding="async"
                      style={{ 
                        background: 'transparent', 
                        backgroundColor: 'transparent'
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>





        
        {/* Blue background section */}
        <div 
          className="relative w-full bg-gradient-to-b from-blue-900 via-blue-950 to-blue-900 py-32 pb-48"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div>
              <h2 
                className="text-3xl md:text-4xl font-bold text-white mb-8"
              >
                Tarkista, onko sähköpostiosoitteesi<br />ollut mukana tietovuodossa
              </h2>
              
              {/* Email search form */}
              <div className="max-w-2xl mx-auto mb-8">
                <form onSubmit={searchEmail} className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Syötä sähköpostiosoitteesi"
                    className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900 placeholder-gray-500"
                    required
                    disabled={isSearching}
                  />
                  <div className="flex gap-3 justify-center">
                    <button 
                      type="submit"
                      disabled={isSearching || !email}
                      className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSearching ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Haetaan...
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4" />
                          Hae
                        </>
                      )}
                    </button>
                    <button 
                      type="button"
                      onClick={() => {
                        setEmail('');
                        setSearchResult(null);
                        setIsSearching(false);
                        setSearchError(null);
                      }}
                      className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      Nollaa
                    </button>
                  </div>
                </form>
              </div>

              {/* Search results */}
              {searchError && (
                <div className="max-w-md mx-auto mb-6 p-4 bg-red-100 border border-red-300 rounded-md">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-sm">{searchError}</span>
                  </div>
                </div>
              )}

              {searchResult && (
                <div className="max-w-4xl mx-auto mb-6">
                  {searchResult.found ? (
                    <div className="relative">
                      {/* Pääotsikko - kuva 1 tyyli */}
                      <div className="bg-transparent border-2 border-pink-500 rounded-3xl p-8 mb-8 shadow-2xl shadow-pink-500/20">
                        <div className="flex flex-col gap-6">
                          {/* Ylhäällä: numero ja otsikko */}
                          <div className="flex items-center justify-center gap-6">
                            <div className="text-6xl font-bold text-pink-500">{searchResult.count}</div>
                            <h2 className="text-4xl font-bold text-pink-500">
                              {searchResult.count === 1 ? 'Tietovuoto' : 'Tietovuotoa'}
                            </h2>
                          </div>
                          
                          {/* Alhaalla: kuvaus */}
                          <p className="text-gray-200 text-lg leading-relaxed">
                            Voi ei — osoitteesi on vuotanut! Tämä sähköpostiosoite on löytynyt tietovuodosta. 
                            Katso alta, missä tietosi ovat paljastuneet.
                          </p>
                        </div>
                      </div>
                      
                      {/* Tietovuotojen yksityiskohdat - kuva 2 tyyli */}
                      <div className="space-y-8">
                        {searchResult.breaches.map((breach: any, index: number) => (
                          <div key={index} className="relative">
                            {/* Timeline-viiva */}
                            <div className="absolute right-10 top-0 w-1 bg-gradient-to-b from-blue-600 to-blue-400 h-full"></div>
                            
                            {/* Timeline-elementti oikealla */}
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full flex flex-col items-center justify-center text-white text-sm font-medium shadow-lg z-10">
                              {(() => {
                                let dateToShow = null;
                                if (breach.BreachDate) {
                                  dateToShow = new Date(breach.BreachDate);
                                } else if (breach.AddedDate) {
                                  dateToShow = new Date(breach.AddedDate);
                                } else if (breach.ModifiedDate) {
                                  dateToShow = new Date(breach.ModifiedDate);
                                } else if (breach.PwnDate) {
                                  dateToShow = new Date(breach.PwnDate);
                                }
                                
                                if (dateToShow && !isNaN(dateToShow.getTime())) {
                                  const month = dateToShow.toLocaleDateString('fi-FI', { month: 'short' });
                                  const year = dateToShow.getFullYear();
                                  return (
                                    <>
                                      <span className="text-sm font-bold">{month}</span>
                                      <span className="text-sm font-bold">{year}</span>
                                    </>
                                  );
                                } else {
                                  const currentYear = new Date().getFullYear();
                                  return (
                                    <>
                                      <span className="text-sm font-bold">Tunt</span>
                                      <span className="text-sm font-bold">{currentYear}</span>
                                    </>
                                  );
                                }
                              })()}
                            </div>
                            
                            {/* Pääsisältökortti */}
                            <div className="bg-transparent backdrop-blur-sm border border-gray-600 rounded-2xl p-8 mr-24 shadow-xl">
                              {/* Otsikko ja ikoni */}
                              <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                                  <div className="grid grid-cols-2 gap-1 w-6 h-6">
                                    <div className="w-2 h-2 bg-green-400 rounded-sm opacity-80"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-sm opacity-60"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-sm opacity-40"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                                  </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white">{breach.Name}</h3>
                              </div>
                              
                                                              {/* Kuvaus */}
                                {breach.Description && (
                                  <div className="mb-6">
                                    <h4 className="text-white font-bold text-lg mb-3 text-left">Alkuperäinen tietovuodon kuvaus:</h4>
                                    <p className="text-gray-200 leading-relaxed text-base">
                                      {breach.Description
                                        .replace(/<a[^>]*>([^<]*)<\/a>/g, '$1')
                                        .replace(/&quot;/g, '"')
                                        .replace(/&amp;/g, '&')
                                        .replace(/&lt;/g, '<')
                                        .replace(/&gt;/g, '>')
                                        .replace(/&#39;/g, "'")
                                      }
                                    </p>
                                  </div>
                                )}
                              
                                                              {/* Vaatetut tiedot */}
                                {breach.DataClasses && breach.DataClasses.length > 0 && (
                                  <div className="mb-6">
                                    <h4 className="text-white font-bold text-lg mb-3 text-left">Vahingoittuneet tiedot:</h4>
                                    <ul className="space-y-2">
                                      {breach.DataClasses.map((dataClass: string, dataIndex: number) => (
                                        <li key={dataIndex} className="flex items-center gap-3 text-gray-200 text-base">
                                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                          {(() => {
                                            // Käännä DataClass suomeksi
                                            const translateDataClass = (text: string) => {
                                              const dataClassTranslations: { [key: string]: string } = {
                                                'Email addresses': 'Sähköpostiosoitteet',
                                                'Geographic locations': 'Maantieteelliset sijainnit',
                                                'IP addresses': 'IP-osoitteet',
                                                'Passwords': 'Salasanat',
                                                'Usernames': 'Käyttäjänimet',
                                                'Names': 'Nimet',
                                                'Phone numbers': 'Puhelinnumerot',
                                                'Credit card data': 'Luottokorttitiedot',
                                                'Social media profiles': 'Sosiaalisen median profiilit',
                                                'Job titles': 'Työtehtävät',
                                                'Physical addresses': 'Osoitteet',
                                                'Dates of birth': 'Syntymäaika',
                                                'Security questions': 'Turvakysymykset',
                                                'Device information': 'Laitetiedot',
                                                'Browser details': 'Selaintiedot',
                                                'Account balances': 'Tilisaldot',
                                                'Transaction histories': 'Tapahtumahistoria',
                                                'Email': 'Sähköposti',
                                                'IP address': 'IP-osoite',
                                                'Username': 'Käyttäjänimi',
                                                'Password': 'Salasana',
                                                'Name': 'Nimi',
                                                'Phone number': 'Puhelinnumero',
                                                'Credit card': 'Luottokortti',
                                                'Social media profile': 'Sosiaalisen median profiili',
                                                'Job title': 'Työtehtävä',
                                                'Physical address': 'Osoite',
                                                'Date of birth': 'Syntymäaika',
                                                'Security question': 'Turvakysymys',
                                                'Device info': 'Laitetiedot',
                                                'Browser': 'Selain',
                                                'Account balance': 'Tilisaldo',
                                                'Transaction history': 'Tapahtumahistoria',
                                                'Spoken languages': 'Puhutut kielet',
                                                'Languages': 'Kielet',
                                                'Language': 'Kieli',
                                                'Spoken language': 'Puhuttu kieli',
                                                'Telecommunications carrier': 'Tietoliikenneoperaattori',
                                                'Auth tokens': 'Tunnistustunnukset',
                                                'Avatars': 'Profiilikuvat',
                                                'Genders': 'Sukupuolet',
                                                'Driver\'s licenses': 'Ajokortit',
                                                'Government issued IDs': 'Viralliset henkilötodistukset',
                                                'Profile photos': 'Profiilikuvat',
                                                'Purchases': 'Ostokset',
                                                'Partial credit card data': 'Osittaiset luottokorttitiedot',
                                                'Ages': 'Iät',
                                                'Physical attributes': 'Fyysiset ominaisuudet',
                                                'Age groups': 'Ikäryhmät',
                                                'Cryptocurrency wallet addresses': 'Kryptovaluuttalompakoiden osoitteet',
                                                'Bios': 'Esittelyt',
                                                'Places of birth': 'Syntymäpaikat',
                                                'and answers': 'ja vastaukset',
                                                'Website activity': 'Verkkosivuston toiminta',
                                                'Homepage URLs': 'Kotisivun osoitteet',
                                                'Instant messenger identities': 'Viestisovellusten identiteetit',
                                                'Biometric data': 'Biometriset tiedot',
                                                'Family members\' names': 'Perheenjäsenten nimet',
                                                'Marital statuses': 'Siviilisäädyt',
                                                'Passport numbers': 'Passinumerot',
                                                'Private messages': 'Yksityisviestit',
                                                'Employers': 'Työnantajat',
                                                'Employee': 'Työntekijä',
                                                'Employees': 'Työntekijät',
                                                'Company': 'Yritys',
                                                'Companies': 'Yritykset',
                                                'Organization': 'Organisaatio',
                                                'Organizations': 'Organisaatiot',
                                                'Business': 'Liiketoiminta',
                                                'Businesses': 'Liiketoiminnat',
                                                'Workplace': 'Työpaikka',
                                                'Workplaces': 'Työpaikat',
                                                'Job': 'Työ',
                                                'Jobs': 'Työt',
                                                'Position': 'Asema',
                                                'Positions': 'Asemat',
                                                'Role': 'Rooli',
                                                'Roles': 'Roolit',
                                                'Department': 'Osasto',
                                                'Departments': 'Osastot',
                                                'Team': 'Tiimi',
                                                'Teams': 'Tiimit',
                                                'Salary': 'Palkka',
                                                'Salaries': 'Palkat',
                                                'Compensation': 'Korvaus',
                                                'Benefits': 'Edut',
                                                'Insurance': 'Vakuutus',
                                                'Healthcare': 'Terveydenhuolto',
                                                'Retirement': 'Eläke',
                                                'Pension': 'Eläke',
                                                'Tax': 'Vero',
                                                'Taxes': 'Verot',
                                                'Banking': 'Pankkitoiminta',
                                                'Financial': 'Taloudellinen',
                                                'Finance': 'Rahoitus',
                                                'Accounting': 'Kirjanpito',
                                                'Payroll': 'Palkanlaskenta',
                                                'HR': 'Henkilöstöhallinto',
                                                'Human Resources': 'Henkilöstöhallinto',
                                                'Recruitment': 'Rekrytointi',
                                                'Hiring': 'Palkkaus',
                                                'Training': 'Koulutus',
                                                'Education': 'Koulutus',
                                                'Skills': 'Taidot',
                                                'Certifications': 'Sertifikaatit',
                                                'Experience': 'Kokemus',
                                                'Background': 'Tausta',
                                                'History': 'Historia',
                                                'Performance': 'Suorituskyky',
                                                'Evaluation': 'Arviointi',
                                                'Review': 'Arviointi',
                                                'Feedback': 'Palaute',
                                                'Assessment': 'Arviointi',
                                                'Appraisal': 'Arviointi',
                                                'Browser user agent details': 'Selaimen user agent -tiedot',
                                                'Professional skills': 'Ammatilliset taidot',
                                                'Years of professional experience': 'Ammatillisen kokemuksen vuodet',
                                                'Survey results': 'Kyselytulokset',
                                                'Sähköposti messages': 'Sähköpostiviestit',
                                                'Eating habits': 'Syömistavat',
                                                'Address book contacts': 'Osoitekirjan yhteystiedot',
                                                'Apps installed on devices': 'Laitteille asennetut sovellukset',
                                                'Cellular network names': 'Matkapuhelinverkkojen nimet',
                                                'IMEI numbers': 'IMEI-numerot',
                                                'IMSI numbers': 'IMSI-numerot',
                                                'Occupations': 'Ammatit',
                                                'Credit status information': 'Luottotietojen tiedot',
                                                'Income levels': 'Tulotason',
                                                'Loan information': 'Lainatiedot',
                                                'Personal descriptions': 'Henkilökuvaukset',
                                                'Salutations': 'Tervehdykset',
                                                'Bank account numbers': 'Pankkitilinumerot',
                                                'Social security numbers': 'Henkilötunnukset',
                                                'Time zones': 'Aikavyöhykkeet',
                                                'Encrypted keys': 'Salatut avaimet',
                                                'Applications': 'Sovellukset',
                                                'Historical passwords': 'Aiemmat salasanat',
                                                'User website URLs': 'Käyttäjän verkkosivustojen osoitteet',
                                                'Living costs': 'Asumiskustannukset',
                                                'Family structure': 'Perherakenne',
                                                'Mothers maiden names': 'Äitien tyttönimet',
                                                'Religions': 'Uskonnot',
                                                'Spouses names': 'Puolisoiden nimet',
                                                'Partial dates of birth': 'Osittaiset syntymäaika',
                                                'Personal health data': 'Henkilökohtaiset terveystiedot',
                                                'Smoking habits': 'Tupakointitavat',
                                                'Health insurance information': 'Sairausvakuutustiedot',
                                                'Nationalities': 'Kansallisuudet',
                                                'Vehicle details': 'Ajoneuvon tiedot',
                                                'Job applications': 'Työhakemukset'
                                              };
                                              
                                              let translatedText = text;
                                              
                                              // Käytä käännöksiä järjestyksessä (pidempiä termejä ensin)
                                              const sortedTranslations = Object.entries(dataClassTranslations)
                                                .sort((a, b) => b[0].length - a[0].length);
                                              
                                              sortedTranslations.forEach(([english, finnish]) => {
                                                if (translatedText.includes(english)) {
                                                  translatedText = translatedText.replace(english, finnish);
                                                }
                                              });
                                              
                                              return translatedText;
                                            };
                                            
                                            return translateDataClass(dataClass);
                                          })()}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              
                              {/* Lisätiedot */}
                              <div className="text-sm text-gray-300 space-y-2">
                                {breach.Domain && (
                                  <div><span className="font-medium">Verkkosivusto:</span> {breach.Domain}</div>
                                )}
                                {breach.PwnCount && (
                                  <div><span className="font-medium">Vaikutetut tilit:</span> {breach.PwnCount.toLocaleString('fi-FI')}</div>
                                )}
                                {breach.IsVerified && (
                                  <div className="text-green-400 font-medium">✓ Vahvistettu tietovuoto</div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Toimintaohjeet-osio */}
                      <div className="mt-12 text-center">
                        <p className="text-gray-200 text-lg mb-6">
                          Tarkista tästä toimintaohjeet tietovuodon jälkeen
                        </p>
                        <button 
                          onClick={() => setShowActionModal(true)}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                          Toimintaohjeet
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-transparent backdrop-blur-sm border-2 border-green-500 rounded-3xl p-8 shadow-2xl shadow-green-500/20">
                      <div className="flex items-center gap-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                        <span className="text-xl text-gray-200">{searchResult.message}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <p className="text-sm text-blue-100 max-w-2xl mx-auto">
                Tarkistamme, onko sähköpostiosoitteesi esiintynyt tunnetuissa tietovuodoissa. Saat tiedon välittömästi haun yhteydessä.
              </p>
            </div>
          </div>
        </div>
        
        {/* Case study cards section */}
        <div 
          className="relative w-full bg-white py-24"
          style={{ position: 'relative', zIndex: 10 }}
        >
          <img 
            src="/kuvapankki/Kappaleen teksti (59).png" 
            alt="Huijausmuotoja" 
            className="hidden lg:block absolute -left-20 top-1/3 transform -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 object-contain opacity-60"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-24">
                                                       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                              Nykypäivän yleisimpiä<br />huijausmuotoja
                            </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              <motion.div
                className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-6 md:p-8 rounded-2xl border border-blue-200/30 shadow-lg backdrop-blur-sm cursor-pointer"
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
                onClick={() => openModal("Kuinka suojatua kohdennetulta kalastelulta?", "• Tarkista lähettäjän tiedot: Ole epäilevä, jos viesti tulee tuntemattomalta tai henkilöltä, jonka sähköposti tai puhelinnumero ei näytä oikealta.<br><br>• Älä klikkaa linkkejä tai liitteitä suoraan: Jos viestissä on linkki, kirjoita URL itse selaimeen tai käytä virallista sovellusta.<br><br>• Vahvista pyyntöjä erikseen: Jos viesti pyytää rahaa tai tietoja, ota yhteyttä organisaatioon virallisen kanavan kautta ennen toimimista.<br><br>• Käytä kaksivaiheista tunnistautumista (2FA): Sähköpostin ja pankkitilien suojaaminen 2FA:lla vähentää riskin, vaikka tunnukset vuotaisivat.")}
              >
                <div className="flex items-center space-x-4 mb-4 md:mb-6">
                 <div className="w-8 h-8 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                   </svg>
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold text-white">Kohdennettu kalastelu</h3>
               </div>
               <div className="text-sm text-blue-100 leading-relaxed">
                 Yleisempien huijausten lisäksi voi esiintyä myös kohdennetumpaa kalastelua, jossa hyödynnetään esimerkiksi aikaisemmista vuodoista saatuja tietoja uskottavuuden lisäämiseksi.
               </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-6 md:p-8 rounded-2xl border border-blue-200/30 shadow-lg backdrop-blur-sm cursor-pointer"
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
                onClick={() => openModal("Kuinka suojautua pankkitietojen ja verkkopankkitunnusten kalastelulta?", "• Älä koskaan anna tunnuksia sähköpostissa tai puhelimessa: Pankit ja verottaja eivät pyydä tunnuksia näin.<br><br>• Varmista sivuston osoite: Tarkista, että verkkosivun osoite alkaa https:// ja on pankin/viranomaisen virallinen domain.<br><br>• Hallitse salasanoja ja tunnuksia huolellisesti: Käytä vahvoja salasanoja ja erillisiä tunnuksia eri palveluissa.<br><br>• Ilmoita epäilyttävästä viestistä pankille: Useimmat pankit tarjoavat osoitteet huijausviestien raportointiin.")}
              >
                <div className="flex items-center space-x-4 mb-4 md:mb-6">
                 <div className="w-8 h-8 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                   </svg>
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold text-white">Pankkitietojen ja verkkopankkitunnusten kalastelu</h3>
               </div>
               <div className="text-sm text-blue-100 leading-relaxed">
                 Näissä tapauksissa uhrilta pyydetään verkkopankkitunnuksia tai muita henkilökohtaisia tietoja, usein tekaistun "OmaVero"-sivuston tai muiden uskottavilta näyttävien tahojen nimissä.
               </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-6 md:p-8 rounded-2xl border border-blue-200/30 shadow-lg backdrop-blur-sm cursor-pointer"
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
                onClick={() => openModal("Kuinka suojautua veronpalautushuijauksilta?", "• Älä täytä tietoja epäilyttävillä sivustoilla: Veroilmoitukset ja palautukset tehdään aina virallisella OmaVero-palvelulla (vero.fi).<br><br>• Tarkista lähde: Viranomaiset eivät koskaan lähetä sähköpostia, jossa pyydetään salasanaa tai pankkitunnuksia.<br><br>• Poista epäilyttävät viestit: Älä avaa liitteitä tai linkkejä.<br><br>• Raportoi huijauksesta: Traficomin Kyberturvallisuuskeskus vastaanottaa ilmoituksia huijausviesteistä.")}
              >
                <div className="flex items-center space-x-4 mb-4 md:mb-6">
                 <div className="w-8 h-8 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold text-white">Veronpalautushuijaukset</h3>
               </div>
               <div className="text-sm text-blue-100 leading-relaxed">
                 Traficomin Kyberturvallisuuskeskus on varoittanut veronpalautuksiin liittyvistä huijausviesteistä, joissa väitetään rahan olevan saatavilla täyttämällä tiedot huijaussivustolla.
               </div>
              </motion.div>
              
              <motion.div
                className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 p-6 md:p-8 rounded-2xl border border-blue-200/30 shadow-lg backdrop-blur-sm cursor-pointer"
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
                onClick={() => openModal("Kuinka suojautua pakettihuijauksilta?", "• Älä seuraa linkkejä epäilyttäviin sivustoihin: Jos viestissä väitetään paketin olevan jumissa, tarkista tilaus suoraan verkkokaupan tai kuriirin viralliselta sivulta.<br><br>• Tarkista lähettäjä: Katso, vastaako lähettäjän sähköposti tai numero oikeaa palvelua.<br><br>• Älä maksa ylimääräisiä maksuja tuntemattomille: Huijarit usein pyytävät ylimääräisiä 'maksuja' huijaussivustolla.<br><br>• Poista viesti ja raportoi: Useimmat kuriiripalvelut tarjoavat ohjeet huijausviestien raportointiin.")}
              >
                <div className="flex items-center space-x-4 mb-4 md:mb-6">
                 <div className="w-8 h-8 bg-blue-900/80 rounded-lg flex items-center justify-center shadow-lg">
                   <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                   </svg>
                 </div>
                 <h3 className="text-xl md:text-2xl font-bold text-white">Pakettihuijaukset</h3>
               </div>
               <div className="text-sm text-blue-100 leading-relaxed">
                 Huijausviesteissä väitetään usein, että jokin paketti on jumissa tai että sinun tulee maksaa jotain pakettiin liittyen, ohjaten sinut huijaussivustolle pankkitunnistamisen toivossa.
               </div>
              </motion.div>
            </div>
          </div>
        </div>

      {/* Pricing section */}
      <div 
        className="relative w-full bg-white/80 py-16"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header text - centered */}
          <div className="text-center max-w-4xl mx-auto mb-12 mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Valitse sinulle sopivin turva
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Valitse parhaiten sopiva suojaus.
            </p>
            <p className="text-sm text-gray-600">
              Jokaisessa tilauksessa on 14vrk maksuton peruutusoikeus.
            </p>
          </div>
          
          {/* Pricing cards - horizontal layout */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
              
              {/* Pricing card 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Henkilösuoja Yhdelle
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  21,99 €/kk
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start">
                    <span className="text-gray-700">• Tietojen monitorointi ja ilmoitus tietovuodoista</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">• Vakuutus, joka turvaa sinut vahinkojen varalta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">• Apu ja tuki</span>
                  </li>
                </ul>
                <button 
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  onClick={() => {
                    // Lisää tuote ostoskoriin (Henkilösuoja Yhdelle)
                    const product = {
                      id: 'henkilosuoja-yhdelle',
                      name: 'Henkilösuoja Yhdelle',
                      price: 21.99,
                      type: 'subscription'
                    };
                    // Tallenna ostoskoriin localStorageen
                    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    // Siirry verkkokauppa-sivulle
                    navigate('/verkkokauppa');
                  }}
                >
                  Suojaa laite
                </button>
              </div>

              {/* Pricing card 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Henkilösuoja Tupla
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  28,99 €/kk
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start">
                    <span className="text-gray-700">• Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä läheisellesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">• Vakuutus, joka turvaa sinut ja läheisesi vahinkojen varalta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">• Apu ja tuki</span>
                  </li>
                </ul>
                <button 
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  onClick={() => {
                    // Lisää tuote ostoskoriin (Henkilösuoja Tupla)
                    const product = {
                      id: 'henkilosuoja-tupla',
                      name: 'Henkilösuoja Tupla',
                      price: 28.99,
                      type: 'subscription'
                    };
                    // Tallenna ostoskoriin localStorageen
                    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    // Siirry verkkokauppa-sivulle
                    navigate('/verkkokauppa');
                  }}
                >
                  Suojaa laite
                </button>
              </div>

              {/* Pricing card 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Henkilösuoja Perhe
                </h3>
                <div className="text-4xl font-bold text-gray-900 mb-6">
                  32,99 €/kk
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start">
                    <span className="text-gray-700">• Tietojen monitorointi ja ilmoitus tietovuodoista sinulle sekä koko perheellesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">• Vakuutus, joka turvaa sinut ja koko perheesi vahinkojen varalta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">• Apu ja tuki</span>
                  </li>
                </ul>
                <button 
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors"
                  onClick={() => {
                    // Lisää tuote ostoskoriin (Henkilösuoja Perhe)
                    const product = {
                      id: 'henkilosuoja-perhe',
                      name: 'Henkilösuoja Perhe',
                      price: 32.99,
                      type: 'subscription'
                    };
                    // Tallenna ostoskoriin localStorageen
                    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    cart.push(product);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    // Siirry verkkokauppa-sivulle
                    navigate('/verkkokauppa');
                  }}
                >
                  Suojaa laite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Trial section */}
      <div 
        className="relative w-full bg-gradient-to-b from-white via-blue-50 to-blue-200 py-32"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trial content with text and video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text section */}
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                Voit myös kokeilla identiteettisuojaa ilman sitoumuksia
              </h2>
              <p className="text-base text-black leading-relaxed mb-6">
                Kokeiluversio sisältää henkilötietojen tarkastuksen sekä monipuoliset työkalut, joilla voit ehkäistä tietojesi väärinkäyttöä ja havaita mahdollisia uhkia ajoissa. Saat 30 päivän ilmaisen käyttöjakson, jonka aikana voit rauhassa tutustua palvelun hyötyihin ja varmistaa, että tietosi ovat turvassa.
              </p>
              {/* CTA Button */}
              <button 
                className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-sm"
                onClick={() => {
                  // Lisää ilmaisjakso ostoskoriin
                  const freeTrial = {
                    title: "Henkilösuoja - Ilmainen kokeilujakso 30pv",
                    price: "0€"
                  };
                  // Tallenna ostoskoriin localStorageen
                  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                  cart.push(freeTrial);
                  localStorage.setItem('cart', JSON.stringify(cart));
                  // Siirry verkkokauppa-sivulle
                  navigate('/verkkokauppa');
                }}
              >
                Kokeile
                <ArrowRight className="ml-2 h-3 w-3 inline" />
              </button>
            </div>
            
            {/* Image section */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <img 
                  src="/kuvapankki/Kappaleen teksti (62).png" 
                  alt="Identiteettisuoja kuva" 
                  className="w-full h-auto"
                  style={{ 
                    background: 'transparent', 
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles section */}
      <div 
        className="relative w-full bg-gray-50 py-16"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Julkaisut
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Article Card 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-sm">Kuva tulossa pian</p>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-blue-900 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  Ajankohtaista
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  
                </h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
            
            {/* Article Card 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-sm">Kuva tulossa pian</p>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-100 text-blue-900 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  Ajankohtaista
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  
                </h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
            
            {/* Article Card 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-sm">Kuva tulossa pian</p>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-blue-900 text-white text-xs font-medium px-3 py-1 rounded-full mb-3">
                  Artikkelit
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  
                </h3>
                <p className="text-sm text-gray-600"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </motion.div>

      {/* Toimintaohjeet-modal */}
      {showActionModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowActionModal(false)}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-blue-900">Toimintaohjeet tietovuodon jälkeen</h3>
              <button
                onClick={() => setShowActionModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">1. Käytä vahvaa ja uniikkia salasanaa kyseiselle palvelulle</h4>
                <p className="leading-relaxed">
                  Vältä samaa salasanaa useassa palvelussa. Harkitse salasanamanagerin käyttöä, jotta voit luoda ja hallita vahvoja salasanoja.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">2. Ota kaksivaiheinen tunnistautuminen (2FA) käyttöön</h4>
                <p className="leading-relaxed">
                  Aktivoi 2FA kaikissa palveluissa, joissa se on mahdollista. Tämä lisää merkittävästi tilisi turvallisuutta, vaikka salasana olisi vuotanut.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">3. Tarkista muut tilisi</h4>
                <p className="leading-relaxed">
                  Jos käytät samaa sähköpostia ja salasanaa muissa palveluissa, vaihda myös niissä salasanat. Seuraa tilitapahtumia epäilyttävän toiminnan varalta.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">4. Varo huijauksia (phishing)</h4>
                <p className="leading-relaxed">
                  Ole erityisen tarkkana epäilyttävien sähköpostien ja linkkien kanssa. Älä klikkaa linkkejä, älä avaa liitteitä tuntemattomista lähteistä.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Tärkeää muistaa</h4>
                <p className="leading-relaxed">
                  Kannattaa kuitenkin muistaa, että useimmiten pelkkä sähköpostiosoitteen joutuminen tietovuotoon ei vielä ole vakavaa. Sähköpostiosoite on usein julkinenkin tieto, eikä sen paljastuminen yksinään vaaranna käyttäjää. Riski kasvaa kuitenkin silloin, jos vuodon yhteydessä on päätynyt vääriin käsiin myös salasanoja, henkilötietoja tai muita arkaluontoisia tietoja.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal for displaying content */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-blue-900">{modalTitle}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>
            <div className="text-gray-700 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: modalContent.replace(/\n/g, '<br>') }}></div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;
