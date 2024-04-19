import Baby_1 from './img/baby-1.png';
import Baby_2 from './img/baby-2.png';
import Baby_3 from './img/baby-3.png';
import Baby_4 from './img/baby-4.png';
import Baby_5 from './img/baby-5.png';

interface MenuJSON {
  id: number;
  title: string;
  slug: string;
  submenu?: {
    thumbnail?: any;
    title?: string;
    description?: string;
    slug: string
  }[];
  className?: string;
}

const menus: MenuJSON[] = [
  {
    id: 1,
    title: "Courses",
    slug: "courses",
    submenu: [
      {
        thumbnail: Baby_1,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_2,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_3,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_4,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_5,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }
    ]
  }, {
    id: 2,
    title: "One To One",
    slug: "one-to-one",
    submenu: [
      {
        thumbnail: Baby_1,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_2,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_3,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_4,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }, {
        thumbnail: Baby_5,
        title: "0-6 Months",
        description: "The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.",
        slug: '/0-6-months',
      }
    ]
  },
  {
    id: 3,
    title: "Partnerships",
    slug: "partnerships",
  },
  {
    id: 4,
    title: "Reviews",
    slug: "reviews",
  },
  {
    id: 5,
    title: "Blog",
    slug: "blog",
  },
  {
    id: 6,
    title: "About Us",
    slug: "about-us",
  },
  {
    id: 7,
    title: "Contact Us",
    slug: "contact-us",
  },
];

export { menus };
