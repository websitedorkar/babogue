import React, { useState } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '../ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SearchForm from '@/forms/SearchForm';
import BUTTON_SEARCH from './img/button-search.svg';

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-1rem' },
};

const Search: React.FC = () => {
    const isSmallScreen: boolean = useMediaQuery('(max-width: 1024px)');
    const [showForm, setShowForm] = useState<boolean>(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            {isSmallScreen ? (
                <>
                    <Button variant={'ghost'} className="p-0 h-auto" onClick={toggleForm}>
                        <Image src={BUTTON_SEARCH} alt={'search'} />
                    </Button>

                    <motion.div
                        animate={showForm ? 'open' : 'closed'}
                        variants={variants}
                        className={`absolute top-[calc(100%+2rem)] w-[calc(100%-2rem)] ${showForm ? 'visible' : 'invisible'}`}
                    >
                        <div className="bg-white rounded-lg before:content-[''] before:absolute before:w-0 before:h-0 before:-top-[9px] before:start-4 before:border-b-[10px] before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid">
                            <SearchForm />
                        </div>
                    </motion.div>
                </>
            ) : (
                <SearchForm />
            )}
        </>
    );
};

export default Search;
