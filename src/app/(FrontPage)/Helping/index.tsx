import React from 'react';
import { faqsdata } from './data.faqs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Helping = () => {
    return (
        <section className='py-[100px] bg-white relative overflow-hidden'>
            <div className="container">
                {/* Section Heading */}
                <div className="section-title mb-10 text-center">
                    <h2 className='text-4xl xl:text-5xl leading-9 xl:leading-11 tracking-tight font-quicksand font-bold font-dark mb-2'>Is it you? We can help you!</h2>
                </div>

                {faqsdata && (
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mb-[70px]'>
                        {faqsdata.map(item => (
                            <div className={`flex gap-2 ${item.className || ''}`} key={item.id}>
                                {item.icon && <span className='w-[60px] min-w-[60px]'><Image src={item.icon} alt={'title'} /></span>}
                                {item.text && <div className='tracking-tight text-sm' dangerouslySetInnerHTML={{ __html: item.text }}></div>}
                            </div>
                        ))}
                    </div>
                )}

                <div>
                    <div className="max-w-[470px] text-center mx-auto">
                        <h5 className='font-base font-bold text-dark mb-6'>Are you returning to work and would like to establish a healthy sleep routine for your child?</h5>
                        <Link href="#"><Button variant={'default'} size={'lg'} className='uppercase'>One To one</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Helping