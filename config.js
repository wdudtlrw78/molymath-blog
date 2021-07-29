import getContactHref from './constansts/Contact';

export const SiteConfig = {
  url: 'https://molymath.kr',
  pathPrefix: '/',
  title: 'molymath',
  subtitle: 'molymath',
  copyright: 'molymath © All rights reserved.',
  disqusShortname: '',
  googleAnalyticsId: 'G-1DJ35BXMH5',
  useKatex: 'false',
  menu: [
    {
      label: 'Posts',
      path: '/',
    },
    {
      label: 'JavaScript',
      path: '/category/JavaScript',
    },
    {
      label: 'NodeJs',
      path: '/category/NodeJS',
    },
    {
      label: 'MongoDB',
      path: '/category/MongoDB',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Portfolio',
      path: '/portfolio',
    },
    {
      label: 'Books',
      path: '/books',
    },
  ],
  author: {
    name: 'molymath',
    photo: '/molymath.png',
    bio: 'frontend engineer',
    contacts: {
      email: 'wdudtlrw78@gmail.com',
      facebook: '',
      telegram: '',
      twitter: '',
      github: getContactHref('github', 'molymath'),
      rss: '',
      linkedin: '',
      instagram: '',
      line: '',
      gitlab: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    },
  },
};
