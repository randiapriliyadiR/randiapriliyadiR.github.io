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
    title: 'RAVEN WALLET',
    slug: 'raven-wallet',
    type: 'Personal Project / Full Stack',
    desc: 'Personal finance app that separates lifestyle spending from trading activity — with Net Worth, Net Savings, and Trading P&L, encrypted server storage, and on-device AI.',
    img: '/images/works/raven-wallet.png',
    link: 'https://raven-wallet.randiapriliyadi.workers.dev/',
  },
  {
    id: 2,
    title: 'INNOTIA HRM',
    slug: 'innotia-hrm',
    type: 'Company Project / Full Stack',
    desc: 'Human resource manager application for internal needs of Innotia Power Nusantara.',
    img: '/images/works/innotia-hrm.png',
  },
  {
    id: 3,
    title: 'FOODIVERDEALS',
    slug: 'foodiverdeals',
    type: 'Company Project / Full Stack',
    desc: 'Voucher platform for restaurants and cafes in Malaysians.',
    img: '/images/works/foodiver.png',
    link: 'https://foodiverdeals.com',
  },
];
