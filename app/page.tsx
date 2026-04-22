import { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the official portfolio of Randi Apriliyadi, a Full-Stack Developer specializing in high-performance web and mobile applications.',
};

export default function Home() {
  return <HomeClient />;
}
