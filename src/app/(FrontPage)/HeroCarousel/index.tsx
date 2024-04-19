"use client";

import React from 'react';
import { slidesdata } from './data.slides';
import TopShape from './img/shape-top.svg';
import BottomShape from './img/shape-bottom.svg';
import babySleeping from './img/babySleeping.svg';

import BG from './img/bg.png';
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

const HeroCarousel = () => {
    return (
        <section className='pt-[50px] bg-columbia-blue pb-0 text-white relative overflow-hidden bg-cover bg-top-center hero-carousel' style={{ backgroundImage: `url(${BG.src})` }}>
            <Image src={TopShape} alt={"Shape Top"} className='-top-[1px] start-0 end-0 w-full absolute' />
            <Image src={BottomShape} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute z-[6]' />

            <div className="relative">
                {slidesdata &&
                    <div>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={40}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className='slide-equal-height'
                            // install Swiper modules
                            pagination={{ clickable: true }}
                        >
                            {slidesdata.map((slide) => {
                                return (
                                    <SwiperSlide key={slide.id}>
                                        <div className="container">
                                            <div className="grid grid-cols-[0.75fr_1fr] items-end">
                                                <div className="slide__content space-y-4 pt-[120px] pb-[150px] min-h-[70vh]">
                                                    {slide.caption && <h6 className='text-primary text-xl font-normal'>{slide.caption}</h6>}
                                                    {slide.heading && <h6 className='text-dark text-6xl leading-[1.1] font-bold'>{slide.heading}</h6>}
                                                    {slide.list && <div className='text-dark flex flex-col gap-4'>{slide.list.map((item, i) => (
                                                        <li className='flex gap-4' key={i}>
                                                            {item.icon && <span className='min-w-[18px] mt-3'><Image src={item.icon} alt="icon" /></span>}
                                                            {item.text && <div className='text-base'>{item.text}</div>}
                                                        </li>
                                                    ))}</div>}
                                                    {slide.description && <div className='text-dark text-sm'>{slide.description}</div>}
                                                    {slide.button__label && <div className='pt-4'>
                                                        <Link href={slide.button__url ?? '#'}><Button size={'sm'} className=''>{slide.button__label}</Button></Link>
                                                    </div>}
                                                </div>
                                                <div className="slide__banner relative">
                                                    <Image src={slide.banner} alt="Banner" className='max-w-[95%]' />
                                                    <Image src={Stars_1} alt="Stars 1" className='absolute -top-[10%] start-[4%] max-w-[20%]' />
                                                    <Image src={Stars_2} alt="Stars 2" className='absolute bottom-[20%] max-w-[20%] -end-[15%]' />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                }
                <div className="absolute start-0 bottom-0 z-10 w-full">
                    <div className="container">
                        <Image src={babySleeping} alt={"Shape Top"} className='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroCarousel