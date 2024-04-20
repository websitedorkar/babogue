import React, { useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import ICON_BARS from './img/icon-bars.svg';
import ICON_DOWN from './img/icon-arrow-down.svg';
import { menus } from './data.header';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuItem {
  id: string;
  title: string;
  slug: string;
  submenu?: MenuItem[];
}

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 },
};

const SubmenuItem: React.FC<{ submenuItem: MenuItem }> = ({ submenuItem }) => (
  <li>
    <Link href={submenuItem.slug} className="text-base py-[13px] flex items-center leading-6 font-normal font-roboto">
      {submenuItem.title}
    </Link>
  </li>
);

const MenuLink: React.FC<{ menu: MenuItem }> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (menu.submenu) {
      event.preventDefault(); // Prevent default link behavior if the menu has a submenu
      toggleSubMenu(); // Toggle the submenu visibility
    }
  };

  return (
    <li>
      <a href={menu.slug} className={`text-base py-[13px] flex items-center leading-6 font-normal font-roboto`} onClick={handleMenuLinkClick}>
        {menu.title}
        {menu.submenu && (
          <span className="ms-auto" onClick={toggleSubMenu}>
            <Image src={ICON_DOWN} alt="ICON DOWN" />
          </span>
        )}
      </a>
      {menu.submenu && (
        <motion.ul
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className="pl-4 overflow-hidden"
        >
          {menu.submenu.map((submenuItem, index) => (
            <SubmenuItem key={submenuItem.id} submenuItem={submenuItem} />
          ))}
        </motion.ul>
      )}
    </li>
  );
};

const Toggler: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <Button variant={'ghost'} className="p-0 h-auto" onClick={toggleMenu}>
        <Image src={ICON_BARS} alt={'LOGO'} className="" />
      </Button>

      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className={`absolute bg-white rounded-[18px] right-3 top-[calc(100%+3rem)] text-start px-6 py-3 min-w-[270px] shadow-sm before:content-[''] before:absolute before:w-0 before:h-0 before:-top-[9px] before:end-6 before:border-b-[10px] before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid ${isOpen ? 'visible' : 'invisible'}`}
      >
        {menus && (
          <ul>
            {menus.map((menu, index) => (
              <MenuLink key={String(menu.id)} menu={menu} />
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Toggler;
