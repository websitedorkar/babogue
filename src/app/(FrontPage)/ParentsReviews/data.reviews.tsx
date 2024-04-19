import Author from './img/author.png';

interface ReviewsJSON {
  id: number;
  thumbnail?: any;
  name: string;
  date: string;
  description: string;
  className?: string;
  course: string;
  url: string;
  rating?: number;
}

const reviewsdata: ReviewsJSON[] = [
  {
    id: 1,
    thumbnail: Author,
    name: "Mia Anderson",
    date: "November 13, 2023",
    description: 'Firstly, I can\'t recommend Erica highly enough. From initial contact right through she has been very professional, friendly and approachable. We contacted Erica after a very disruptive year. We have 2 children aged 18 months and nearly 4 years.',
    rating: 5,
    url: '#',
    course: '6-18 MONTHS',
  },
  {
    id: 2,
    thumbnail: Author,
    name: "Mia Anderson",
    date: "November 13, 2023",
    description: 'Firstly, I can\'t recommend Erica highly enough. From initial contact right through she has been very professional, friendly and approachable. We contacted Erica after a very disruptive year. We have 2 children aged 18 months and nearly 4 years.',
    rating: 5,
    url: '#',
    course: '6-18 MONTHS',
  },
  {
    id: 3,
    thumbnail: Author,
    name: "Mia Anderson",
    date: "November 13, 2023",
    description: 'Firstly, I can\'t recommend Erica highly enough. From initial contact right through she has been very professional, friendly and approachable. We contacted Erica after a very disruptive year. We have 2 children aged 18 months and nearly 4 years.',
    rating: 5,
    url: '#',
    course: '6-18 MONTHS',
  },
  {
    id: 4,
    thumbnail: Author,
    name: "Mia Anderson",
    date: "November 13, 2023",
    description: 'Firstly, I can\'t recommend Erica highly enough. From initial contact right through she has been very professional, friendly and approachable. We contacted Erica after a very disruptive year. We have 2 children aged 18 months and nearly 4 years.',
    rating: 5,
    url: '#',
    course: '6-18 MONTHS',
  },
  {
    id: 5,
    thumbnail: Author,
    name: "Mia Anderson",
    date: "November 13, 2023",
    description: 'Firstly, I can\'t recommend Erica highly enough. From initial contact right through she has been very professional, friendly and approachable. We contacted Erica after a very disruptive year. We have 2 children aged 18 months and nearly 4 years.',
    rating: 5,
    url: '#',
    course: '6-18 MONTHS',
  },
  {
    id: 6,
    thumbnail: Author,
    name: "Mia Anderson",
    date: "November 13, 2023",
    description: 'Firstly, I can\'t recommend Erica highly enough. From initial contact right through she has been very professional, friendly and approachable. We contacted Erica after a very disruptive year. We have 2 children aged 18 months and nearly 4 years.',
    rating: 5,
    url: '#',
    course: '6-18 MONTHS',
  },
]

export { reviewsdata };