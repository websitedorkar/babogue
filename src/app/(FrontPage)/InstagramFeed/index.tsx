import React from 'react';
import BG from './img/bg.png';
import Pattern from './img/bg-pattern.svg';
import { feed } from './data.feed';
import Image from 'next/image';

const InstagramFeed = () => {
    return (
        <section className='section bg-white bg-pattern py-[100px] relative  overflow-hidden' style={{ backgroundImage: `url(${Pattern.src})` }}>
            <div className="text-center mb-6">
                <h2 className='text-5xl font-bold font-quicksand text-dark mb-1'>@babogue_sleep</h2>
                <h5 className='text-xl mb-0'>Hop over to Instagram and tag us babogue_sleep or use #babogue_sleep</h5>
            </div>
            <div className="container">
                {feed &&
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {feed.map(item => (
                            <div key={item.id} className="grid__item">
                                {item.thumbnail && <Image src={item.thumbnail} alt={item.title} />}
                            </div>
                        ))}
                    </div>}
            </div>
        </section>
    )
}

export default InstagramFeed;