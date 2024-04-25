import AngleRight from './img/angle-right.svg';
import SlideBanner from './img/slide-banner.webp';
import SlideBannerMobile from './img/slide-banner-mobile.png';

interface SlidesJSON {
  id: number;
  caption?: string;
  heading: string;
  description?: string;
  background?: string;
  list?: { icon?: any; text: string }[];
  className?: string;
  button__label?: string;
  button__url?: string;
  bannerDesktop: any;
  bannerMobile: any;
}

const slidesdata: SlidesJSON[] = [
  {
    id: 1,
    caption: "Welcome to Babogue",
    heading: "Are you exhausted <br />from lack of sleep?",
    background: '#C1DED5',
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
    bannerDesktop: SlideBanner,
    bannerMobile: SlideBannerMobile,
  },
  {
    id: 2,
    caption: "Welcome to Babogue",
    heading: "Are you exhausted <br />from lack of sleep?",
    background: '#fff4eb',
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
    bannerDesktop: SlideBanner,
    bannerMobile: SlideBannerMobile,
  },
  {
    id: 3,
    caption: "Welcome to Babogue",
    heading: "Are you exhausted <br />from lack of sleep?",
    background: '#cdecff',
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
    bannerDesktop: SlideBanner,
    bannerMobile: SlideBannerMobile,
  },
]

export { slidesdata };