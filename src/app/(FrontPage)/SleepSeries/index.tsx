"use client";
import React from 'react';
import LOGO from './logo.svg';
import Image from 'next/image';
import { productsdata } from "./data.products";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useMediaQuery } from '@/hooks/use-media-query';

const SleepSeries = () => {
    const isMobile = useMediaQuery("(max-width: 667px)");
    return (
        <section className='py-[100px] bg-white relative'>
            <div className="container max-w-[1230px]">
                <div className="text-center mb-10">
                    <div className='max-w-[1100px] mx-auto'>
                        <Image src={LOGO} alt="logo" className='inline-block' />
                        <p>We have helped thousands of families globally achieve the Gift of Sleep in their homes. In fact, 94% of families who use our Sleep Series courses report better sleep as a result.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-[20px] text-center">
                    {productsdata && productsdata.map(product => (
                        <div className="border border-solid border-border rounded-[16px] p-3 pt-6 relative z-[1] bg-white" key={product.id}>
                            {product.badge && <div className=' absolute -top-[20px] start-0 w-full'><span className="text-[16px] bg-primary inline-flex items-center rounded-b-xl px-5 min-w-[135px] justify-center py-2 leading-4 min-h-[36px] text-white relative before:content-[''] before:z-[-1] before:absolute before:top-0 before:w-0 before:h-0 before:border-l-[11px] before:border-l-[#947761] before:border-opacity-50 before:-end-[11px] before:border-t-[20px] before:border-y-transparent before:border-solid after:content-[''] after:z-[-1] after:absolute after:top-0 after:w-0 after:h-0 after:border-r-[11px] after:border-r-[#947761] after:border-opacity-50 after:-start-[11px] after:border-t-[20px] after:border-y-transparent after:border-solid">{product.badge}</span></div>}

                            {isMobile ?
                                <div className="grid grid-cols-[3fr_6fr] gap-x-4 items-center">
                                    <div className='min-w-[120px]'>
                                        {product.banner && <div className='w-[115px] h-[115px] min-[115px] border-[#C1DED5] mb-3 rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                            <Image src={product.banner} className='inline-block' alt={product.name} />
                                        </div>}
                                        {product.name && <h2 className='text-sm font-bold text-dark mb-3'>{product.name}</h2>}
                                    </div>
                                    <div className='border-l-[2px] border-border border-solid pt-4 ps-5'>
                                        {product.description && <div className='text-xs font-normal text-dark'>{product.description}</div>}
                                        <div className="flex items-center justify-between gap-1 py-2">
                                            {product.price_from && <span className='border border-border px-6 font-roboto py-2 inline-flex items-center justify-center rounded-full text-xxs font-normal text-black uppercase tracking-tight'>FROM €{product.price_from}</span>}
                                            {product.price_from && <Link href='#' className='flex-grow text-white'><Button className='w-full' variant={'default'} size={'xs'}>Buy Now</Button></Link>}
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="">
                                    {product.banner && <div className='w-[115px] h-[115px] min-[115px] border-[#C1DED5] my-4 rounded-full flex items-center justify-center p-[6px] mx-auto border-dashed border-2'>
                                        <Image src={product.banner} className='inline-block' alt={product.name} />
                                    </div>}
                                    {product.name && <h2 className='text-xl font-bold text-dark mb-3'>{product.name}</h2>}
                                    {product.description && <div className='text-xs font-normal text-dark'>{product.description}</div>}
                                    <hr className='my-3' />
                                    <div className="flex items-center justify-between gap-1 py-2">
                                        {product.price_from && <span className='border border-border px-3 font-roboto py-2 inline-flex items-center justify-center rounded-full text-xxs font-normal text-black uppercase tracking-tight'>FROM €{product.price_from}</span>}
                                        {product.price_from && <Link href='#' className='flex-grow text-white'><Button className='w-full' variant={'default'} size={'xs'}>Buy Now</Button></Link>}
                                    </div>
                                </div>
                            }


                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SleepSeries;