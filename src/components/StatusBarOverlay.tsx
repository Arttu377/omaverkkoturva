import React from 'react';

const StatusBarOverlay = () => {
  const style: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 'max(env(safe-area-inset-top, 0px), 0px)',
    background: 'rgba(255,255,255,0.6)',
    backdropFilter: 'saturate(180%) blur(12px)',
    WebkitBackdropFilter: 'saturate(180%) blur(12px)' as any,
    borderBottom: '1px solid rgba(255,255,255,0.4)',
    zIndex: 40,
    pointerEvents: 'none'
  };

  return (
    <div className="block md:hidden" style={style} />
  );
};

export default StatusBarOverlay;


