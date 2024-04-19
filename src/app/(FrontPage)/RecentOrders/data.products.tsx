import Banner_1 from './img/baby-1.png';
import Banner_2 from './img/baby-2.png';
import Banner_3 from './img/baby-3.png';
import Banner_4 from './img/baby-4.png';
import Banner_5 from './img/baby-5.png';

interface ProductsJSON {
  id: number;
  banner?: any;
  name: string;
  description: string;
  className?: string;
  price_from: number;
  url: string;
  purchased?: boolean;
}

const productsdata: ProductsJSON[] = [
  {
    id: 1,
    banner: Banner_1,
    name: "0-6 Months",
    description: 'The 0-6 Months Sleep Series gives you 6 months access to our Newborn and 4-6 Months Sleep Series courses.',
    price_from: 399,
    url: '#',
    purchased: true,
  },
  {
    id: 2,
    banner: Banner_2,
    name: "6-18 Months",
    description: 'The 6-18 Months Sleep Series gives you 12 months access to our 6-9 Months and 9-18 Months Sleep Series course',
    price_from: 399,
    url: '#',
    purchased: true,
  },
  {
    id: 3,
    banner: Banner_3,
    name: "Toddler",
    description: 'The Toddler Years Sleep Series will bring you through what to expect from your little ones sleep during this stage.',
    price_from: 399,
    url: '#',
  },
  {
    id: 4,
    banner: Banner_4,
    name: "Older Child",
    description: 'There is so much to learn about your child & their sleep as they grow. Sleeping well at night is essential for school.',
    price_from: 399,
    url: '#',
  },
  {
    id: 5,
    banner: Banner_5,
    name: "The Complete",
    description: 'The Complete Series gives you unlimited access to our full range of sleep courses from Newborn right through to 10 years',
    price_from: 399,
    url: '#',
  },
]

export { productsdata };