import React from 'react';

interface CircularFaviconProps {
  imageUrl: string;
  alt: string;
  size?: number;
  className?: string;
  showBorder?: boolean;
  borderColor?: string;
  shadow?: boolean;
}

export const CircularFavicon: React.FC<CircularFaviconProps> = ({
  imageUrl,
  alt,
  size = 32,
  className = '',
  showBorder = false,
  borderColor = '#ffffff',
  shadow = false
}) => {
  const borderStyle = showBorder ? `2px solid ${borderColor}` : 'none';
  const shadowStyle = shadow ? '0 4px 8px rgba(0,0,0,0.2)' : 'none';

  return (
    <div
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: borderStyle,
        overflow: 'hidden',
        boxShadow: shadowStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
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
