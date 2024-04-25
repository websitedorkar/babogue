"use client";

import React, { useState } from 'react';
import { slidesdata } from './data.slides';
import BottomShape from './img/shape-bottom.svg';
import BottomShapeMobile from './img/shape-bottom-mobile.svg';
import babySleeping from './img/babySleeping.svg';
import { motion, useAnimation } from 'framer-motion';

import Pattern from './img/bg-pattern.svg';

// Import Swiper React components
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

const HeroCarousel = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <section className='pb-0 relative overflow-hidden hero-carousel bg-white'>
            {isMobile ? 
                <Image src={BottomShapeMobile} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute z-[6]' />
            :
                <Image src={BottomShape} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute z-[6]' />
            }

            <div className="relative">
                {slidesdata &&
                    <div>
                        <Swiper
                            modules={[EffectFade, Pagination, Autoplay]}
                            spaceBetween={40}
                            slidesPerView={1}
                            loop
                            // effect={"fade"}
                            // fadeEffect= {{ crossFade: true }}
                            className='slide-equal-height'
                            // install Swiper modules
                            pagination={{ clickable: true }}
                            speed={500}
                            autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                            }}
                        >
                            {slidesdata.map((slide) => {
                                return (
                                    <SwiperSlide key={slide.id} style={{ backgroundColor: slide.background ?? '#C1DED5', backgroundImage: `url(${Pattern.src})` }}>
                                        <div className="container">
                                            <div className="grid grid-cols-1 gap-y-[15px] lg:gap-y-[70px] lg:grid-cols-[0.75fr_1fr] min-h-[680px]">
                                                <div
                                                className="slide__content pt-[40px] lg:pb-[100px] flex flex-col justify-center">
                                                    {slide.caption && <h6 className='text-primary text-sm md:text-xl font-normal mb-2'>{slide.caption}</h6>}
                                                    {slide.heading && <h2 className='text-dark text-3xl md:text-5xl xl:text-6xl leading-[1.1] font-bold mb-4' dangerouslySetInnerHTML={{__html: slide.heading }}></h2>}
                                                    {slide.list && <div className='text-dark flex flex-col gap-2 lg:gap-4 md:max-w-full'>{slide.list.map((item, i) => (
                                                        <li className='flex gap-4' key={i}>
                                                            {item.icon && <span className='min-w-[18px] mt-3'><Image src={item.icon} alt="icon" /></span>}
                                                            {item.text && <div className='text-sm md:text-base leading-5 lg:leading-6'>{item.text}</div>}
                                                        </li>
                                                    ))}</div>}
                                                    {slide.description && <div className='text-dark text-sm'>{slide.description}</div>}
                                                    {slide.button__label && <div className='pt-4'>
                                                        <Link href={slide.button__url ?? '#'}><Button size={'sm'} className=''>{slide.button__label}</Button></Link>
                                                    </div>}
                                                </div>
                                                <div className="relative lg:pt-[60px] flex flex-col justify-end">
                                                    <div className="slide__banner">
                                                        <Image src={isMobile ? slide.bannerMobile : slide.bannerDesktop} alt="Banner" className='max-w-[100%] mx-auto' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                }
                {!isMobile &&
                    <div className="absolute hidden lg:block start-0 bottom-0 z-10 w-full">
                        <div className="container">
                            <Image src={babySleeping} alt={"Shape Top"} className='' />
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default HeroCarousel;