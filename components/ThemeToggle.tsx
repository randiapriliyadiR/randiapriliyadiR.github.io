'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial preference
    const isLightMode = document.documentElement.dataset.theme === 'light';
    setIsLight(isLightMode);
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      delete document.documentElement.dataset.theme;
      setIsLight(false);
    } else {
      document.documentElement.dataset.theme = 'light';
      setIsLight(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 100,
        backgroundColor: 'transparent',
        border: '1px solid currentColor',
        borderRadius: '20px',
        width: '50px',
        height: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '2px',
        opacity: 0.7,
        transition: 'opacity 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
      aria-label="Toggle Theme"
    >
      <div
        style={{
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          backgroundColor: 'currentColor',
          transform: isLight ? 'translateX(0)' : 'translateX(26px)',
          transition: 'transform 0.3s ease',
        }}
      />
    </button>
  );
}
