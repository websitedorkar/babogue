"use client";
import React from 'react';
import { productsdata } from "./data.products";
import ProductCard from '@/components/Cards/ProductCard';

const RecentOrders = () => {
    return (
        <section className='pb-[60px] lg:pb-[100px] bg-white'>
            <div className="container">
                {/* Section Heading */}
                <div className="section-title mb-10 text-center">
                    <h2 className='display-2'>Courses Your Ordered Before</h2>
                </div>
                
                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr)_)] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr)_)] gap-y-6 lg:gap-y-10 gap-[15px] text-center">
                    {productsdata && productsdata.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentOrders