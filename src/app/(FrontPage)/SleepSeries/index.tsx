import React from 'react';
import LOGO from './logo.svg';
import Image from 'next/image';
import { productsdata } from "./data.products";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const SleepSeries = () => {
    return (
        <section className='py-[100px] bg-white relative'>
            <div className="container">
                <div className="text-center mb-10">
                    <div className='max-w-[1100px] mx-auto'>
                        <Image src={LOGO} alt="logo" className='inline-block' />
                        <p>We have helped thousands of families globally achieve the Gift of Sleep in their homes. In fact, 94% of families who use our Sleep Series courses report better sleep as a result.</p>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-[30px] text-center">
                    {productsdata && productsdata.map(product => (
                        <div className="border border-solid border-border rounded-[24px] p-4 pt-6 relative bg-white" key={product.id}>
                            {product.badge && <div className=' absolute -top-[20px] start-0 w-full'><span className="text-[16px] bg-primary inline-flex items-center rounded-b-xl px-6 min-w-[165px] justify-center py-2 leading-4 min-h-[36px] text-white relative before:content-[''] before:z-[-1] before:absolute before:top-0 before:w-0 before:h-0 before:border-l-[13px] before:border-l-[#947761] before:border-opacity-50 before:-end-[13px] before:border-t-[20px] before:border-y-transparent before:border-solid                  after:content-[''] after:z-[-1] after:absolute after:top-0 after:w-0 after:h-0 after:border-r-[13px] after:border-r-[#947761] after:border-opacity-50 after:-start-[13px] after:border-t-[20px] after:border-y-transparent after:border-solid">{product.badge}</span></div>}

                            {product.banner && <div className='w-[155px] h-[155px] min-[155px] border-[#C1DED5] my-4 rounded-full flex items-center justify-center p-[10px] mx-auto border-dashed border-2'>
                                <Image src={product.banner} className='inline-block' alt={product.name} />
                            </div>}

                            {product.name && <h2 className='text-3xl font-bold text-dark mb-3'>{product.name}</h2>}
                            {product.description && <div className='text-xs font-normal text-dark'>{product.description}</div>}

                            <hr className='my-3' />

                            <div className="flex items-center justify-between gap-2 py-2">
                                {product.price_from && <span className='border border-border px-4 font-roboto py-2 inline-flex items-center justify-center rounded-full text-[18px] font-normal text-black uppercase tracking-tight'>FROM €{product.price_from}</span>}
                                {product.price_from && <Link href='#' className='flex-grow'><Button className='w-full uppercase tracking-tight' size={'sm'}>Buy Now</Button></Link>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SleepSeries;