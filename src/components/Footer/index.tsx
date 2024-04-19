import React from 'react';
import FeatureThumb from './img/features.png';
import Image from 'next/image';
import BabySleeping from './img/babySleeping.svg';
import Facebook from './img/facebook.svg';
import Twitter from './img/twitter.svg';
import Linkedin from './img/linkedin.svg';
import Instagram from './img/instagram.svg';
import Youtube from './img/youtube.svg';
import Pinterest from './img/pinterest.svg';
import Tiktok from './img/tiktok.svg';
import Link from 'next/link';

import { blocks } from './data.footer';
import { NewsletterForm } from '@/forms/NewsletterForm';

const Footer = () => {
    return (
        <footer className='footer bg-primary text-white pt-[100px] pb-[25px]'>
            <div className="container space-y-6">
                <div className='grid-cols-none grid-flow-col grid'>
                    {
                        blocks && blocks.map((block) => {
                            switch (block.type) {
                                case 'newsletter':
                                    return (
                                        <div className='footer__block' key={block.id}>
                                            {block.heading && <h3 className='text-3xl leading-6 font-quicksand font-bold mb-7'>{block.heading}</h3>}
                                            <NewsletterForm description={block.description ?? ''} placeholder={block.placeholder ?? ''} />
                                        </div>
                                    )
                                case 'linklist':
                                    return (
                                        <div className='footer__block' key={block.id}>
                                            {/* Render Linklist block */}
                                            {block.heading && <h3 className='text-3xl leading-6 font-quicksand font-bold mb-7'>{block.heading}</h3>}
                                            <ul className='flex flex-col gap-4'>
                                                {block.list.map((link, index) => (
                                                    <li key={index}>
                                                        <Link href={link.slug} className='font-semibold text-white transition-all duration-200 hover:text-opacity-75'>{link.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                case 'gallery':
                                    return (
                                        <div className='footer__block' key={block.id}>
                                            {/* Render Gallery block */}
                                            {block.heading && <h3 className='text-3xl leading-6 font-quicksand font-bold mb-7'>{block.heading}</h3>}
                                            <div className='grid grid-cols-2'>
                                                {block.list.map((image, index) => (
                                                    <Image key={index} src={image.image} alt={`Gallery Image ${index}`} />
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
                <div className="py-[60px]">
                    <ul className="flex items-center justify-center gap-x-6 gap-y-2">
                        <li>
                            <Link href={'#'} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={Facebook} alt={'Facebook'} /></Link>
                        </li>
                        <li>
                            <Link href={'#'} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={Twitter} alt={'Twitter'} /></Link>
                        </li>
                        <li>
                            <Link href={'#'} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={Linkedin} alt={'Linkedin'} /></Link>
                        </li>
                        <li>
                            <Link href={'#'} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={Instagram} alt={'Instagram'} /></Link>
                        </li>
                        <li>
                            <Link href={'#'} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={Youtube} alt={'Youtube'} /></Link>
                        </li>
                        <li>
                            <Link href={'#'} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={Pinterest} alt={'Pinterest'} /></Link>
                        </li>
                        <li>
                            <Link href={'#'} className='inline-block transition-all duration-100 ease-linear hover:scale-110'><Image src={Tiktok} alt={'Tiktok'} /></Link>
                        </li>
                    </ul>
                </div>
                {/* Footer Copyright */}
                <div className="grid grid-cols-3 items-center">
                    <div className="text-sm">Babogue © Copyright 2024</div>
                    <div className="text-center">
                        <Image src={BabySleeping} alt={''} className='mx-auto' />
                    </div>
                    <div className="">
                        <ul className="flex items-center justify-end text-sm gap-x-5 gap-y-2 font-semibold">
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
                {/* Footer Features */}
                <div className="p-4 bg-white rounded-[24px] flex items-center justify-center">
                    <Image src={FeatureThumb} alt={"Footer Features"} />
                </div>
            </div>
        </footer >
    )
}

export default Footer