import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GeneralTerms from "./pages/GeneralTerms";
import TermsOfService from "./pages/TermsOfService";
import Irtisanomislomake from "./pages/Irtisanomislomake";
import OrderConfirmation from "./pages/OrderConfirmation";
import Vahvistus from "./pages/Vahvistus";

// Component to handle redirects from 404 page
const RedirectHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check for redirect parameter from 404.html
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath) {
      // Remove the redirect parameter and navigate to the correct path
      const newUrl = new URL(window.location);
      newUrl.searchParams.delete('redirect');
      window.history.replaceState({}, '', newUrl.toString());
      navigate(redirectPath, { replace: true });
      return;
    }
    
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
    const storedRedirectPath = sessionStorage.getItem('redirectPath');
    if (storedRedirectPath) {
      sessionStorage.removeItem('redirectPath');
      navigate(storedRedirectPath, { replace: true });
    }
  }, [navigate]);
  
  return null;
};

const AppBrowser = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <ShoppingCartProvider>
            <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <RedirectHandler />
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
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default AppBrowser;
