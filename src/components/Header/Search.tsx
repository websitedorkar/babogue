import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SearchForm from '@/forms/SearchForm';
import BUTTON_SEARCH from './img/button-search.svg';

const Search: React.FC = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    const toggleForm = () => {
        setShowForm(!showForm);
    };


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node) &&
                formRef.current &&
                !formRef.current.contains(event.target as Node)
            ) {
                setShowForm(false);
            }
        }

        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className='flex lg:hidden'>
                <Button variant={'ghost'} className="p-0 h-auto" onClick={toggleForm} ref={buttonRef}>
                    <Image src={BUTTON_SEARCH} alt={'search'} />
                </Button>

                <motion.div
                    animate={showForm ? 'open' : 'closed'}
                    variants={{
                        open: { opacity: 1, y: 0 },
                        closed: { opacity: 0, y: '-1rem' },
                    }}
                    className={`absolute top-[calc(100%+1.25rem)] start-0 w-full ${showForm ? 'visible' : 'invisible'}`}
                >
                    <div className="container" ref={formRef}>
                        <div className="relative bg-white rounded-[16px] before:content-[''] before:absolute before:w-0 before:h-0 before:-top-[9px] before:start-4 before:border-b-[10px] before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid">
                            <SearchForm />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="hidden lg:block">
                <SearchForm/>
            </div>
        </>
    );
};

export default Search;
