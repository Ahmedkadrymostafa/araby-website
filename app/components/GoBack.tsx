'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';

const GoBack: React.FC = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back(); // Navigate back to the previous page
    };

    return (
        <button onClick={handleBack} className='second-color flex items-center ml-auto mt-5 text-xl cursor-pointer font-semibold'>
            <IoMdArrowRoundBack className='mx-1' />
            الرجوع للصفحة السابقة
        </button>
    );
};

export default GoBack;
