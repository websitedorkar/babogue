"use client";

import React from 'react';
import Banner from './img/banner.png';
import PlayIcon from './img/play.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { consultantsdata } from './data.consultants';
import { useMediaQuery } from '@/hooks/use-media-query';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PlayButton from './playButton';

const SleepConsultant = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <section className='pt-[60px] pb-[60px] lg:pb-[100px] bg-white relative px-[30px] md:px-0'>
            <div className="container">
                <div className="grid grid-cols-1 gap-y-[30px] lg:grid-cols-2 items-center gap-4 xl:gap-x-[90px]">
                    <div className="grid__item lg:order-2">
                        {isMobile &&
                        <div className="mb-10 text-center">
                            <h5 className='text-sm lg:text-xl font-medium mb-3 text-primary-light'>Certified Child Sleep Consultant</h5>
                            <h2 className='text-2xl lg:text-5xl leading-6 font-bold mb-1 text-dark'>Erica Hargaden</h2>
                        </div>
                        }
                        <div className="relative">
                            <Image src={Banner} alt='banner' />
                            {/* Play Button */}
                            <PlayButton />

                        </div>
                    </div>
                    <div className="grid-item">
                        {!isMobile && 
                        <div className="mb-10">
                            <h5 className='text-sm lg:text-xl font-medium mb-3 text-primary-light'>Certified Child Sleep Consultant</h5>
                            <h2 className='text-2xl lg:text-5xl leading-6 font-bold mb-1 text-dark'>Erica Hargaden</h2>
                        </div>
                        }
                        {consultantsdata && isMobile ? <div>

                            <Swiper
                            modules={[Pagination]}
                            spaceBetween={15}
                            slidesPerView={1}
                            className='default-pagination mb-6'
                            // install Swiper modules
                            pagination={{ clickable: true }}
                        >
                            {consultantsdata.map(item => (
                                <SwiperSlide key={item.id} className='text-center space-y-4'>
                                    {item.icon && <span className='w-[65px] min-w-[65px] inline-block'><Image src={item.icon} alt={'title'} /></span>}
                                    {item.text && <div className='text-sm leading-6'>{item.text}</div>}
                                </SwiperSlide>
                            ))}
                        
                        </Swiper>
                        </div>
                        :
                        <div>
                            <ul className="flex flex-col space-y-3 lg:space-y-5 mb-10">
                                {consultantsdata.map(item => (
                                    <li key={item.id} className={`flex items-center gap-3 ${item.className}`}>
                                        {item.icon && <span className='min-w-[65px] w-[65px] lg:w-[80px] lg:min-w-[80px]'><Image src={item.icon} alt={'title'} /></span>}
                                        {item.text && <div className='text-xs lg:text-base leading-6'>{item.text}</div>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        }
                        <div className='text-center md:text-start'>
                            <Link href="#"><Button variant={'default'} size={'sm'} className=''>ABOUT US</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SleepConsultant