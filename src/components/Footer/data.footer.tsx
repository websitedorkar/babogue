import Gallery_1 from './img/gallery-1.svg';
import Gallery_2 from './img/gallery-2.svg';

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

export { blocks };
