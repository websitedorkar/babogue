"use client";

import React, { useEffect, useState } from 'react';
import LOGO from './img/logo.svg';
import TopShape from './img/shape-top.svg';
import TopShapeMobile from './img/shape-top-mobile.svg';
import Image from 'next/image';
import Navbar from './Navbar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';

import { menus, rightbars } from "./data.header";
import { Button } from '../ui/button';
import Search from './Search';
import Toggler from './Toggler';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';
import { ChevronDown } from 'lucide-react';

const AnnouncementBar: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className='bg-primary text-white py-[10px] relative z-[1]'>
            <div className="container">
                {text && <div className="text-center text-[11px] md:text-sm lg:text-base">{text}</div>}
            </div>
        </div>
    )
}

interface RightBarActionsProps {
    list: any[];
}
const RightBarActions: React.FC<RightBarActionsProps> = ({ list }) => {
    return (
        <ul className="flex items-center justify-end gap-x-[10px]">
            {list && list.map((item) => {
                switch (item.type) {
                    case 'button':
                        return (
                            <li key={item.id} className='inline-flex'>
                                {item.btn_label && <Link href={item.btn_url}>
                                    <Button size={'sm'} variant={item.btn_style}>{item.btn_label}</Button>
                                </Link>}
                            </li>
                        )
                    case 'author':
                        return (
                            <li key={item.id} className='inline-flex'>
                                <div className="ms-2 inline-flex">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className='outline-none shadow-none'>
                                            <Image src={item.icon} alt={item.label ?? 'My Account'} className='w-[30px] min-w-[30px]' />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className='mt-4 relative overflow-visible p-4 min-w-[200px] border-none shadow-[0px_0px_24px_0px_rgba(0,0,0,0.08)] rounded-[8px] before:content-[""] before:absolute before:w-0 before:h-0 before:end-2 before:-top-[10px] before:border-b-[10px] before:border-b-white before:border-x-[10px] before:border-x-transparent before:border-solid' align='end'>
                                            {item.list && item.list.map((sub: any, i: number) => (
                                                <React.Fragment key={i}>
                                                    {sub.separator && <DropdownMenuSeparator className='bg-dark/10' />}
                                                    <DropdownMenuItem>
                                                        <DropdownMenuLabel>
                                                            <Link href={sub.slug}>{sub.title}</Link>
                                                        </DropdownMenuLabel>
                                                    </DropdownMenuItem>
                                                </React.Fragment>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </li>
                        );
                    case 'cart_icon':
                        return (
                            <li key={item.id} className='inline-flex me-5'>
                                <Link href={'#'} className="inline-block relative mx-3">
                                    <Image src={item.icon} className='w-[30px] min-w-[30px]' alt="Cart Icon" />
                                    {item.count && <span className="text-xs font-bold text-white bg-primary-light min-w-[21px] w-[21px] h-[21px] inline-flex items-center justify-center rounded-full absolute -top-[5px] -end-[8px]">{item.count}</span>}
                                </Link>
                            </li>
                        );
                    case 'icon_box':
                        return (
                            <li key={item.id} className='inline-flex items-center gap-3'>
                                <Link href={item.btn_url}>
                                    {item.label && <h6 className='text-xs leading-6'>{item.label}</h6>}
                                    {item.text && <h3 className='text-base font-bold leading-5 mb-0 text-nowrap'>{item.text}</h3>}
                                </Link>
                                <div className="inline-flex">
                                    <Image src={item.icon} className='w-[30px] min-w-[30px]' alt="Cart Icon" />
                                </div>
                            </li>
                        );
                    default:
                        return null; // Handle unknown block types
                }
            })}
        </ul >
    )
}

const Header = () => {
    const [isScrolled, setIsScrolled] = useState<string>('hidden');
    const controls = useAnimation();
    const [headerHeight, setHeaderHeight] = useState<number>(0); // State to store header height

    // Check if window is defined before accessing its properties
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const isMobile = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        let prevScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
    
        function handleScroll() {
            const currentScrollPos = typeof window !== 'undefined' ? window.pageYOffset : 0;
            if (currentScrollPos <= 600) {
                setIsScrolled('hidden');
            } else {
                if (prevScrollPos > currentScrollPos){
                    setIsScrolled('up'); 
                } else {
                    setIsScrolled('down'); 
                }
                // IF SCROLL TOP setIsScrolled will be true and if scroll down setIsScrolled will be false
            }
            prevScrollPos = currentScrollPos;
        }
    
        // Add event listener only if window is defined
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize); // Add resize event listener
            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize); // Remove resize event listener on component unmount
            }
        }
    }, []);

    useEffect(() => {
        // Calculate and set the height of the header
        const header = document.querySelector('.header');
        if (header) {
            setHeaderHeight(header.clientHeight);
        }
    }, []);

    // Function to handle window resize
    const handleResize = () => {
        const headerElement = document.querySelector('.header');
        if (headerElement) {
            setHeaderHeight(headerElement.clientHeight); // Recalculate and set the header height on resize
        }
    }
        
    return (
        <>
            {/* ANNOUNCEMENT BAR */}
            <AnnouncementBar text={'SUBSCRIBE TO OUR FREE 7 STEPS TO BETTER SLEEP GUIDE'} />
            {/* ANNOUNCEMENT BAR */}

            {/* START HEADER */}
            <div className="header__space relative" style={{
                paddingBottom: headerHeight + 'px',
            }}>
                <motion.header
                    className={`header absolute bg-white top-0 start-0 end-0 w-full z-10 ${isDesktop && isScrolled != 'hidden' ? 'header--sticky direction-' + isScrolled : ''}`}
                    initial={{ opacity: 1 }}
                    animate={controls}
                >
                    { isMobile ? 
                    <Image src={TopShapeMobile} alt='Shape' className='absolute top-[calc(100%-2px)] w-full start-0 end-0'/>
                    :
                    <Image src={TopShape} alt='Shape' className='absolute top-[calc(100%-2px)] w-full start-0 end-0'/>
                    }

                    <div className="container">
                        <div className="header__top py-2 md:py-3">
                            <div className="grid grid-cols-3 items-center">
                                <div className="header__search">
                                    <Search />
                                </div>
                                <div className="header__logo text-center flex items-center justify-center">
                                    <Link href={'/'} className='inline-block max-w-[90px] lg:max-w-[140px]'>
                                        <Image src={LOGO} alt={"LOGO"} className='' />
                                    </Link>
                                </div>
                                <div className="header__rightbar text-end">
                                    <div className="block lg:hidden"><Toggler /></div>
                                    <div className='hidden lg:block'>
                                        <RightBarActions list={rightbars} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={`header__nav ${isDesktop && isScrolled != 'hidden' ? 'header--sticky direction-' + isScrolled : ''}`}> */}
                    <div className={`header__nav`}>
                        <div className="container">
                            <div className="hidden lg:block border-t border-border header__navbar">
                                <nav className="header__nav py-2">
                                    <ul className="flex items-center">
                                    {menus.map((menuItem, index) => (
                                        menuItem.submenu ?
                                        <li key={menuItem.id ?? index} className="flex-grow has-submenu">
                                            <Link href={ menuItem.slug } className='NavigationMenuLink px-5 py-1 rounded-full font-semibold inline-flex items-center gap-x-1 hover:bg-primary hover:text-white transition-all duration-200 '>
                                                { menuItem.title } <ChevronDown className='mt-[4px] submenu--arrow transition-all ease-linear duration-150'/>
                                            </Link>
                                            <div className="submenu absolute pt-[2.7rem]">
                                                <ul className="relative bg-white rounded-2xl shadow-md grid gap-5 p-6 md:w-[400px] lg:w-[935px] lg:grid-cols-2 before:content-['] before:absolute before:-top-[10px] before:w-0 before:h-0 before:start-14 before:opacity-100 before:border-b-[10px] before:transition-all before:ease-in before:duration-50 before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid">
                                                    {menuItem.submenu.map((sub, i) => (
                                                        <li key={i}>
                                                            <Link
                                                                className="border border-border hover:border-primary transition-all duration-75 ease-linear p-4 rounded-[16px] grid gap-4 items-center grid-cols-[100px_1fr]"
                                                                href={menuItem.slug}
                                                            >
                                                                <div>
                                                                    {sub.thumbnail && <div className='w-[100px] h-[100px] min-[100px] border-[#C1DED5] rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                                                        <Image src={sub.thumbnail} className='inline-block' alt={sub.title ?? ' title'} />
                                                                    </div>}
                                                                </div>
                                                                <div>
                                                                    {sub.thumbnail && <h3 className="text-xl leading-5 font-bold text-dark mb-2">{sub.title}</h3>}
                                                                    {sub.description && <div className="text-xs leading-5">{sub.description}</div>}
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className='submenu-overlay bg-black bg-opacity-60 fixed start-0 top-0 w-full h-[200vh] z-[9] pointer-events-none'></div>
                                        </li>
                                        :
                                        <li key={menuItem.id ?? index} className="flex-grow">
                                            <Link href={ menuItem.slug } className='px-5 py-1 rounded-full font-semibold inline-flex items-center gap-x-1 hover:bg-primary hover:text-white transition-all duration-200 '>
                                                { menuItem.title }
                                            </Link>
                                        </li>
                                    ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </motion.header>
            </div>
            {/* END HEADER */}
        </>
    )
}

export default Header;