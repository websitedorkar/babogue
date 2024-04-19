import React from 'react';
import TopShape from './img/shape-top.svg';
import BottomShape from './img/shape-bottom.svg';
import BgOverlay from './img/bg-overlay.svg';
import BabySleeping from './img/babySleeping.svg';
import Banner from './img/banner.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const FreeConsultant = () => {
    return (
        <section className='bg-[#C1DED5] pt-[50px] relative bg-cover bg-top-center' style={{
            backgroundImage: `url(${BgOverlay.src})`
        }}>
            <Image src={TopShape} alt={"Shape Top"} className='-top-[1px] start-0 end-0 w-full absolute' />
            <Image src={BottomShape} alt={"Shape Top"} className='-bottom-[1px] start-0 end-0 w-full absolute' />
            <div className="container">
                <div className="grid grid-cols-[2fr_4fr] items-center">
                    <div className="text-center">
                        <Image src={BabySleeping} alt={"Shape Top"} className='inline-block mb-3' />
                        <h2 className='text-5xl font-quicksand font-bold text-dark mb-1'>Start a Free Consult</h2>
                        <p className='text-2xl mb-6'>Conquer nighttime sleep, solve early rising, land naps, and deal with regressions.</p>
                        <Link href={'#'}><Button variant={'default'} className='uppercase px-10'>FREE PHONE CONSULT</Button></Link>
                    </div>
                    <div className="">
                        <Image src={Banner} alt='Banner' className='max-w-full h-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreeConsultant;