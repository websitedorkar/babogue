import React from 'react';
import BG from './img/bg.png';
import Image__1 from './img/1.png';
import Image__2 from './img/2.png';
import Image__3 from './img/3.png';
import Image__4 from './img/4.png';

const InstagramFeed = () => {
    return (
        <section className='section bg-white bg-cover bg-top-center py-[150px] relative' style={{
            backgroundImage: `url(${BG.src})`
        }}>
            <div className="section-heading text-center mb-4">
                <h2 className='h2'>@babogue_sleep</h2>
                <h5 className='text-3xl'>Hop over to Instagram and tag us babogue_sleep or use #babogue_sleep</h5>
            </div>
            <div className="container">
                <div className="grid grid-cols-4 gap-4">
                    <div className="grid__item">
                        <img src={Image__1.src} alt="Instagram" />
                    </div>
                    <div className="grid__item">
                        <img src={Image__2.src} alt="Instagram" />
                    </div>
                    <div className="grid__item">
                        <img src={Image__3.src} alt="Instagram" />
                    </div>
                    <div className="grid__item">
                        <img src={Image__4.src} alt="Instagram" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InstagramFeed