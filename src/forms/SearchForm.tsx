"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import SearchIcon from './img/search.svg';

interface FormData {
  searchQuery: string;
}
const SearchForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onSubmit = (formData: FormData) => {
    const { searchQuery } = formData;

    // Check if the search query is empty
    if (!searchQuery.trim()) {
      alert('Please enter a search query.');
      return; // Stop further execution
    }

    // Here you would perform your search logic using searchQuery
    console.log(searchQuery);

    // Show alert with the submitted search query
    alert(`Submitted search query: ${searchQuery}`);

    setSearchQuery('');
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white border border-border rounded-[16px] lg:rounded-full inline-flex items-center gap-3 px-6 py-2 w-full lg:w-auto h-[55px] lg:h-[48px]'>
      <input
        type='text'
        {...register('searchQuery')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='border-none shadow-none outline-none bg-transparent w-full lg:w-auto lg:min-w-[140px] lg:max-w-[140px] transition-all ease-linear duration-200 focus:lg:min-w-[200px] focus:lg:max-w-[200px]'
        placeholder='Search course...'
      />
      <button type='submit' className='p-0 shadow-none border-0 outline-none'>
        <Image src={SearchIcon} alt='Submit Now' className='w-[20px] min-w-[20px]' />
      </button>
    </form>
  );
};

export default SearchForm;
