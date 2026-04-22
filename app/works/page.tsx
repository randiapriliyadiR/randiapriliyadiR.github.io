import { works } from '@/data/works';
import WorksClient from '@/components/WorksClient';

export const metadata = {
  title: 'Works',
  description: 'Explore the portfolio of Randi Apriliyadi, featuring full-stack development and UI/UX projects.',
};

export default function WorksPage() {
  return <WorksClient projects={works} />;
}
