"use client";

import React from 'react';
import { slidesdata } from './data.slides';
import TopShape from './img/shape-top.svg';
import BottomShape from './img/shape-bottom.svg';
import babySleeping from './img/babySleeping.svg';

import Pattern from './img/bg-pattern.svg';
import Stars_1 from './img/stars-1.png';
import Stars_2 from './img/stars-2.png';

// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

const HeroCarousel = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <section className='bg-columbia-blue pb-0 text-white relative overflow-hidden hero-carousel' style={{ backgroundImage: `url(${Pattern.src})` }}>
            <Image src={TopShape} alt={"Shape Top"} className='-top-[1px] start-0 end-0 w-full absolute z-[1]' />
            <Image src={BottomShape} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute z-[6]' />

            <div className="relative">
                {slidesdata &&
                    <div>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={40}
                            slidesPerView={1}
                            className='slide-equal-height'
                            // install Swiper modules
                            pagination={{ clickable: true }}
                        >
                            {slidesdata.map((slide) => {
                                return (
                                    <SwiperSlide key={slide.id}>
                                        <div className="container">
                                            <div className="grid grid-cols-1 gap-y-[40px] lg:gap-y-[70px] lg:grid-cols-[0.75fr_1fr] items-end">
                                                <div className="slide__content pt-[40px] xl:pt-[130px] lg:pb-[180px] lg:min-h-[70vh]">
                                                    {slide.caption && <h6 className='text-primary text-sm md:text-xl font-normal mb-2'>{slide.caption}</h6>}
                                                    {slide.heading && <h2 className='text-dark text-3xl md:text-5xl xl:text-6xl leading-[1.1] font-bold mb-4'>{slide.heading}</h2>}
                                                    {slide.list && <div className='text-dark flex flex-col gap-2 lg:gap-4'>{slide.list.map((item, i) => (
                                                        <li className='flex gap-4' key={i}>
                                                            {item.icon && <span className='min-w-[18px] mt-3'><Image src={item.icon} alt="icon" /></span>}
                                                            {item.text && <div className='text-sm md:text-base leading-6'>{item.text}</div>}
                                                        </li>
                                                    ))}</div>}
                                                    {slide.description && <div className='text-dark text-sm'>{slide.description}</div>}
                                                    {slide.button__label && <div className='pt-4'>
                                                        <Link href={slide.button__url ?? '#'}><Button size={'sm'} className=''>{slide.button__label}</Button></Link>
                                                    </div>}
                                                </div>
                                                <div className="slide__banner relative">
                                                    <Image src={slide.banner} alt="Banner" className='max-w-[80%] mx-auto' />
                                                    <Image src={Stars_1} alt="Stars 1" className='absolute -top-[5%] start-[6%] max-w-[20%]' />
                                                    <Image src={Stars_2} alt="Stars 2" className='absolute bottom-[20%] max-w-[15%] end-0 lg:-end-[15%]' />
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

export default HeroCarousel