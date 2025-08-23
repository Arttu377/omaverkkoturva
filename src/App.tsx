
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import Irtisanomislomake from "./pages/Irtisanomislomake";
import Contact from "./pages/Contact";
import Verkkokauppa from "./pages/Verkkokauppa";
import OrderConfirmation from "./pages/OrderConfirmation";

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
            <Routes>
              {/* Julkiset sivut (eivät vaadi kirjautumista) */}
              <Route path="/vahvista-tilaus/:token" element={<OrderConfirmation />} />
              
              {/* Pääsivuston sivut */}
              <Route path="/" element={<Index />} />
              <Route path="/meista" element={<About />} />
              <Route path="/tietosuojaseloste" element={<PrivacyPolicy />} />
              <Route path="/yleiset-sopimusehdot" element={<GeneralTerms />} />
              <Route path="/palvelusopimuksen-kayttoehdot" element={<TermsOfService />} />
              <Route path="/henkilosuoja" element={<Identiteettiturva />} />
              <Route path="/blog" element={<Blog />} />
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
