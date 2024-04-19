import React from 'react';
import Image from 'next/image';
import { productsdata } from "./data.products";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


const RecentOrders = () => {
    return (
        <section className='pb-[100px] bg-white'>
            <div className="container">
                {/* Section Heading */}
                <div className="section-title mb-10 text-center">
                    <h2 className='text-5xl font-quicksand font-bold font-dark mb-2'>Courses Your Ordered Before</h2>
                </div>


                <div className="grid grid-cols-5 gap-[30px] text-center">
                    {productsdata && productsdata.map(product => (
                        <div className="border border-solid border-border rounded-[24px] p-4 pt-6 relative bg-white" key={product.id}>

                            {product.banner && <div className={`w-[155px] h-[155px] min-[155px] border-[#C1DED5] my-4 rounded-full flex items-center justify-center p-[10px] mx-auto border-dashed border-2 ${product.purchased ? '' : 'grayscale opacity-35'}`}>
                                <Image src={product.banner} className='inline-block' alt={product.name} />
                            </div>}

                            {product.name && <h2 className='text-3xl font-bold text-dark mb-3'>{product.name}</h2>}
                            {product.description && <div className='text-xs font-normal text-dark'>{product.description}</div>}

                            <hr className='my-3' />
                            <div className="flex items-center justify-between gap-2 py-2">
                                {product.purchased ?
                                    <Link href='#' className='flex-grow block'><Button className='w-full uppercase tracking-tight' size={'sm'}>ACCESS THE COURSE</Button></Link>
                                    :
                                    <>
                                        {product.price_from && <span className='border border-border px-4 font-roboto py-2 inline-flex items-center justify-center rounded-full text-[18px] font-normal text-black uppercase tracking-tight'>FROM €{product.price_from}</span>}
                                        {product.price_from && <Link href='#' className='flex-grow'><Button className='w-full uppercase tracking-tight' size={'sm'}>Buy Now</Button></Link>}
                                    </>
                                }
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentOrders