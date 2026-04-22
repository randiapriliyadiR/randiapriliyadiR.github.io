export interface TimelineItem {
  id: number;
  year: string;
  role: string;
  company: string;
  desc: string;
}

export const timelines: TimelineItem[] = [
  {
    id: 1,
    year: '2023 - present',
    role: 'Full-Stack Developer',
    company: 'Innotia Power Nusantara',
    desc: 'Developing websites and mobile apps for international clients. Collaborating closely with Malaysian programmers to meet client requirements.',
  },
  {
    id: 2,
    year: '2022 - 2023',
    role: 'UI/UX Research & Design Wave 30',
    company: 'Binar Academy',
    desc: 'Learn UI/UX in detail from research to reporting. Simulate collaboration with a Project Manager and understand Atomic Design.',
  },
  {
    id: 3,
    year: '2022 - 2023',
    role: 'Digital Marketing in 2 Weeks',
    company: 'RevoU',
    desc: 'Learn Social Media Marketing, SEO, SEM, and Analytics.',
  },
  {
    id: 4,
    year: '2022 - 2023',
    role: 'Bachelor of Informatics Engineering',
    company: 'Global Institute of Technology and Business',
    desc: 'Focused on Software Engineering and Artificial Intelligence.',
  },
  {
    id: 5,
    year: '2021 - PRESENT',
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    desc: 'Specializing in building high-performance web and mobile applications using Next.js, Flutter, and modern backend architectures. Focus on delivering premium user experiences and scalable solutions.',
  },
  {
    id: 6,
    year: '2019 - 2022',
    role: 'Diploma of Informatics Engineering',
    company: 'LP3I Jakarta Polytechnic',
    desc: 'Focused on Software Engineering and served as a teaching assistant for Software Engineering.',
  },
];
