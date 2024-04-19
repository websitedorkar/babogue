import ICON_CART from './img/icon-cart.svg';
import ICON_HEADPHONE from './img/icon-headphone.svg';
import ICON_USER from './img/icon-user.svg';

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

interface ButtonJSON {
  id: number;
  type: "button";
  btn_label: string;
  btn_url: string;
  btn_style: string;
}

interface AuthorJSON {
  id: number;
  type: "author";
  icon: any;
  label: string;
  list?: {
    title: string;
    slug: string
    separator?: boolean
  }[];
}

interface CartIconJSON {
  id: number;
  type: "cart_icon";
  icon: any;
  label: string;
  count: number;
  btn_url: string;
}

interface IconBoxJSON {
  id: number;
  type: "icon_box";
  icon: any;
  label: string;
  text: string;
  btn_url: string;
}

type RightbarJSON = ButtonJSON | CartIconJSON | IconBoxJSON | AuthorJSON;

const rightbars: RightbarJSON[] = [
  {
    id: 1,
    type: 'button',
    btn_label: 'Login',
    btn_url: '/login',
    btn_style: 'outline',
  },
  // {
  //   id: 2,
  //   type: 'button',
  //   btn_label: 'Register',
  //   btn_url: '/register',
  //   btn_style: 'default',
  // },
  // {
  //   id: 3,
  //   type: 'author',
  //   icon: ICON_USER,
  //   label: 'My Account',
  //   list: [
  //     { title: 'My Courses', slug: 'my-courses', },
  //     { title: 'Profile', slug: 'profile', },
  //     { title: 'Support', slug: 'support', },
  //     { title: 'Settings', slug: 'settings', },
  //     { title: 'Logout', slug: 'logout', separator: true, },
  //   ],
  // },
  {
    id: 4,
    type: 'cart_icon',
    icon: ICON_CART,
    label: 'My Cart',
    count: 2,
    btn_url: '/my-cart',
  },
  {
    id: 5,
    type: 'icon_box',
    icon: ICON_HEADPHONE,
    label: 'Call Us',
    text: '+353 877800164',
    btn_url: 'mailto:353877800164',
  }
]

export { menus, rightbars };
