import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type PublicPageLayoutProps = {
  children: React.ReactNode;
};

const PublicPageLayout = ({ children }: PublicPageLayoutProps) => {
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Mobile: compute progressive hide amount for headers based on scroll (mirror PageLayout)
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setIsAtTop(y === 0);
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      if (isMobile) {
        const clamped = Math.max(0, Math.min(y, 112));
        document.documentElement.style.setProperty('--header-hide-px', clamped + 'px');
        if (y === 0) {
          document.body.classList.remove('hide-mobile-status-bar');
        } else {
          document.body.classList.add('hide-mobile-status-bar');
        }
      } else {
        document.documentElement.style.setProperty('--header-hide-px', '0px');
        document.body.classList.remove('hide-mobile-status-bar');
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true } as AddEventListenerOptions);
    const handleResize = () => handleScroll();
    window.addEventListener('resize', handleResize, { passive: true } as AddEventListenerOptions);
    return () => {
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('resize', handleResize as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent w-full max-w-[100vw] overflow-x-hidden">
      <div className="relative z-[10000]">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PublicPageLayout;
