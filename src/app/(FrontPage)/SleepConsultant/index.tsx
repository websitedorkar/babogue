"use client";

import Banner from './img/banner.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { consultantsdata } from './data.consultants';
import { useMediaQuery } from '@/hooks/use-media-query';
import React, { useState } from 'react';
// Import Swiper React components
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PlayIcon from './img/play.svg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion, AnimatePresence } from 'framer-motion';

const SleepConsultant = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
      };
    
    return (
        <>
        {/* {isOpen && <div className="fixed w-full h-full bg-black bg-opacity-70 z-20 start-0 top-0" onClick={togglePopup}></div>} */}

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
                            <Button variant={'ghost'} className='wave--animation p-0 h-[65px] w-[65px] max-w-[65px] lg:h-[90px] lg:w-[90px] lg:max-w-[90px] absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2' onClick={togglePopup}>
                                <Image src={PlayIcon} alt="Play" />
                            </Button>

                        </div>
                    </div>
                    <div className="grid-item">
                        {!isMobile && 
                        <div className="mb-10">
                            <h5 className='text-sm lg:text-xl font-medium mb-3 text-primary-light'>Certified Child Sleep Consultant</h5>
                            <h2 className='text-2xl lg:text-5xl leading-6 font-bold mb-1 text-dark'>Erica Hargaden</h2>
                        </div>
                        }
                        { consultantsdata && isMobile ? <div>
                            <Swiper
                            modules={[Pagination]}
                            spaceBetween={15}
                            slidesPerView={1}
                            className='default-pagination mb-6'
                            // install Swiper modules
                            pagination={{ clickable: true }}
                        >
                            { consultantsdata.map(item => (
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
                                { consultantsdata.map(item => (
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
        
        {/* POPUP */}
        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed top-0 start-0 w-full flex justify-center z-40 items-center min-h-screen'
            >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                className="bg-black w-full h-full absolute bg-opacity-100 z-20"
                onClick={togglePopup}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative bg-white w-full max-w-[60rem] lg:min-h-[60vh] m-3 z-30"
            >
                <div className="pb-[56.25%]">
                <iframe className='absolute h-full w-full' width="560" height="315" src="https://www.youtube.com/embed/muDpH2Ty2tg?si=0BQvS79QIiPd5IDF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
        </>
    )
}

export default SleepConsultant;