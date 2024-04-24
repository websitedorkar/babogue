"use client";
import React from 'react';
import LOGO from './img/logo.svg';
import Image from 'next/image';
import { productsdata } from "./data.products";
import ProductCard from '@/components/Cards/ProductCard';

const SleepSeries = () => {
    return (
        <section className='py-[40px] md:py-[100px] bg-white relative'>
            <div className="container">
                <div className="text-center mb-[50px]">
                    <div className='max-w-[821px] mx-auto text-base leading-[1.2]'>
                        <Image src={LOGO} alt="logo" className='max-w-[170px] md:max-w-[250px] inline-block mb-3' />
                        <p>We have helped thousands of families globally achieve the Gift of Sleep in their homes. In fact, 94% of families who use our Sleep Series courses report better sleep as a result.</p>
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr)_)] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr)_)] gap-y-[35px] gap-[15px] text-center">
                    {productsdata && productsdata.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default SleepSeries;