
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import ShoppingCart from '@/components/ShoppingCart';
import OrderForm from '@/components/OrderForm';
import StatusBarOverlay from '@/components/StatusBarOverlay';
import { useAuth } from '@/contexts/AuthContext';
import { useShoppingCart } from '@/contexts/ShoppingCartContext';
import { useToast } from '@/hooks/use-toast';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
};

const PageLayout = ({ children, showContact = true }: PageLayoutProps) => {
  const location = useLocation();
  const { user } = useAuth();
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useShoppingCart();
  const [showCart, setShowCart] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const { toast } = useToast();
  const [isAtTop, setIsAtTop] = useState(true);
  const [headerHidePx, setHeaderHidePx] = useState(0);

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Mobile: compute progressive hide amount for headers based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setIsAtTop(y === 0);
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        const clamped = Math.max(0, Math.min(y, 112)); // 64px main + 48px secondary
        setHeaderHidePx(clamped);
        document.documentElement.style.setProperty('--header-hide-px', clamped + 'px');
        // Update status bar blur illusion strength based on scroll (fade out when scrolling)
        const maxBlurPx = 100; // px after which overlay becomes fully transparent
        const opacity = Math.max(0, 0.6 - Math.min(y, maxBlurPx) / maxBlurPx * 0.6);
        const extra = Math.min(44, Math.round((1 - opacity / 0.6) * 24)); // extend height slightly as it fades
        document.documentElement.style.setProperty('--status-blur-opacity', opacity.toString());
        document.documentElement.style.setProperty('--status-blur-extra', extra + 'px');
        if (y > 2) {
          document.documentElement.classList.add('nav-hidden');
        } else {
          document.documentElement.classList.remove('nav-hidden');
        }
      } else {
        setHeaderHidePx(0);
        document.documentElement.style.setProperty('--header-hide-px', '0px');
        document.documentElement.style.setProperty('--status-blur-opacity', '0.6');
        document.documentElement.style.setProperty('--status-blur-extra', '44px');
        document.documentElement.classList.remove('nav-hidden');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const handleResize = () => handleScroll();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Also hide any mobile status bar gradient overlay when scrolled (looks like part of the menu)
  useEffect(() => {
    const updateBodyClass = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        if (window.scrollY === 0) {
          document.body.classList.remove('hide-mobile-status-bar');
        } else {
          document.body.classList.add('hide-mobile-status-bar');
        }
      } else {
        document.body.classList.remove('hide-mobile-status-bar');
      }
    };
    updateBodyClass();
    window.addEventListener('scroll', updateBodyClass, { passive: true });
    window.addEventListener('resize', updateBodyClass);
    return () => {
      window.removeEventListener('scroll', updateBodyClass);
      window.removeEventListener('resize', updateBodyClass);
    };
  }, []);

  const handleContinueOrder = () => {
    setShowCart(false);
    setShowOrderForm(true);
  };

  const handleOrderSubmit = (data: any) => {
    console.log('Order submitted:', data);
    setShowOrderForm(false);
    clearCart();
    toast({
      title: "Tilaus lähetetty!",
      description: "Kiitos tilauksestasi. Saat pian vahvistuksen sähköpostiin.",
    });
  };

  return (
    <div className="min-h-screen bg-transparent w-full max-w-[100vw] overflow-x-hidden">
      {/* iOS-like fake status bar overlay on mobile */}
      <StatusBarOverlay />
      <Navbar />
      {user && location.pathname !== '/dashboard' && (
        <SecondaryNavbar 
          cartItems={cartItems}
          onCartClick={() => setShowCart(true)}
        />
      )}
      {children}
      {!user && <Footer />}
      
      {/* Shopping Cart Modal */}
      {showCart && (
        <ShoppingCart 
          items={cartItems}
          onContinueOrder={handleContinueOrder}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
        />
      )}
      
      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm 
          onClose={() => setShowOrderForm(false)}
          onSubmit={handleOrderSubmit}
        />
      )}
    </div>
  );
};

export default PageLayout;
