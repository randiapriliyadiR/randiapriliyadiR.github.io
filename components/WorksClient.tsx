'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WorksClient({ projects }: Readonly<{ projects: any[] }>) {
  return (
    <div style={{ padding: 'var(--main-padding)', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>

      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em' }}>WORKS</h1>
        <div style={{ width: '100%', height: '1px', backgroundColor: 'currentColor', opacity: 0.2, marginTop: '1rem' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="works-row"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="works-image-wrap"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ fontFamily: 'monospace', opacity: 0.6, fontSize: '1.2rem', letterSpacing: '0.1em' }}>
                [ 0{index + 1} / 0{projects.length} ]
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.05em' }}>{project.title}</h2>
              <p style={{ opacity: 0.7, fontSize: '1.1rem', letterSpacing: '0.05em' }}>{project.type}</p>
              <p style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.6, fontWeight: 300 }}>{project.desc}</p>
              
              {project.link && (
                <motion.a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '1rem',
                    padding: '0.8rem 2.5rem',
                    border: '1px solid currentColor',
                    borderRadius: '40px',
                    fontSize: '0.8rem',
                    letterSpacing: '0.2em',
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: 0.8,
                    transition: 'opacity 0.3s'
                  }}
                  whileHover={{
                    backgroundColor: 'white',
                    color: 'black',
                    opacity: 1
                  }}
                >
                  VISIT PROJECT
                </motion.a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
