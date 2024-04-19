"use client";

import React from 'react';
import { articlesdata } from './data.articles';
import Google from './img/google.svg';
import BackIcon from './img/back.svg';
import NextIcon from './img/next.svg';
import TopShape from './img/shape-top.svg';
import BottomShape from './img/shape-bottom.svg';
import babySleeping from './img/babySleeping.svg';

// Import Swiper React components
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Config from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const BlogArticles = () => {
    return (
        <section className='pt-[130px] pb-[150px] bg-sky relative'>
            <Image src={TopShape} alt={"Shape Top"} className='-top-[1px] start-0 end-0 w-full absolute' />
            <Image src={BottomShape} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute' />

            <div className="container">
                {/* Section Heading */}
                <div className="section-title mb-10 text-center">
                    <h2 className='text-5xl font-quicksand font-bold text-dark mb-2'>Blog Articles</h2>
                </div>

                {articlesdata &&
                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={40}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            className='slide-equal-height'
                            // install Swiper modules
                            navigation={{
                                nextEl: ".blogs-carousel--next",
                                prevEl: ".blogs-carousel--prev",
                                disabledClass: "swiper-button-disabled !opacity-10 pointer-events-none"
                            }}
                        >
                            {articlesdata.map((article) => {
                                return (
                                    <SwiperSlide key={article.id}>
                                        <div className="bg-white text-dark rounded-[24px] p-7 h-full flex flex-col">
                                            {/* Thumbnail */}
                                            {article.thumbnail &&
                                                <div className="mb-5 relative">
                                                    <Image src={article.thumbnail} alt={article.title} className='w-full h-[300px] object-cover rounded-[8px]' />
                                                    {article.date && <span className='uppercase text-[20px] leading-6 font-semibold font-quicksand text-white bg-primary h-[42px] inline-flex items-center justify-center absolute top-4 end-4 py-1 px-4 rounded-full'>{article.date}</span>}
                                                </div>
                                            }
                                            <div className="mb-2">
                                                {article.title && <h2 className='text-2xl font-bold text-dark font-quicksand leading-6 mb-4'>{article.title}</h2>}
                                                {article.description && <div className="text-dark text-sm font-normal leading-7 mb-0">{Config.truncateText(article.description, 90)}</div>}
                                            </div>


                                            {/* Action */}
                                            <div className='mt-auto'>
                                                <Link href={'#'}>
                                                    <Button variant={"link"} size={'sm'} className='p-0 underline font-semibold text-dark' >Read more</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <div className='absolute top-1/2 z-10 start-0 flex items-center justify-between w-full end-0'>
                            <span className='blogs-carousel--prev cursor-pointer opacity-30 -ms-[75px] hover:opacity-75 transition-all duration-300 ease-linear inline-flex'><Image src={BackIcon} alt={'Back Icon'} /></span>
                            <span className='blogs-carousel--next cursor-pointer opacity-30 -me-[75px] hover:opacity-75 transition-all duration-300 ease-linear inline-flex'><Image src={NextIcon} alt={'Back Icon'} /></span>
                        </div>
                    </div>
                }

                <div className="text-center mt-10">
                    <Link href={'#'}>
                        <Button variant={'outline'} className='bg-transparent border-dark text-base px-10 hover:bg-dark hover:text-white hover:outline-dark'>BROWSE ALL ARTICLES</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BlogArticles;