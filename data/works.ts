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
    title: 'FRANCHISE EXPLORER',
    slug: 'franchise-explorer',
    type: 'Personal Project / Frontend',
    desc: 'Cinematic media explorer for large entertainment franchises — browse films, series, and games in grid, timeline, and stats views with search, filters, and sorting.',
    img: '/images/works/franchise-explorer.jpg',
    link: 'https://randiapriliyadir.github.io/franchise',
  },
  {
    id: 2,
    title: 'RAVEN WALLET',
    slug: 'raven-wallet',
    type: 'Personal Project / Full Stack',
    desc: 'Personal finance app that separates lifestyle spending from trading activity — with Net Worth, Net Savings, and Trading P&L, encrypted server storage, and on-device AI.',
    img: '/images/works/raven-wallet.png',
    link: 'https://raven-wallet.randiapriliyadi.workers.dev/',
  },
  {
    id: 3,
    title: 'INNOTIA HRM',
    slug: 'innotia-hrm',
    type: 'Company Project / Full Stack',
    desc: 'Human resource manager application for internal needs of Innotia Power Nusantara.',
    img: '/images/works/innotia-hrm.png',
  },
  {
    id: 4,
    title: 'FOODIVERDEALS',
    slug: 'foodiverdeals',
    type: 'Company Project / Full Stack',
    desc: 'Voucher platform for restaurants and cafes in Malaysians.',
    img: '/images/works/foodiver.png',
    link: 'https://foodiverdeals.com',
  },
];
