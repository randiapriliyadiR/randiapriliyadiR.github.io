'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Motivation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} style={{ padding: 'var(--section-gap) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          MOTIVATION
        </h2>
        <div style={{ width: '100%', maxWidth: '500px', height: '1px', backgroundColor: 'currentColor', opacity: 0.2 }} />
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--section-gap)', alignItems: 'flex-start' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ flex: 1, minWidth: '300px', maxWidth: '500px' }}
          >
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, opacity: 0.8, fontWeight: 300 }}>
              I am a full-stack developer with AI integration and interactive frontend.<br/><br/>
              While I am still exploring where I want my career to evolve, I have discovered that building user interfaces is what excites me the most.<br/><br/>
              That is why I am currently dedicating my energy to improving both my technical execution and design sensitivity on the frontend.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ 
              flex: 1, 
              minWidth: '300px', 
              height: '500px', 
              overflow: 'hidden',
              borderRadius: '2px',
              position: 'relative'
            }}
          >
            <motion.div 
              style={{
                y,
                width: '100%',
                height: '140%',
                position: 'absolute',
                top: '-20%',
                backgroundColor: '#333',
                backgroundImage: 'url(/images/projects/home.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)',
              }} 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
