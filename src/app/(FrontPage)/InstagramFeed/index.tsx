'use client';

import React from 'react';
import Pattern from './img/bg-pattern.svg';
import { feed } from './data.feed';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';

// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const InstagramFeed = () => {
    const isMobile: boolean = useMediaQuery('(max-width: 768px)');

    return (
        <section className='section bg-white bg-pattern py-[60px] lg:py-[100px] relative  overflow-hidden' style={{ backgroundImage: `url(${Pattern.src})` }}>
            <div className="container">
                {/* SECTION HEADING */}
                <div className="text-center mb-6">
                    <h2 className='text2xl lg:text-5xl font-bold font-quicksand text-dark mb-1'>@babogue_sleep</h2>
                    <h5 className='text-xs lg:text-xl mb-0'>Hop over to Instagram and tag us babogue_sleep or use #babogue_sleep</h5>
                </div>
                
                { 
                feed && isMobile ?
                    <div>
                        
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={15}
                            slidesPerView={2}
                            className='default-pagination'
                            // install Swiper modules
                            pagination={{ clickable: true }}
                        >
                            {feed.map(item => (
                                <SwiperSlide key={item.id}>
                                    {item.thumbnail && <Image src={item.thumbnail} alt={item.title} />}
                                </SwiperSlide>
                            ))}
                        
                        </Swiper>
                    </div>
                : feed && 
                <div className="grid grid-cols-4 gap-4">
                    {feed.map(item => (
                        <div key={item.id} className="grid__item">
                            {item.thumbnail && <Image src={item.thumbnail} alt={item.title} />}
                        </div>
                    ))}
                </div>
                }
            </div>
        </section>
    )
}

export default InstagramFeed;