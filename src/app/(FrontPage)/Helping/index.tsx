"use client";
import React from 'react';
import { faqsdata } from './data.faqs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

// Import Swiper React components
import {Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface FaqItem {
    id: number;
    icon?: string;
    text: string;
    className?: string;
}

const Helping = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    // Function to chunk the data into arrays of 5 items each
    const chunkArray = (array: FaqItem[], size: number): FaqItem[][] => {
        return array.reduce<FaqItem[][]>((acc, _, i) => {
            if (i % size === 0) {
                acc.push(array.slice(i, i + size));
            }
            return acc;
        }, []);
    };

    // Chunk the data into arrays of 4 items each
    const chunkedFaqsData = chunkArray(faqsdata, 4);

    return (
        <section className='py-[60px] lg:py-[100px] bg-white relative overflow-hidden'>
            <div className="container">
                {/* Section Heading */}
                <div className="section-title mb-10 text-center">
                    <h2 className='text-2xl md:text-4xl xl:text-5xl leading-9 xl:leading-11 tracking-tight font-quicksand font-bold font-dark mb-2'>Is it you? We can help you!</h2>
                </div>

                {faqsdata && isMobile ? (
                    <div>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={15}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            className='default-pagination mb-5'
                            pagination={{ clickable: true }}
                        >
                            {/* Map over chunked data to render each chunk as a separate slide */}
                            {chunkedFaqsData.map((chunk, index) => (
                                <SwiperSlide key={index}>
                                    <div className="space-y-6 mb-4">
                                        {/* Map over the chunk to render 5 feed items in each slide */}
                                        {chunk.map(item => (
                                            <div className={`flex gap-2 ${item.className || ''}`} key={item.id}>
                                                {item.icon && <span className='w-[60px] min-w-[60px]'><Image src={item.icon} alt={'title'} /></span>}
                                                {item.text && <div className='tracking-tight text-sm' dangerouslySetInnerHTML={{ __html: item.text }}></div>}
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-[70px]'>
                        {faqsdata.map(item => (
                            <div className={`flex gap-2 ${item.className || ''}`} key={item.id}>
                                {item.icon && <span className='w-[60px] min-w-[60px]'><Image src={item.icon} alt={'title'} /></span>}
                                {item.text && <div className='tracking-tight text-sm' dangerouslySetInnerHTML={{ __html: item.text }}></div>}
                            </div>
                        ))}
                    </div>
                )}

                <div>
                    <div className="max-w-[470px] text-center mx-auto">
                        <h5 className='font-base leading-6 font-bold text-dark mb-6'>Are you returning to work and would like to establish a healthy sleep routine for your child?</h5>
                        <Link href="#"><Button variant={'default'} size={'lg'} className='uppercase'>One To one</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Helping;
