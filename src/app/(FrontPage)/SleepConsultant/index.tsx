import React from 'react';
import Banner from './img/banner.png';
import PlayIcon from './img/play.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { consultantsdata } from './data.consultants';

const SleepConsultant = () => {
    return (
        <section className='pt-[50px] pb-[100px] bg-white relative'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 xl:gap-x-[90px]">
                    <div className="grid__item md:order-2">
                        <div className="relative">
                            <Image src={Banner} alt='banner' />
                            {/* Play Button */}
                            <Link href={'#'} className='wave--animation max-w-[80px] absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <Image src={PlayIcon} alt="Play" />
                            </Link>

                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="mb-10">
                            <h5 className='text-xl font-medium mb-3 text-primary-light'>Certified Child Sleep Consultant</h5>
                            <h2 className='text-5xl leading-6 font-bold mb-1 text-dark'>Erica Hargaden</h2>
                        </div>
                        {consultantsdata && <div>
                            <ul className="flex flex-col gap-y-8 mb-10">
                                {consultantsdata.map(item => (
                                    <li key={item.id} className={`flex items-center gap-3 ${item.className}`}>
                                        {item.icon && <span className='w-[80px] min-w-[80px]'><Image src={item.icon} alt={'title'} /></span>}
                                        {item.text && <div className='text-base leading-6'>{item.text}</div>}
                                    </li>
                                ))}
                            </ul>
                        </div>}
                        <div>
                            <Link href="#"><Button variant={'default'} size={'sm'} className=''>ABOUT US</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SleepConsultant