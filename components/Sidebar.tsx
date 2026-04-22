'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiLinkedin, FiInstagram, FiGithub, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const hasAnimated = useRef(false);
  const shouldAnimate = !hasAnimated.current;
  if (shouldAnimate) hasAnimated.current = true;

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'WORKS', path: '/works' },
    { name: 'TIMELINES', path: '/timelines' },
    { name: 'GALLERIES', path: '/galleries' },
  ];

  const socials = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/randiapriliyadi/' },
    { icon: FiInstagram, href: 'https://www.instagram.com/randiapriliyadi/' },
    { icon: FiGithub, href: 'https://github.com/randiapriliyadiR' },
    { icon: FiMail, href: 'mailto:randiapriliyadi@gmail.com' },
  ];

  return (
    <aside style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '10vh' }}>
        {links.map((link, i) => (
          <motion.div
            key={link.name}
            initial={shouldAnimate ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              href={link.path}
              className={`navbar-link ${pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {socials.map((social, i) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              style={{ color: 'inherit', opacity: 0.6, transition: 'opacity 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            >
              <social.icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: '2rem' }}
        >
          © Randi Apriliyadi
        </motion.p>
      </div>
    </aside>
  );
}
