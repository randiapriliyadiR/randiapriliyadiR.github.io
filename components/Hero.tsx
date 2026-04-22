'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
        <HeroCanvas />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)', position: 'relative', zIndex: 1 }}>
        
        {/* Top Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ 
              fontSize: 'var(--hero-font-size)', 
              fontWeight: 200, 
              lineHeight: 1, 
              letterSpacing: '0.05em',
              margin: 0,
              textTransform: 'uppercase'
            }}
          >
            RANDI<br/>APRILIYADI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: '1.25rem', letterSpacing: '0.05em', opacity: 0.8 }}
          >
            Full-Stack Developer
          </motion.p>
        </div>

        {/* Bottom Contacts & About Me */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4rem' }}>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ flex: 1, minWidth: '300px' }}
          >
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8 }}>
              Not accepting any business inquiries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ flex: 1, minWidth: '300px', maxWidth: '600px' }}
          >
            <h2 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
              ABOUT ME
            </h2>
            <div style={{ width: '100%', height: '1px', backgroundColor: 'currentColor', opacity: 0.2, marginBottom: '2rem' }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.8, opacity: 0.7, fontWeight: 300 }}>
              I am a Bachelor's degree graduate from the Global Institute of Technology and Business.<br/>
              My primary focus is full-stack development, and I have worked on several personal and corporate projects. I enjoy exploring new technologies and experimenting with creative ideas.<br/>
              Outside of programming, I study quantitative trading and digital business.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
