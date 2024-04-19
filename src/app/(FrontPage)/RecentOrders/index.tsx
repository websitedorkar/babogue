"use client";
import React from 'react';
import Image from 'next/image';
import { productsdata } from "./data.products";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useMediaQuery } from '@/hooks/use-media-query';


const RecentOrders = () => {
    const isMobile = useMediaQuery("(max-width: 667px)");
    return (
        <section className='pb-[100px] bg-white'>
            <div className="container">
                {/* Section Heading */}
                <div className="section-title mb-10 text-center">
                    <h2 className='text-3xl lg:text-5xl font-quicksand font-bold font-dark mb-2'>Courses Your Ordered Before</h2>
                </div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-y-10 gap-[20px] text-center">
                    {productsdata && productsdata.map(product => (
                        <div className="border border-solid border-border rounded-[24px] p-4 pt-6 relative bg-white" key={product.id}>
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

export default RecentOrders