'use client';
import { motion } from 'framer-motion';

const skills = {
  FRONTEND: ['TypeScript', 'Nuxt.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Flutter'],
  BACKEND: ['TypeScript', 'Node.js', 'Laravel', 'Hono', 'Deno', 'Firebase', 'Supabase', 'Cloudflare'],
  TOOLS: ['Windows', 'MacOS', 'Zed', 'Github', 'Figma', 'Adobe Illustrator', 'Claude Code', 'Atlassian', 'Manus AI']
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Skills() {

  return (
    <section style={{ padding: 'var(--section-gap) 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            SKILLS
          </h2>
          <div style={{ width: '100%', height: '1px', backgroundColor: 'currentColor', opacity: 0.2 }} />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--section-gap)', justifyContent: 'space-between' }}>
          {Object.entries(skills).map(([category, items], sectionIndex) => (
            <div key={category} style={{ flex: 1, minWidth: '250px' }}>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
                style={{ fontSize: '1.25rem', fontWeight: 300, letterSpacing: '0.1em', marginBottom: '2rem', opacity: 0.9 }}
              >
                {category}
              </motion.h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    style={{
                      padding: '0.5rem 1.2rem',
                      borderRadius: '20px',
                      border: '1px solid currentColor',
                      fontSize: '0.9rem',
                      opacity: 0.7,
                      fontWeight: 300,
                      cursor: 'default',
                      transition: 'background-color 0.3s, color 0.3s, opacity 0.3s'
                    }}
                    whileHover={{
                      backgroundColor: 'var(--text-color)',
                      color: 'var(--bg-color)',
                      opacity: 1
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
