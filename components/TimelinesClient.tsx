'use client';
import { motion } from 'framer-motion';

export default function TimelinesClient({ careerData }: Readonly<{ careerData: any[] }>) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: 'var(--main-padding)' }}>
      
      <div style={{ marginBottom: 'var(--section-gap)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em' }}>TIMELINES</h1>
        <div style={{ width: '100%', height: '1px', backgroundColor: 'currentColor', opacity: 0.2, marginTop: '1rem' }} />
      </div>

      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 'var(--section-gap)',
        paddingLeft: '2rem',
        maxWidth: '800px'
      }}>
        {/* Continuous Line */}
        <div style={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          bottom: 0, 
          width: '1px', 
          backgroundColor: 'currentColor', 
          opacity: 0.2 
        }} />

        {careerData.map((item, i) => (
          <motion.div
            key={item.year + item.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            style={{ position: 'relative' }}
          >
            {/* Dot on the line */}
            <div style={{ 
              position: 'absolute', 
              left: '-2rem', 
              top: '0.5rem', 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: 'currentColor',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px currentColor'
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ 
                fontFamily: 'monospace', 
                fontSize: '0.9rem', 
                opacity: 0.5, 
                letterSpacing: '0.1em' 
              }}>
                {item.year}
              </span>
              <h2 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 400, 
                letterSpacing: '0.02em',
                marginTop: '0.2rem'
              }}>
                {item.role}
              </h2>
              <h3 style={{ 
                fontSize: '1.1rem', 
                fontWeight: 300, 
                opacity: 0.8,
                letterSpacing: '0.05em'
              }}>
                {item.company}
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: 1.6, 
                opacity: 0.7, 
                fontWeight: 300,
                marginTop: '1rem',
                maxWidth: '600px'
              }}>
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
