'use client';
import React from 'react';
import TopShape from './img/shape-top.svg';
import BottomShape from './img/shape-bottom.svg';
import Pattern from './img/bg-pattern.svg';
import BabySleeping from './img/babySleeping.svg';
import BannerDesktop from './img/banner.png';
import BannerMobile from './img/banner-mobile.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

const FreeConsultant = () => {
    const isMobile = useMediaQuery("(max-width: 667px)");
    return (
        <section className='bg-[#C1DED5] relative overflow-hidden' style={{ backgroundImage: `url(${Pattern.src})` }}>
            <Image src={TopShape} alt={"Shape Top"} className='-top-[1px] start-0 end-0 w-full absolute' />
            <Image src={BottomShape} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute' />
            <div className="container">
                <div className="grid md:grid-cols-[3fr_4fr] items-center">
                    <div className="text-center py-[50px]">
                        <Image src={BabySleeping} alt={"Shape Top"} className='inline-block w-[110px] md:w-[205px] max-w-[35%] mb-4' />
                        <h2 className='text-2xl lg:text-4xl leading-9 xl:text-5xl font-quicksand font-bold text-dark mb-2'>Start a Free Consult</h2>
                        <p className='text-sm md:text-xl mb-6'>Conquer nighttime sleep, solve early rising, land naps, and deal with regressions.</p>
                        <Link href={'#'}><Button variant={'default'} size={'lg'}>FREE PHONE CONSULT</Button></Link>
                    </div>
                    <div className="flex items-end h-full">
                        {isMobile ?
                            <Image src={BannerMobile} alt='Banner' className='max-w-full w-full -mx-4 h-auto' />
                            :
                            <Image src={BannerDesktop} alt='Banner' className='max-w-full h-auto' />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreeConsultant;