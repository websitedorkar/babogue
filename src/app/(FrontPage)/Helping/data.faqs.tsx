import Moon from './img/moon.svg';

interface FaqsJSON {
  id: number;
  icon?: any;
  text: string;
  className?: string | " ";
}

const faqsdata: FaqsJSON[] = [
  {
    id: 1,
    icon: Moon,
    text: 'Are you really struggling with your child’s sleep and don’t know how to fix it?',
  },
  {
    id: 2,
    icon: Moon,
    text: 'Is it taking you a long time to get them to go to sleep?',
  },
  {
    id: 3,
    icon: Moon,
    text: 'Do you have to put your baby in the car or buggy to get them to go to sleep?',
  },
  {
    id: 4,
    icon: Moon,
    text: 'Are you experiencing multiple wakes through the night?',
  },
  {
    id: 5,
    icon: Moon,
    text: 'Is your child resisting <br /> day time sleep?',
  },
  {
    id: 6,
    icon: Moon,
    text: 'Is your child feeding (breast or bottle) <br /> excessively through the night?',
  },
  {
    id: 7,
    icon: Moon,
    text: 'Would you like to move on from co-<br />sleeping but don’t know how?',
  },
  {
    id: 8,
    icon: Moon,
    text: 'Are you dealing with cat  <br /> naps during the day?',
  },
  {
    id: 9,
    icon: Moon,
    text: 'Is your child going to sleep but not <br /> staying asleep?',
  },
  {
    id: 10,
    icon: Moon,
    text: 'Are you repluging the soother <br /> multiple times at night?',
  },
  {
    id: 11,
    icon: Moon,
    text: 'Are you dealing with <br /> nightmares or night terrors?',
  },
  {
    id: 12,
    icon: Moon,
    text: 'Do you have to lie down with your <br /> child to get them to go to sleep?',
  }
]

export { faqsdata };