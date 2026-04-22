import { timelines } from '@/data/timelines';
import TimelinesClient from '@/components/TimelinesClient';

export const metadata = {
  title: 'Timelines',
  description: 'The professional and educational journey of Randi Apriliyadi.',
};

export default function TimelinesPage() {
  return <TimelinesClient careerData={timelines} />;
}
