import { galleries } from '@/data/galleries';
import GalleriesClient from '@/components/GalleriesClient';

export const metadata = {
  title: 'Galleries',
  description: 'A visual collection of trips and professional milestones of Randi Apriliyadi.',
};

export default function GalleriesPage() {
  return <GalleriesClient items={galleries} />;
}
