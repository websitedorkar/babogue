'use client';

import React from 'react';
import Image from 'next/image';
import BabySleeping from './img/babySleeping.svg';
import Link from 'next/link';

import { socials, blocks, brands } from './data.footer';
import { NewsletterForm } from '@/forms/NewsletterForm';
import { useMediaQuery } from '@/hooks/use-media-query';
import Toolbar from './Toolbar';

const Footer = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            <footer className='md:sticky md:bottom-0 z-1 footer bg-primary px-[5px] md:px-0 text-white pt-[35px] md:pt-[70px] pb-[25px]'>
                <div className="container">
                    <div className='xl:grid-cols-none xl:grid-flow-col grid grid-cols-[5fr_6fr] lg:grid-cols-3 gap-y-10 gap-x-2 md:gap-x-8'>
                        {
                            blocks && blocks.map((block) => {
                                switch (block.type) {
                                    case 'newsletter':
                                        return (
                                            <div className='footer__block order-last lg:order-first col-span-2' key={block.id}>
                                                {block.heading && <h3 className='text-sm lg:text-xl leading-6 font-quicksand font-bold mb-4 md:mb-6'>{block.heading}</h3>}
                                                <NewsletterForm description={block.description ?? ''} placeholder={block.placeholder ?? ''} />
                                            </div>
                                        )
                                    case 'linklist':
                                        return (
                                            <div className='footer__block' key={block.id}>
                                                {/* Render Linklist block */}
                                                {block.heading && <h3 className='text-sm lg:text-xl leading-6 font-quicksand font-bold mb-4 md:mb-6'>{block.heading}</h3>}
                                                <ul className='flex flex-col gap-0 md:gap-3'>
                                                    {block.list.map((link, index) => (
                                                        <li key={index}>
                                                            <Link href={link.slug} className='font-semibold text-xxs md:text-sm leading-5 md:leading-6 text-white transition-all duration-200 hover:text-opacity-75'>{link.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    case 'gallery':
                                        return (
                                            <div className='footer__block' key={block.id}>
                                                {/* Render Gallery block */}
                                                {block.heading && <h3 className='text-sm lg:text-xl leading-6 font-quicksand font-bold mb-4 md:mb-6'>{block.heading}</h3>}
                                                <div className='flex flex-wrap gap-3 md:gap-x-6'>
                                                    {block.list.map((image, index) => (
                                                        <Image key={index} src={image.image} alt={`Gallery Image ${index}`} className='h-[65px] md:h-[100px] w-auto max-w-1/2' />
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
                        <div className="py-[40px] xl:py-[60px]">
                            <ul className="flex items-center justify-center gap-x-3 gap-y-2">
                                {socials.map((social) => (
                                    <li key={social.id} className='inline-flex'>
                                        <Link href={social.slug} className='inline-block transition-all duration-100 ease-linear hover:scale-110'>
                                            <span className="inline-flex items-center justify-center border border-white border-opacity-25 rounded-full min-w-[35px] w-[35px] h-[35px] md:min-w-[38px] md:w-[38px] md:h-[38px]">{social.icon}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>}
                    {/* Footer Copyright */}
                    <div className="grid gap-2 grid-cols-1 lg:grid-cols-[1fr_42px_1fr] lg:items-center">
                        <div className="text-xxs md:text-sm order-2 lg:order-first">Babogue © Copyright 2024</div>
                        <div className="text-center">
                            <Image src={BabySleeping} alt={''} className='lg:mx-auto w-[35px] md:w-[41px]' />
                        </div>
                        <div className="order-last">
                            <ul className="flex flex-wrap items-center lg:justify-end text-xxs md:text-sm gap-x-3 lg:gap-x-4 gap-y-2 font-semibold">
                                <li>
                                    <Link href={'#'}>Cookie</Link>
                                </li>
                                <li className="w-[2px] h-[16px] bg-white inline-block"></li>
                                <li>
                                    <Link href={'#'}>Privacy Policy</Link>
                                </li>
                                <li className="w-[2px] h-[16px] bg-white inline-block"></li>
                                <li>
                                    <Link href={'#'}>Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                { isMobile && <Toolbar />
                }
            </footer >
                
            {/* Brands */}
            <div className='bg-white text-dark pt-[10px] pb-[90px] md:pb-[10px]'>
                <div className="container">
                    {brands && 
                        <div className='flex justify-evenly flex-wrap'>
                            {brands.map((brand => (
                                <div className='w-[50%] md:w-auto flex justify-center items-center' key={brand.id}>
                                    <Image src={brand.thumbnail} className='h-[85px] w-auto' alt={brand.title ?? ''}/>
                                </div>
                            )))}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Footer