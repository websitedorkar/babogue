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
                <div className="grid grid-cols-2 items-center gap-x-[90px]">
                    <div className="grid-item">

                        <div className="mb-10">
                            <h5 className='text-3xl font-medium mb-1 text-primary-light'>Certified Child Sleep Consultant</h5>
                            <h2 className='text-5xl leading-11 font-bold mb-1 text-dark'>Erica Hargaden</h2>
                        </div>

                        {consultantsdata && <div>
                            <ul className="flex flex-col gap-6 mb-10">
                                {consultantsdata.map(item => (
                                    <li key={item.id} className={`flex items-center gap-3 ${item.className}`}>
                                        {item.icon && <span className='w-[110px] min-w-[110px]'><Image src={item.icon} alt={'title'} /></span>}
                                        {item.text && <div>{item.text}</div>}
                                    </li>
                                ))}
                            </ul>
                        </div>}
                        <div>
                            <Link href="#"><Button className='min-w-[175px]'>ABOUT US</Button></Link>
                        </div>
                    </div>
                    <div className="grid__item">
                        <div className="relative">
                            <Image src={Banner} alt='banner' />
                            {/* Play Button */}
                            <Link href={'#'} className='wave--animation absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <Image src={PlayIcon} alt="Play" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SleepConsultant