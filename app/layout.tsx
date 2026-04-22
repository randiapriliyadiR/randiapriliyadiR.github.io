import type { Metadata } from 'next';
import { Inter, Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';
import RippleCursor from '@/components/RippleCursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  metadataBase: new URL('https://randiapriliyadi.github.io'),
  title: {
    default: 'Randi Apriliyadi | Full-Stack Developer',
    template: '%s | Randi Apriliyadi'
  },
  description: 'Randi Apriliyadi is a Full-Stack Developer specializing in high-performance web and mobile applications using Next.js, Flutter, and modern architectures.',
  keywords: ['Randi Apriliyadi', 'Full-Stack Developer', 'Next.js', 'Flutter', 'Web Development', 'Portfolio', 'Software Engineer', 'Indonesia'],
  authors: [{ name: 'Randi Apriliyadi' }],
  creator: 'Randi Apriliyadi',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://randiapriliyadi.github.io',
    siteName: 'Randi Apriliyadi Portfolio',
    title: 'Randi Apriliyadi | Full-Stack Developer',
    description: 'Exploring the intersection of design and technology through full-stack development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Randi Apriliyadi Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Randi Apriliyadi | Full-Stack Developer',
    description: 'Exploring the intersection of design and technology through full-stack development.',
    images: ['/og-image.png'],
  },
};

import LayoutContent from '@/components/LayoutContent';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5X84F8B3F"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5X84F8B3F');
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-jakarta), sans-serif' }}>
        <RippleCursor />
        <ThemeToggle />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
