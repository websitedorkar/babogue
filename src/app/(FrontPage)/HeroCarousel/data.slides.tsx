import SlideBanner from './img/slide-banner.png';
import AngleRight from './img/angle-right.svg';

interface SlidesJSON {
  id: number;
  caption?: string;
  heading: string;
  description?: string;
  list?: { icon?: any; text: string }[];
  className?: string;
  button__label?: string;
  button__url?: string;
  banner: any;
}

const slidesdata: SlidesJSON[] = [
  {
    id: 1,
    caption: "Welcome to Babogue",
    heading: "Are you exhausted from lack of sleep?",
    list: [
      {
        icon: AngleRight,
        text: 'We offer sleep courses from Newborn to 10 Years that can help you establish a consistent routine.',
      },
      {
        icon: AngleRight,
        text: 'Conquer nighttime sleep, solve early rising, land naps, and deal with regressions.',
      }
    ],
    button__label: 'Our Courses',
    button__url: '#',
    banner: SlideBanner,
  },
  {
    id: 2,
    caption: "Welcome to Babogue",
    heading: "Are you exhausted from lack of sleep?",
    list: [
      {
        icon: AngleRight,
        text: 'We offer sleep courses from Newborn to 10 Years that can help you establish a consistent routine.',
      },
      {
        icon: AngleRight,
        text: 'Conquer nighttime sleep, solve early rising, land naps, and deal with regressions.',
      }
    ],
    button__label: 'Our Courses',
    button__url: '#',
    banner: SlideBanner,
  },
  {
    id: 3,
    caption: "Welcome to Babogue",
    heading: "Are you exhausted from lack of sleep?",
    list: [
      {
        icon: AngleRight,
        text: 'We offer sleep courses from Newborn to 10 Years that can help you establish a consistent routine.',
      },
      {
        icon: AngleRight,
        text: 'Conquer nighttime sleep, solve early rising, land naps, and deal with regressions.',
      }
    ],
    button__label: 'Our Courses',
    button__url: '#',
    banner: SlideBanner,
  },
]

export { slidesdata };