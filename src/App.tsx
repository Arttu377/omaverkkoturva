
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GeneralTerms from "./pages/GeneralTerms";
import TermsOfService from "./pages/TermsOfService";
import Identiteettiturva from "./pages/Identiteettiturva";
import Blog from "./pages/Blog";
import Artikkelit from "./pages/Artikkelit";
import IdentiteettivarkaudenEstaminen from "./pages/blog/IdentiteettivarkaudenEstaminen";
import Verkkoturvallisuus2025 from "./pages/blog/Verkkoturvallisuus2025";
import TietovuotojenVaikutukset from "./pages/blog/TietovuotojenVaikutukset";
import SalasananSuojaus from "./pages/blog/SalasananSuojaus";
import KaksivaiheinenTunnistus from "./pages/blog/KaksivaiheinenTunnistus";
import TietojenkalastelunEstaminen from "./pages/blog/TietojenkalastelunEstaminen";
import Verkkokauppahuijaukset from "./pages/blog/Verkkokauppahuijaukset";
import Nettikiusaaminen from "./pages/blog/Nettikiusaaminen";
import SuomenKyberturvallisuustilanne2025 from "./pages/blog/SuomenKyberturvallisuustilanne2025";
import SuomenHaavoittuvuusJaKyberuhkienLuonne from "./pages/blog/SuomenHaavoittuvuusJaKyberuhkienLuonne";
import VerkkorikollisuusSuomessaJaPohjoismaissa from "./pages/blog/VerkkorikollisuusSuomessaJaPohjoismaissa";
import Irtisanomislomake from "./pages/Irtisanomislomake";
import Contact from "./pages/Contact";
import Verkkokauppa from "./pages/Verkkokauppa";
import OrderConfirmation from "./pages/OrderConfirmation";
import Vahvistus from "./pages/Vahvistus";

// Component to handle redirects from 404 page
const RedirectHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // GitHub Pages SPA redirect handling
    const pathSegmentsToKeep = 1;
    const l = window.location;
    
    // Check if we're on GitHub Pages and need to redirect
    if (l.pathname.includes('/?/')) {
      const p = l.pathname.split('/?/')[1];
      if (p) {
        const newPath = '/' + p.split('/').slice(pathSegmentsToKeep).join('/').replace(/~and~/g, '&');
        navigate(newPath, { replace: true });
      }
    }
    
    // Also check for stored redirect path from old method
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
};

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ShoppingCartProvider>
          <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RedirectHandler />
            <Routes>
              {/* Julkiset sivut (eivät vaadi kirjautumista) */}
              <Route path="/vahvista-tilaus/:token" element={<OrderConfirmation />} />
              <Route path="/vahvistus" element={<Vahvistus />} />
              
              {/* Pääsivuston sivut */}
              <Route path="/" element={<Index />} />
              <Route path="/meista" element={<About />} />
              <Route path="/tietosuojaseloste" element={<PrivacyPolicy />} />
              <Route path="/yleiset-sopimusehdot" element={<GeneralTerms />} />
              <Route path="/palvelusopimuksen-kayttoehdot" element={<TermsOfService />} />
              <Route path="/henkilosuoja" element={<Identiteettiturva />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/identiteettivarkauden-estaminen" element={<IdentiteettivarkaudenEstaminen />} />
              <Route path="/blog/verkkoturvallisuus-2025" element={<Verkkoturvallisuus2025 />} />
              <Route path="/blog/tietovuotojen-vaikutukset" element={<TietovuotojenVaikutukset />} />
              <Route path="/blog/salasanan-suojaus" element={<SalasananSuojaus />} />
              <Route path="/blog/kaksivaiheinen-tunnistus" element={<KaksivaiheinenTunnistus />} />
              <Route path="/blog/tietojenkalastelun-estaminen" element={<TietojenkalastelunEstaminen />} />
              <Route path="/blog/verkkokauppahuijaukset" element={<Verkkokauppahuijaukset />} />
                          <Route path="/blog/nettikiusaaminen" element={<Nettikiusaaminen />} />
            <Route path="/blog/suomen-kyberturvallisuustilanne-2025" element={<SuomenKyberturvallisuustilanne2025 />} />
            <Route path="/blog/suomen-haavoittuvuus-ja-kyberuhkien-luonne" element={<SuomenHaavoittuvuusJaKyberuhkienLuonne />} />
            <Route path="/blog/verkkorikollisuus-suomessa-ja-pohjoismaissa" element={<VerkkorikollisuusSuomessaJaPohjoismaissa />} />
            <Route path="/artikkelit" element={<Artikkelit />} />
              <Route path="/verkkokauppa" element={<Verkkokauppa />} />
              <Route path="/irtisanomislomake" element={<Irtisanomislomake />} />
              <Route path="/ota-yhteytta" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          </TooltipProvider>
        </ShoppingCartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
