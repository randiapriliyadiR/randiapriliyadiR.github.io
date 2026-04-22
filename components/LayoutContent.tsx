'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function LayoutContent({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <div className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <Sidebar />
      </div>
      <main style={{
        flex: 1,
        position: 'relative',
        zIndex: 10,
        marginLeft: 'var(--sidebar-width)',
        transition: 'margin 0.3s ease'
      }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            style={{ willChange: 'opacity' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      {isMobileMenuOpen && (
        <button
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 40,
            border: 'none',
            cursor: 'default',
            padding: 0
          }}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
    </div>
  );
}
