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
import Artikkelit from "./pages/Artikkelit";
import Contact from "./pages/Contact";
import Verkkokauppa from "./pages/Verkkokauppa";
import Irtisanomislomake from "./pages/Irtisanomislomake";
import OrderConfirmation from "./pages/OrderConfirmation";
import Vahvistus from "./pages/Vahvistus";

const AppBrowser = () => {
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
              {/* Pääsivu */}
              <Route path="/" element={<Index />} />
              
              
              {/* Oikeudelliset sivut - ilman hastagia */}
              <Route path="/tietosuojaseloste" element={<PrivacyPolicy />} />
              <Route path="/yleiset-sopimusehdot" element={<GeneralTerms />} />
              <Route path="/palvelusopimuksen-kayttoehdot" element={<TermsOfService />} />
              <Route path="/irtisanomislomake" element={<Irtisanomislomake />} />
              
              {/* Muut sivut */}
              <Route path="/vahvista-tilaus/:token" element={<OrderConfirmation />} />
              <Route path="/vahvistus" element={<Vahvistus />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          </TooltipProvider>
        </ShoppingCartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppBrowser;
