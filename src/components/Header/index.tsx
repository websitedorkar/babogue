"use client";

import React, { useEffect, useState } from 'react';
import LOGO from './img/logo.svg';
import TopShape from './img/shape-top.svg';
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

import { rightbars } from "./data.header";
import { Button } from '../ui/button';
import Search from './Search';
import Toggler from './Toggler';
import { motion, useAnimation } from 'framer-motion';

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
                            <li key={item.id} className='inline-flex'>
                                <Link href={'#'} className="inline-block relative mx-3">
                                    <Image src={item.icon} className='w-[30px] min-w-[30px]' alt="Cart Icon" />
                                    {item.count && <span className="text-xs font-bold text-white bg-primary-light min-w-[21px] w-[21px] h-[21px] inline-flex items-center justify-center rounded-full absolute -top-[5px] -end-[8px]">{item.count}</span>}
                                </Link>
                            </li>
                        );
                    case 'icon_box':
                        return (
                            <li key={item.id} className='inline-flex items-center gap-3 ps-3'>
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

    // Check if window is defined before accessing its properties
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 992;
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 992;

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
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
        
    return (
        <>
            {/* ANNOUNCEMENT BAR */}
            <AnnouncementBar text={'SUBSCRIBE TO OUR FREE 7 STEPS TO BETTER SLEEP GUIDE'} />
            {/* ANNOUNCEMENT BAR */}

            {/* START HEADER */}
            <motion.header
                className={`header bg-white relative z-[20] ${isDesktop && isScrolled != 'hidden' ? 'header--sticky direction-' + isScrolled : ''}`}
                initial={{ opacity: 1 }}
                animate={controls}
            >
                <Image src={TopShape} alt='Shape' className='absolute top-[calc(100%-2px)] w-full start-0 end-0'/>

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
                        <div className="hidden lg:block border-t border-border header__navbar"><Navbar /></div>
                    </div>
                </div>
            </motion.header>
            {/* END HEADER */}
        </>
    )
}

export default Header