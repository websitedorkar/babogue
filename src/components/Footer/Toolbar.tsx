import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Home from './img/toolbar--home.svg';
import Cart from './img/toolbar--cart.svg';
import Courses from './img/toolbar--courses.svg';
import Account from './img/toolbar--account.svg';
import Services from './img/toolbar--services.svg';
import AngleRight from './img/arrow-right.svg';
import Baby_1 from './img/baby-1.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';

const Toolbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);

    const toggleServices = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                servicesRef.current &&
                !servicesRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);
  return (
    <aside className='fixed bottom-0 end-0 start-0 z-20 bg-white text-dark flex items-center py-1 rounded-t-[16px] px-4 border border-solid border-border border-b-0'>
        <Link href={'/'} className="flex-grow text-center">
            <div className="inline-flex flex-col gap-y-1">
                <div><Image src={ Home } alt={'Home'} className='mx-auto'/></div>
                <h6 className='text-[11px] font-semibold'>Home</h6>
            </div>
        </Link>
        <Link href={'/'} className="flex-grow text-center">
            <div className="inline-flex flex-col gap-y-1">
                <div><Image src={ Courses } alt={'Courses'} className='mx-auto'/></div>
                <h6 className='text-[11px] font-semibold'>My Courses</h6>
            </div>
        </Link>
        {/* Service Toggle */}
        <Button variant={'ghost'} onClick={toggleServices} className="p-0 flex-grow text-center" ref={buttonRef}>
            <div className="inline-flex flex-col gap-y-1 -mt-4 -translate-y-1">
                <div><Image src={ Services } alt={'Services'} className='mx-auto min-w-[80px] shadow-[0px_0px_24px_rgba(0,0,0,0.059)] rounded-full'/></div>
            </div>
        </Button>
        <Link href={'/'} className="flex-grow text-center">
            <div className="inline-flex flex-col">
                <div className="inline-block relative mx-3">
                    <Image src={Cart} className='w-[30px] min-w-[30px]' alt="Cart Icon" />
                    <span className="text-xs font-bold text-white bg-primary-light min-w-[21px] w-[21px] h-[21px] inline-flex items-center justify-center rounded-full absolute -top-[5px] -end-[8px]">2</span>
                </div>
                <h6 className='text-[11px] font-semibold'>Cart</h6>
            </div>
        </Link>
        <Link href={'/'} className="flex-grow text-center" onClick={toggleServices}>
            <div className="inline-flex flex-col gap-y-1">
                <div><Image src={ Account } alt={'Account'} className='mx-auto'/></div>
                <h6 className='text-[11px] font-semibold'>Account</h6>
            </div>
        </Link>

        {/* Services List */}
        <motion.div 
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: { opacity: 1, y: 0, },
                closed: { opacity: 0, y: '1rem' },
            }}
            ref={servicesRef}
            className={`absolute bottom-[calc(100%+3rem)] w-full start-0 flex justify-center ${isOpen ? 'visible' : 'invisible'}`}>
            <div className="p-4 rounded-[16px] shadow-md bg-white w-[300px] before:content-[''] before:absolute before:w-0 before:h-0 before:-bottom-[13px] before:start-1/2 before:-translate-x-1/2 before:border-t-[14px] before:border-t-white before:border-x-[12px] before:border-x-transparent before:border-solid flex flex-col gap-y-2">
            {Array.from({ length: 5 }, (_, index) => (
                // Your mapping logic here
                // For example, return a JSX element:
                <Link href={'#'} key={index + 1} className='border border-border rounded-xl p-2 flex gap-3 justify-start items-center'>
                    <div className='w-[52px] h-[52px] min-[52px] border-[#C1DED5] rounded-full flex items-center justify-center p-[3px] border-dashed border-2'>
                        <Image src={Baby_1} className='inline-block' alt={' Baby '} />
                    </div>

                    <div>
                        <h6 className="mb-0 font-bold text-base">0-6 Months</h6>
                    </div>

                    <span className='inline-flex ms-auto'><Image src={AngleRight} className='inline-block' alt={' Baby '} /></span>
                </Link>
                ))}                
            </div>
        </motion.div>
    </aside>
  )
}

export default Toolbar;