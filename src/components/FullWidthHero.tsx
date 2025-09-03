import React from 'react';

interface FullWidthHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  height?: string;
}

const FullWidthHero: React.FC<FullWidthHeroProps> = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  height = '400px' 
}) => {
  console.log('FullWidthHero backgroundImage:', backgroundImage);
  
  // Use CSS media query instead of JavaScript for better reliability
  const computedHeight = height;

  return (
    <div 
      className="full-width-hero"
      style={{
        position: 'relative',
        height: computedHeight,
        marginLeft: '-50vw',
        marginRight: '-50vw',
        left: '50%',
        right: '50%',
        width: '100vw',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0',
        alignItems: 'center',
        textAlign: 'center',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Desktop background image (lg and up) */}
      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: '60% center',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleX(1.2)',
          zIndex: 1
        }}
      />
      
                   {/* Tablet background image (md only) - About page style */}
             <div className="tablet-bg hidden md:block lg:hidden" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
               <img
                 src={backgroundImage}
                 srcSet={`${backgroundImage} 1x, ${backgroundImage.replace('.png', '@2x.png')} 2x, ${backgroundImage.replace('.png', '@3x.png')} 3x`}
                 alt="Background"
                 className="absolute inset-0 w-full h-full object-cover"
                 style={{ background: 'transparent', backgroundColor: 'transparent', transform: 'translateY(-20%)' }}
               />
             </div>
             
             {/* Mobile background image (below md) - About page style */}
             <div className="mobile-bg block md:hidden" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
               <img
                 src={backgroundImage}
                 srcSet={`${backgroundImage} 1x, ${backgroundImage.replace('.png', '@2x.png')} 2x, ${backgroundImage.replace('.png', '@3x.png')} 3x`}
                 alt="Background"
                 className="absolute inset-0 w-full h-full object-cover"
                 style={{ background: 'transparent', backgroundColor: 'transparent', transform: 'translateY(-20%)' }}
               />
             </div>
      {/* Title and subtitle on background */}
      <div className="mt-8 sm:mt-10 md:mt-0" style={{ position: 'relative', zIndex: 10 }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto px-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FullWidthHero;
