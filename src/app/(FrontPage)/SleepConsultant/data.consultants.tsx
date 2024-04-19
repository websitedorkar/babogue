import Icon_1 from './img/icon-1.svg';
import Icon_2 from './img/icon-2.svg';
import Icon_3 from './img/icon-3.svg';
import Icon_4 from './img/icon-4.svg';

interface ConsultantsJSON {
  id: number;
  icon?: any;
  text: string;
  className?: string;
}

const consultantsdata: ConsultantsJSON[] = [
  {
    id: 1,
    icon: Icon_1,
    text: 'Erica Hargaden is a Certified Child Sleep Consultant, mum of 3, and member of the International Association of Child Sleep Consultants.',
  },
  {
    id: 2,
    icon: Icon_2,
    text: 'Erica really struggled with her first childs sleep and understands what today\'s parents go through when their little ones arrive.',
  },
  {
    id: 3,
    icon: Icon_3,
    text: 'Since Babogue was established in 2017, Certified Child Sleep Consultant, Erica Hargaden has worked with families all over the world.',
  },
  {
    id: 4,
    icon: Icon_4,
    text: 'With each and every family Erica is getting to fulfill her mission to support parents with their childrens sleep.',
  },
]

export { consultantsdata };