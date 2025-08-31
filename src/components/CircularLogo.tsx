import React from 'react';

interface CircularLogoProps {
  imageUrl: string;
  alt: string;
  size?: number;
  className?: string;
  borderWidth?: number;
  borderColor?: string;
}

export const CircularLogo: React.FC<CircularLogoProps> = ({
  imageUrl,
  alt,
  size = 40,
  className = '',
  borderWidth = 0,
  borderColor = 'transparent'
}) => {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: `${borderWidth}px solid ${borderColor}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        src={imageUrl}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%'
        }}
      />
    </div>
  );
};
