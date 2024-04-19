"use client";
import React, { useState } from 'react';

export const SearchForm: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<string | null>(null);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchQuery(value);

        // Here you would perform your search logic using value
        // For demonstration purposes, let's just set the search result to the query itself
        setSearchResult(value);
    };

    return (
        <form className='border border-border rounded-full flex items-center gap-3 max-w-[390px] px-7 py-2 h-[65px]'>
            <input
                type='text'
                value={searchQuery}
                onChange={handleSearch}
                className='w-full border-none shadow-none outline-none'
                placeholder="Search course..." />
            <button type='button' className='p-0 shadow-none border-0'>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.137 0.0350037C9.35504 0.171972 7.62916 0.720574 6.09516 1.63765C4.56115 2.55472 3.26087 3.81524 2.29663 5.32004C1.33238 6.82484 0.730469 8.53287 0.538253 10.3097C0.346038 12.0866 0.56876 13.8838 1.1889 15.56C1.80903 17.2362 2.80966 18.7456 4.11206 19.9695C5.41446 21.1935 6.98311 22.0984 8.69457 22.6133C10.406 23.1282 12.2136 23.2389 13.9751 22.9368C15.7366 22.6346 17.404 21.9278 18.846 20.872L19.489 20.387L22.802 23.699C26.009 26.905 26.126 27.011 26.457 27.02C26.6606 27.0312 26.8624 26.9774 27.0334 26.8663C27.2044 26.7552 27.3356 26.5926 27.408 26.402C27.663 25.792 27.626 25.745 24.108 22.233L20.866 18.993L21.283 18.442C27.205 10.617 20.962 -0.704993 11.133 0.0360069M13.554 2.15401C15.289 2.43755 16.9119 3.19513 18.2433 4.34308C19.5748 5.49103 20.5631 6.98467 21.099 8.65901C21.6348 10.3333 21.6975 12.1232 21.28 13.831C20.8625 15.5387 19.9812 17.0978 18.7332 18.336C17.4853 19.5743 15.9194 20.4435 14.2085 20.8477C12.4976 21.2519 10.7082 21.1753 9.0381 20.6264C7.36798 20.0774 5.88208 19.0776 4.74453 17.7372C3.60698 16.3969 2.86204 14.7682 2.59202 13.031C2.36584 11.5428 2.49426 10.0222 2.96681 8.593C3.43936 7.1638 4.2427 5.86637 5.31144 4.80631C6.38017 3.74625 7.68411 2.95351 9.11711 2.49262C10.5501 2.03173 12.0717 1.91571 13.558 2.15401" fill="#374D59" />
                </svg>
            </button>

            {searchResult && <div>Search result: {searchResult}</div>}
        </form>
    );
};
