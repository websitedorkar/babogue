"use client";

import React from 'react';
import { reviewsdata } from './data.reviews';
import Google from './img/google.svg';
import BackIcon from './img/back.svg';
import NextIcon from './img/next.svg';
import TopShape from './img/shape-top.svg';
import BottomShape from './img/shape-bottom.svg';
import babySleeping from './img/babySleeping.svg';
import TopShapeMobile from './img/shape-top-mobile.svg';
import BottomShapeMobile from './img/shape-bottom-mobile.svg';

// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Config from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

const ParentsReviews = () => {
    // Check if window is defined before accessing its properties
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <section className='pt-[70px] pb-[70px] md:py-[130px] bg-primary text-white relative overflow-hidden'>
            {isMobile ?
                <>
                <Image src={TopShapeMobile} alt={"Shape Top"} className='-top-[1px] start-0 end-0 w-full absolute' />
                <Image src={BottomShapeMobile} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute' />
                </>
                :
                <>
                    <Image src={TopShape} alt={"Shape Top"} className='-top-[1px] start-0 end-0 w-full absolute' />
                    <Image src={BottomShape} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute' />
                </>
            }
            <Image src={babySleeping} alt={"Shape Top"} className='-bottom-[1px] start-1/2 -translate-x-1/2 end-0 w-[60px] lg:w-[100px] absolute' />

            <div className="container">
                {/* Section Heading */}
                <div className="section-title mb-[15px] lg:mb-[20px] text-center">
                    <h2 className='display-2 text-white'>What Parents Are Saying</h2>
                </div>

                {reviewsdata &&
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={4}
                            className='slide-equal-height default-pagination-light'
                            // install Swiper modules
                            navigation={{
                                nextEl: ".parents-review-carousel--next",
                                prevEl: ".parents-review-carousel--prev",
                                disabledClass: "swiper-button-disabled !opacity-10 pointer-events-none"
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                    pagination: false
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                    // pagination: false
                                },
                            }}
                        >
                            {reviewsdata.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <div className="bg-white text-dark rounded-[12px] p-4 h-full flex flex-col">
                                            <div className="flex items-center justify-between gap-2 mb-3 lg:mb-5">
                                                {item.rating && <span className='rating--list' dangerouslySetInnerHTML={{ __html: Config.starRating(item.rating) }} />}
                                                <span className='w-[19px] h-[19px] rounded-full'>
                                                    <Image src={Google} alt={"Google"} className='max-w-full h-auto' />
                                                </span>
                                            </div>
                                            {/* Author */}
                                            <div className="flex items-center gap-3 mb-4">
                                                {item.thumbnail &&
                                                    <span className='w-[45px] h-[45px] rounded-full border-[2px] p-[2px] border-solid border-primary-light border-opacity-50'>
                                                        <Image src={item.thumbnail} alt={item.name} className='max-w-full h-auto' />
                                                    </span>
                                                }
                                                <div className="">
                                                    <h4 className='text-sm font-medium text-dark font-quicksand leading-4 mb-1'>{item.name}</h4>
                                                    <h6 className='text-sm font-semibold text-dark font-quicksand leading-5 text-opacity-50 mb-0'> {item.date} </h6>
                                                </div>
                                            </div>
                                            <div className="text-dark text-xs font-quicksand font-nromal leading-5 mb-6">{item.description}</div>

                                            {/* Action */}
                                            <div className='mt-auto'>
                                                <Link href={'#'} className='text-white'>
                                                    <Button variant={'default'} size={'xs'}>Course: {item.course}</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <div className='absolute top-1/2 z-[2] start-0 hidden lg:flex items-center justify-between w-full end-0'>
                            <span className='parents-review-carousel--prev cursor-pointer opacity-30 w-[38px] min-w-[38px] -ms-[75px] hover:opacity-75 transition-all duration-300 ease-linear inline-flex'><Image src={BackIcon} alt={'Back Icon'} /></span>
                            <span className='parents-review-carousel--next cursor-pointer opacity-30 w-[38px] min-w-[38px] -me-[75px] hover:opacity-75 transition-all duration-300 ease-linear inline-flex'><Image src={NextIcon} alt={'Back Icon'} /></span>
                        </div>
                    </div>
                }

                <div className="text-center mt-6">
                    <Link href={'#'}>
                        <Button variant={'outline'} size={'lg'} className='bg-transparent font-semibold border-2 border-slate-100 hover:text-primary hover:outline-primary'>BROWSE ALL REVIEWS</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ParentsReviews