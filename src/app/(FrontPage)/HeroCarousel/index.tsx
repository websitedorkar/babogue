"use client";

import React, { useState } from 'react';
import { slidesdata } from './data.slides';
import BottomShape from './img/shape-bottom.svg';
import BottomShapeMobile from './img/shape-bottom-mobile.svg';
import babySleeping from './img/babySleeping.svg';
import { motion, useAnimation } from 'framer-motion';

import Pattern from './img/bg-pattern.svg';
import Stars_1 from './img/stars-1.png';
import Stars_2 from './img/stars-2.png';

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
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
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
                            effect={"fade"}
                            fadeEffect= {{ crossFade: true }}
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
                                        {({ isActive }) => (
                                            <div className="container">
                                                <div className="grid grid-cols-1 gap-y-[15px] lg:gap-y-[70px] lg:grid-cols-[0.75fr_1fr] items-end">
                                                    <div className="slide__content px-[15px] md:px-0 pt-[25px] md:pt-[40px] xl:pt-[130px] lg:pb-[180px] lg:min-h-[70vh]">
                                                        {slide.caption && <motion.h6                                                         
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                                                        exit={{ y: -10, opacity: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.3 }}
                                                        className='text-primary text-sm md:text-xl font-normal mb-2'>{slide.caption}</motion.h6>}

                                                        {slide.heading && <motion.h2
                                                        initial={{ y: 10, opacity: 0 }}
                                                        animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                                                        exit={{ y: -10, opacity: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.6 }}
                                                        className='text-dark text-3xl md:text-5xl xl:text-6xl leading-[1.1] font-bold mb-4' dangerouslySetInnerHTML={{__html: slide.heading }}></motion.h2>}

                                                        {slide.list && <div className='text-dark flex flex-col gap-2 lg:gap-4 md:max-w-full'>{slide.list.map((item, i) => (
                                                            <motion.li
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                                                            exit={{ y: -10, opacity: 0 }}
                                                            transition={{ duration: 0.3, delay: 1+ i/5  }}
                                                            className='flex gap-4' key={i}>
                                                                {item.icon && <span className='min-w-[18px] mt-3'><Image src={item.icon} alt="icon" /></span>}
                                                                {item.text && <div className='text-sm md:text-base leading-5 lg:leading-6'>{item.text}</div>}
                                                            </motion.li>
                                                        ))}</div>}
                                                        {slide.description && <motion.div 
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                                                            exit={{ y: -10, opacity: 0 }}
                                                            transition={{ duration: 0.3, delay: 1.2 }}
                                                        className='text-dark text-sm'>{slide.description}</motion.div>}
                                                        {slide.button__label && <motion.div 
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: isActive ? 0 : 10, opacity: isActive ? 1 : 0 }}
                                                            exit={{ y: -10, opacity: 0 }}
                                                            transition={{ duration: 0.3, delay: 1.4 }}
                                                        className='pt-4'>
                                                            <Link href={slide.button__url ?? '#'}><Button size={'sm'} className=''>{slide.button__label}</Button></Link>
                                                        </motion.div>}
                                                    </div>
                                                    <div className="relative">
                                                        <motion.div className="slide__banner -ms-4 -me-10 md:mx-0"
                                                            initial={false}
                                                            animate={
                                                                isActive
                                                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                                                            }
                                                            transition={{ duration: 1, delay: 1 }}
                                                            >
                                                            <Image src={slide.banner} alt="Banner" className='max-w-[100%] mx-auto' />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
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