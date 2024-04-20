'use client';

import React from 'react';
import FeatureThumb from './img/features.png';
import Image from 'next/image';
import BabySleeping from './img/babySleeping.svg';
import Pinterest from './img/pinterest.svg';
import Tiktok from './img/tiktok.svg';
import MobileLogos from './img/mobile-logos.png';
import Link from 'next/link';

import { socials, blocks } from './data.footer';
import { NewsletterForm } from '@/forms/NewsletterForm';
import { useMediaQuery } from '@/hooks/use-media-query';
import Toolbar from './Toolbar';

const Footer = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <footer className='footer bg-primary text-white pt-[100px] md:pb-[25px]'>
            <div className="container space-y-6">
                <div className='xl:grid-cols-none xl:grid-flow-col grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-4'>
                    {
                        blocks && blocks.map((block) => {
                            switch (block.type) {
                                case 'newsletter':
                                    return (
                                        <div className='footer__block order-last lg:order-first col-span-2' key={block.id}>
                                            {block.heading && <h3 className='text-xl leading-6 font-quicksand font-bold mb-4 md:mb-7'>{block.heading}</h3>}
                                            <NewsletterForm description={block.description ?? ''} placeholder={block.placeholder ?? ''} />
                                        </div>
                                    )
                                case 'linklist':
                                    return (
                                        <div className='footer__block' key={block.id}>
                                            {/* Render Linklist block */}
                                            {block.heading && <h3 className='text-xl leading-6 font-quicksand font-bold mb-4 md:mb-7'>{block.heading}</h3>}
                                            <ul className='flex flex-col gap-2 md:gap-3'>
                                                {block.list.map((link, index) => (
                                                    <li key={index}>
                                                        <Link href={link.slug} className='font-semibold text-sm text-white transition-all duration-200 hover:text-opacity-75'>{link.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                case 'gallery':
                                    return (
                                        <div className='footer__block' key={block.id}>
                                            {/* Render Gallery block */}
                                            {block.heading && <h3 className='text-xl leading-6 font-quicksand font-bold mb-4 md:mb-7'>{block.heading}</h3>}
                                            <div className='flex flex-wrap gap-3'>
                                                {block.list.map((image, index) => (
                                                    <Image key={index} src={image.image} alt={`Gallery Image ${index}`} className='h-[90px] w-auto max-w-1/2' />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                default:
                                    return null; // Handle unknown block types
                            }
                        })
                    }
                </div>

                {/* Footer Social */}
                {socials &&
                    <div className="py-[60px]">
                        <ul className="flex items-center justify-center gap-x-2 md:gap-x-6 gap-y-2">
                            {socials.map((social) => (
                                <li key={social.id}>
                                    <Link href={social.slug} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={social.icon} alt={social.title} /></Link>
                                </li>
                            ))}
                        </ul>
                    </div>}
                {/* Footer Copyright */}
                <div className="grid gap-2 grid-cols-1 lg:grid-cols-[1fr_42px_1fr] lg:items-center pb-[30px]">
                    <div className="text-sm order-2 lg:order-first">Babogue © Copyright 2024</div>
                    <div className="text-center">
                        <Image src={BabySleeping} alt={''} className='lg:mx-auto' />
                    </div>
                    <div className="order-last">
                        <ul className="flex flex-wrap items-center lg:justify-end text-sm gap-x-3 lg:gap-x-5 gap-y-2 font-semibold">
                            <li>
                                <Link href={'#'}>Cookie</Link>
                            </li>
                            <li className="w-[2px] h-[20px] bg-white inline-block"></li>
                            <li>
                                <Link href={'#'}>Privacy Policy</Link>
                            </li>
                            <li className="w-[2px] h-[20px] bg-white inline-block"></li>
                            <li>
                                <Link href={'#'}>Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {!isMobile && 
                    <div className="p-4 bg-white rounded-[24px] flex items-center justify-center">
                        <Image src={FeatureThumb} alt={"Footer Features"} />
                    </div>
                    }
            </div>
            { isMobile && <div>
                <Toolbar />
                <div className='bg-white text-dark pt-4 pb-[100px]'>
                    <div className="container">
                        <Image src={MobileLogos} alt="mobile logos" className='w-full'/>
                    </div>
                </div>
            </div> 
            
            }
        </footer >
    )
}

export default Footer