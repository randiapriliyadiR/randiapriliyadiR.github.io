export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  url: string;
  link?: string;
}

export const galleries: GalleryItem[] = [
  {
    id: 1,
    title: 'BROMO TRIP',
    description: 'The trip around Malang aims to test the application with real cases in collaboration with Golepak.',
    url: '/images/galleries/1.JPG',
  },
  {
    id: 2,
    title: 'BROMO TRIP',
    description: 'The trip around Malang aims to test the application with real cases in collaboration with Golepak.',
    url: '/images/galleries/2.jpg',
  },
  {
    id: 3,
    title: 'BINAR ACADEMY',
    description: 'Learn UI/UX in detail from research to reporting. Simulate collaboration with a Project Manager and understand Atomic Design.',
    url: '/images/galleries/binar.jpg',
  },
  {
    id: 4,
    title: 'REVOU',
    description: 'Learn Social Media Marketing, SEO, SEM, and Analytics in 2 weeks.',
    url: '/images/galleries/revou.jpg',
  },
];
