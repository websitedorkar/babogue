import React from 'react';
import BG from './img/bg.png';
import { feed } from './data.feed';
import Image from 'next/image';

const InstagramFeed = () => {
    return (
        <section className='section bg-white bg-cover bg-top-center py-[150px] relative' style={{ backgroundImage: `url(${BG.src})` }}>
            <div className="section-heading text-center mb-4">
                <h2 className='h2'>@babogue_sleep</h2>
                <h5 className='text-3xl'>Hop over to Instagram and tag us babogue_sleep or use #babogue_sleep</h5>
            </div>
            <div className="container">
                {feed &&
                    <div className="grid grid-cols-4 gap-4">
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