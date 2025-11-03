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
    // Reset status bar illusion at top
    document.documentElement.style.setProperty('--status-blur-opacity', '0');
    document.documentElement.style.setProperty('--status-blur-extra', '0px');
    document.documentElement.style.setProperty('--header-hide-px', '0px');
    document.documentElement.classList.remove('nav-hidden');
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
        // Update status bar blur illusion strength based on scroll
        const maxBlurPx = 100;
        const opacity = y === 0 ? 0 : Math.min(0.6, (Math.min(y, maxBlurPx) / maxBlurPx) * 0.6);
        const extra = y === 0 ? 0 : Math.min(44, Math.round((opacity / 0.6) * 24));
        document.documentElement.style.setProperty('--status-blur-opacity', opacity.toString());
        document.documentElement.style.setProperty('--status-blur-extra', extra + 'px');
        if (y === 0) {
          document.body.classList.remove('hide-mobile-status-bar');
          document.documentElement.classList.remove('nav-hidden');
        } else {
          document.body.classList.add('hide-mobile-status-bar');
          document.documentElement.classList.add('nav-hidden');
        }
      } else {
        document.documentElement.style.setProperty('--header-hide-px', '0px');
        document.body.classList.remove('hide-mobile-status-bar');
        document.documentElement.style.setProperty('--status-blur-opacity', '0.6');
        document.documentElement.style.setProperty('--status-blur-extra', '44px');
        document.documentElement.classList.remove('nav-hidden');
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
