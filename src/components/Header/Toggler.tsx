import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import ICON_DOWN from './img/icon-arrow-down.svg';
import { menus } from './data.header';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  title: string;
  slug: string;
  submenu?: {
    thumbnail?: any;
    title?: string;
    description?: string;
    slug: string;
  }[];
}

interface SubMenuItem {
  thumbnail?: any;
  title?: string;
  description?: string;
  slug: string;
}

const SubmenuItem: React.FC<{ submenuItem: SubMenuItem; index: number; list: any }> = ({ submenuItem, index, list }) => {
  return (
    <li>
      <Link href={submenuItem.slug} className={`text-sm py-[10px] flex items-center leading-5 font-normal font-roboto`}>
        {submenuItem.title}
      </Link>
    </li>
  );
};

const MenuLink: React.FC<{ menu: MenuItem; index: number; list: any }> = ({ menu, index, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleSubMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMenuLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (menu.submenu) {
      event.preventDefault(); // Prevent default link behavior if the menu has a submenu
      toggleSubMenu(); // Toggle the submenu visibility
    }
    event.stopPropagation(); // Stop propagation to prevent closing the menu
  };

  const isLastChild = index === list.length - 1;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <li>
      <a
        href={menu.slug}
        className={`text-base py-[12px] flex items-center leading-6 font-normal font-roboto ${!isLastChild && 'border-b border-border'}`}
        onClick={handleMenuLinkClick}
      >
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
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
          className="pl-4 bg-neutral-100 overflow-hidden"
          ref={menuRef}
        >
          {menu.submenu.map((submenuItem, idx) => (
            <SubmenuItem key={idx} index={idx} list={menu.submenu} submenuItem={submenuItem} />
          ))}
        </motion.ul>
      )}
    </li>
  );
};


const Path: React.FC<PathProps> = ({ variants, ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
    variants={variants}
  />
);
interface PathProps {
  d: string;
  variants: {
    closed: { d?: string; opacity?: number };
    open: { d?: string; opacity?: number };
  };
  transition?: {
    duration: number;
  };
  animate: string; // Add animate property
  initial: string; // Add initial property
}

interface ButtonToggleProps {
  toggle: () => void;
  isOpen: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>; // Add buttonRef to ButtonToggleProps
}
export const ButtonToggle: React.FC<ButtonToggleProps> = ({ toggle, isOpen, buttonRef }) => (
  <Button variant={'ghost'} size={'sm'} className='p-0 h-auto text-dark' onClick={toggle} ref={buttonRef}>
    <svg width="26" height="26" viewBox="0 0 23 23">
      <Path
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", opacity: 1 },
          open: { d: "M 3 16.5 L 17 2.5", opacity: 1 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      />
      <Path
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", opacity: 1 },
          open: { d: "M 3 2.5 L 17 16.346", opacity: 1 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
      />
    </svg>
  </Button>
);

const Toggler: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-end">
      <ButtonToggle toggle={() => toggleMenu()} isOpen={isOpen} buttonRef={buttonRef}/>

      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, y: 0 },
          closed: { opacity: 0, y: '-1rem' },
        }}
        className={`absolute bg-white rounded-[18px] end-0 top-[calc(100%+2rem)] text-start px-6 py-3 min-w-[270px] shadow-sm before:content-[''] before:absolute before:w-0 before:h-0 before:-top-[9px] before:end-6 before:border-b-[10px] before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid ${isOpen ? 'visible' : 'invisible'}`}
        ref={menuRef}
      >
        {menus && (
          <ul className='p-0'>
            {menus.map((menu, idx) => (
              <MenuLink key={menu.id} index={idx} list={menus} menu={menu}/>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Toggler;
