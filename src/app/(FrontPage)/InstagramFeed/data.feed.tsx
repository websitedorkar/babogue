import Image__1 from './img/1.png';
import Image__2 from './img/2.png';
import Image__3 from './img/3.png';
import Image__4 from './img/4.png';

interface FeedJSON {
  id: number;
  title: string;
  thumbnail: any;
  className?: string;
}

const feed: FeedJSON[] = [
  {
    id: 1,
    title: "Instagram feed",
    thumbnail: Image__1,
  },
  {
    id: 2,
    title: "Instagram feed",
    thumbnail: Image__2,
  },
  {
    id: 3,
    title: "Instagram feed",
    thumbnail: Image__3,
  },
  {
    id: 4,
    title: "Instagram feed",
    thumbnail: Image__4,
  }
];

export { feed };
