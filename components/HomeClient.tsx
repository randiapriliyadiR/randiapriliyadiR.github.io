'use client';
import Hero from '@/components/Hero';
import Motivation from '@/components/Motivation';
import Skills from '@/components/Skills';

export default function HomeClient() {
  return (
    <div style={{ padding: '0 var(--main-padding) var(--main-padding) var(--main-padding)', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: 'var(--section-gap)' }}>
      <Hero />
      <Motivation />
      <Skills />
    </div>
  );
}
