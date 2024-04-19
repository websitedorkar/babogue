'use client';

import React, { useState } from 'react';
import PlaneCircle from './img/plane-submit.svg';
import Image from 'next/image';

export const NewsletterForm: React.FC<{ description: string, placeholder: string }> = ({ description, placeholder }) => {
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if email is empty
        if (!email.trim()) {
            alert('Please enter your email address.');
            return; // Stop further execution
        }

        setLoading(true);
        setSuccess(false);
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            // Clear email after successful submission
            setEmail('');
            // Reset success state after 5 seconds
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }, 2000);
    };

    return (
        <div className='max-w-[275px] w-full space-y-5'>
            <form onSubmit={handleSubmit} className='border border-border rounded-full flex items-center mb-4 gap-3 ps-7 pe-2 py-2 h-[56px]'>
                <input
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    className='w-full border-none shadow-none outline-none bg-transparent text-xs text-white font-light placeholder:text-white'
                    placeholder={placeholder}
                />
                <button type='submit' className='p-0 shadow-none border-0 outline-none'>
                    <Image src={PlaneCircle} alt='Submit Now' />
                </button>
            </form>
            {loading && <div className='text-xs leading-6'>Please wait...</div>}
            {success && (
                <div className='text-xs leading-7 font-medium'>
                    Successfully subscribed! <br /> Thank you for subscribing.
                </div>
            )}
            {description && <div className='text-xs font-light leading-7'>{description}</div>}
        </div>
    );
};
