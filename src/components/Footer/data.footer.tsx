import Gallery_1 from './img/gallery-1.svg';
import Gallery_2 from './img/gallery-2.svg';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterestP, FaTiktok   } from "react-icons/fa";
import SOCIAL__FACEBOOK from './img/social--facebook.svg';
import SOCIAL__TWITTER from './img/social--twitter.svg';
import SOCIAL__LINKEDIN from './img/social--linkedin.svg';
import SOCIAL__INSTAGRAM from './img/social--instagram.svg';
import SOCIAL__YOUTUBE from './img/social--youtube.svg';
import SOCIAL__PINTEREST from './img/social--pinterest.svg';
import SOCIAL__TIKTOK from './img/social--tiktok.svg';


import BRAND__1 from './img/brand--1.jpg';
import BRAND__2 from './img/brand--2.jpg';
import BRAND__3 from './img/brand--3.jpg';
import BRAND__4 from './img/brand--4.jpg';

interface BaseBlock {
  id: number;
  type: string;
  heading?: string;
  className?: string;
}

interface NewsletterBlock extends BaseBlock {
  type: 'newsletter';
  description?: string;
  placeholder: string;
}

interface LinkListBlock extends BaseBlock {
  type: 'linklist';
  list: { name: string; slug: string }[];
}

interface GalleryBlock extends BaseBlock {
  type: 'gallery';
  list: { image: string }[];
}

type BlocksJSON = NewsletterBlock | LinkListBlock | GalleryBlock;

const blocks: BlocksJSON[] = [
  {
    id: 1,
    type: "newsletter",
    heading: "Join Newsletter",
    description: "Subscribe to be informed on offers, discounts and coupons straight to your inbox",
    placeholder: "your@email.com",
  },
  {
    id: 2,
    type: 'linklist',
    heading: "Babogue",
    list: [
      {
        name: "Home",
        slug: '/home',
      },
      {
        name: "Partnerships",
        slug: '/partnerships',
      },
      {
        name: "Reviews",
        slug: '/reviews',
      },
      {
        name: "About",
        slug: '/about',
      },
      {
        name: "Contact us",
        slug: '/contact-us',
      },
    ]
  },
  {
    id: 3,
    type: 'linklist',
    heading: "Sleep Series",
    list: [
      {
        name: "0-6 Months Sleep Series",
        slug: '/0-6-months',
      },
      {
        name: "6-18 Months Sleep Series",
        slug: '/6-18-months',
      },
      {
        name: "Toddler Sleep Series",
        slug: '/toddler-sleep-series',
      },
      {
        name: "Older Child Sleep Series",
        slug: '/older-child-sleep-series',
      },
      {
        name: "The Complete Sleep Series",
        slug: '/the-complete-sleep-series',
      },
    ]
  },
  {
    id: 4, // Unique ID for this block
    type: 'linklist',
    heading: "One to One",
    list: [
      {
        name: "Virtual Sleep Solution",
        slug: '/virtual-sleep-solution',
      },
      {
        name: "Simple Sleep Solution",
        slug: '/simple-sleep-solution',
      }
    ]
  },
  {
    id: 5, // Unique ID for this block
    type: 'gallery',
    heading: "Member & certified",
    list: [
      {
        image: Gallery_1 as string,
      },
      {
        image: Gallery_2 as string,
      },
    ],
  },
];


interface SocialsJSON {
  id: number;
  icon: any;
  title: string;
  slug: string;
  className?: string;
}

const socials: SocialsJSON[] = [
  {
    id: 1,
    icon: <FaFacebookF />,
    title: "Facebook",
    slug: '/facebook'
  },
  {
    id: 2,
    icon: <FaTwitter />,
    title: "Twitter",
    slug: '/twitter'
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    title: "Linkedin",
    slug: '/linkedin'
  },
  {
    id: 4,
    icon: <FaInstagram />,
    title: "Instagram",
    slug: '/instagram'
  },
  {
    id: 5,
    icon: <FaYoutube />,
    title: "Youtube",
    slug: '/youtube'
  },
  {
    id: 6,
    icon: <FaPinterestP  />,
    title: "Pinterest",
    slug: '/pinterest'
  },
  {
    id: 7,
    icon: <FaTiktok />,
    title: "Tiktok",
    slug: '/tiktok'
  },
]

interface BrandJSON {
  id: number;
  thumbnail: any;
  title?: string;
  className?: string;
}

const brands: BrandJSON[] = [
  {
    id: 1,
    thumbnail: BRAND__1,
    title: "Brand 1"
  },
  {
    id: 2,
    thumbnail: BRAND__2,
    title: "Brand 2"
  },
  {
    id: 3,
    thumbnail: BRAND__3,
    title: "Brand 3"
  },
  {
    id: 4,
    thumbnail: BRAND__4,
    title: "Brand 4"
  },
]

export { blocks, socials, brands };
