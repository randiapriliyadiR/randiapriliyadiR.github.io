'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function GalleriesClient({ items }: Readonly<{ items: any[] }>) {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    globalThis.addEventListener('keydown', handleEsc);
    return () => globalThis.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: 'var(--main-padding)' }}>

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em' }}>GALLERIES</h1>
        <div style={{ width: '100%', height: '1px', backgroundColor: 'currentColor', opacity: 0.2, marginTop: '1rem' }} />
      </div>

      <div className="galleries-grid">
        {items.map((item, i) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setSelectedItem(item)}
            style={{
              breakInside: 'avoid',
              marginBottom: '2rem',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '8px',
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              display: 'block'
            }}
            whileHover={{ scale: 1.01 }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: 'auto' }}>
              <Image
                src={item.url}
                alt={item.title}
                width={800}
                height={600}
                priority={i < 2}
                loading={i < 2 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                backdropFilter: 'blur(4px)',
                textAlign: 'center',
                zIndex: 1
              }}
            >
              <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 300, marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: 'white', letterSpacing: '0.1rem', fontWeight: 300, fontSize: '0.7rem', opacity: 0.8 }}>VIEW DETAILS</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="gallery-modal"
            >
              <div className="gallery-modal-image">
                <Image
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>

              <div className="gallery-modal-detail">
                <div style={{ flex: 1 }}>
                  <h2 className="gallery-modal-title">{selectedItem.title}</h2>
                  <div style={{ width: '40px', height: '1px', backgroundColor: 'currentColor', opacity: 0.5, marginBottom: '1.5rem' }} />
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.8, opacity: 0.7, fontWeight: 300 }}>{selectedItem.description}</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <motion.button
                    onClick={() => setSelectedItem(null)}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: 'inherit',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      cursor: 'pointer',
                      opacity: 0.5,
                      textTransform: 'uppercase'
                    }}
                    whileHover={{ opacity: 1 }}
                  >
                    CLOSE
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
