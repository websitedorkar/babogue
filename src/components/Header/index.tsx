"use client";

import LOGO from './img/logo.svg';
import Image from 'next/image';
import AnnouncementBar from './AnnouncementBar';
import SearchForm from '@/forms/SearchForm';
import Rightbar from './Rightbar';
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <AnnouncementBar />
            <header className='header bg-white relative z-[20]'>
                <div className="container">
                    <div className="header__top py-3 border-b border-border">
                        <div className="grid grid-cols-3 items-center">
                            <div className="header__search">
                                <SearchForm />
                            </div>
                            <div className="header__logo text-center flex items-center justify-center">
                                <Link href={'/'} className='inline-block max-w-[40%]'> <Image src={LOGO} alt={"LOGO"} className='' /></Link>
                            </div>
                            <div className="header__rightbar text-end">
                                <Rightbar />
                            </div>
                        </div>
                    </div>
                    <div className="header__navbar">
                        <Navbar />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header