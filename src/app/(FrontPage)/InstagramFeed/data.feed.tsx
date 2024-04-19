import Image__1 from './img/1.png';
import Image__2 from './img/2.png';
import Image__3 from './img/3.png';
import Image__4 from './img/4.png';

interface FeedJSON {
  id: number;
  thumbnail?: any;
  heading: string;
  className?: string;
}

const feeddata: FeedJSON[] = [
  {
    id: 1,
    thumbnail: Image__1,
    heading: 'instagram feed',
  },
  {
    id: 2,
    thumbnail: Image__2,
    heading: 'instagram feed',
  },
  {
    id: 3,
    thumbnail: Image__3,
    heading: 'instagram feed',
  },
  {
    id: 4,
    thumbnail: Image__4,
    heading: 'instagram feed',
  },
]

export { feeddata };