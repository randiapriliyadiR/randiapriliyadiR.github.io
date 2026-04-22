export interface Project {
  id: number;
  title: string;
  slug: string;
  type: string;
  desc: string;
  img: string;
  link?: string;
}

export const works: Project[] = [
  {
    id: 1,
    title: 'INNOTIA HRM',
    slug: 'innotia-hrm',
    type: 'Company Project / Full Stack',
    desc: 'Human resource manager application for internal needs of Innotia Power Nusantara.',
    img: '/images/works/innotia-hrm.png',
  },
  {
    id: 2,
    title: 'FOODIVERDEALS',
    slug: 'foodiverdeals',
    type: 'Company Project / Full Stack',
    desc: 'Voucher platform for restaurants and cafes in Malaysians.',
    img: '/images/works/foodiver.png',
    link: 'https://foodiverdeals.com',
  },
];
