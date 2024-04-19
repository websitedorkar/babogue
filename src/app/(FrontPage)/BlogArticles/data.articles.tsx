import Thumb_1 from './img/thumb-1.png';
import Thumb_2 from './img/thumb-2.png';
import Thumb_3 from './img/thumb-3.png';

interface ArtilclesJSON {
  id: number;
  thumbnail?: any;
  title: string;
  date: string;
  description: string;
  className?: string;
  url: string;
}

const articlesdata: ArtilclesJSON[] = [
  {
    id: 1,
    thumbnail: Thumb_1,
    title: "Article title name",
    date: "MARCH 23, 2022",
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    url: '#',
  },
  {
    id: 2,
    thumbnail: Thumb_2,
    title: "Article title name",
    date: "MARCH 23, 2022",
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    url: '#',
  },
  {
    id: 3,
    thumbnail: Thumb_3,
    title: "Article title name",
    date: "MARCH 23, 2022",
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    url: '#',
  },
  {
    id: 4,
    thumbnail: Thumb_1,
    title: "Article title name",
    date: "MARCH 23, 2022",
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    url: '#',
  },
  {
    id: 5,
    thumbnail: Thumb_3,
    title: "Article title name",
    date: "MARCH 23, 2022",
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    url: '#',
  },
]

export { articlesdata };