import React, { useState, useEffect } from 'react';
import DesktopLayout from './layouts/DesktopLayout';
import MobileLayout from './layouts/MobileLayout';

const getIsMobile = () => document.documentElement.clientWidth < 768;

export default function App() {
  const [isMobile, setIsMobile] = useState(getIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
