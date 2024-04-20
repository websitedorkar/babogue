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
    <form onSubmit={handleSubmit(onSubmit)} className='border border-border rounded-lg lg:rounded-full flex items-center gap-3 lg:max-w-[290px] px-6 py-2 h-[48px]'>
      <input
        type='text'
        {...register('searchQuery')}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='w-full border-none shadow-none outline-none bg-transparent'
        placeholder='Search course...'
      />
      <button type='submit' className='p-0 shadow-none border-0 outline-none'>
        <Image src={SearchIcon} alt='Submit Now' className='w-[20px] min-w-[20px]' />
      </button>
    </form>
  );
};

export default SearchForm;
