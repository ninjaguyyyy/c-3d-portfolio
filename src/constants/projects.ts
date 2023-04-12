import toki from 'assets/projects/toki.jpeg';
import vgaming from 'assets/projects/vgaming.png';

export const PROJECTS = [
  {
    name: 'VGAMING',
    description:
      'A web application which provides a game lobby system consisting of many online casino games like Poker, Big Small, ...',
    tags: [
      {
        name: 'cocos',
        color: 'blue-text-gradient'
      },
      {
        name: 'node.js',
        color: 'green-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient'
      }
    ],
    image: vgaming,
    source_code_link: 'https://gist.github.com/ninjaguyyyy/b4467110812d80309f308ac914b2b493'
  },
  {
    name: 'TOKIWAGI',
    description:
      'Web application that allow users to search, book and manage tickets to indoor or outdoor amusement parks. Besides, the website also help to manage the operation of tenants in Japan.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      },
      {
        name: 'postgres',
        color: 'green-text-gradient'
      }
    ],
    image: toki,
    source_code_link: 'https://gist.github.com/ninjaguyyyy/8778eafc5fae8a7a5de61813c9f4ee4c'
  }
];
