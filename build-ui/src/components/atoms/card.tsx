"use client"

import React from 'react'

interface Props
{
    title: string | null;
    description: string | null;
    linkTo?: string | null;

}
export const Card:React.FC<Props> = ({title,description,linkTo }) =>
{
    return (
        <div className='max-w-2xl rounded-md ring-1 ring-purple-300/50 sm:w-40 h-40 hover:shadow-lg hover:shadow-purple-500 hover:-translate-y-2 transition-all duration-200'>

            <div className='p-5'>

            <div className='text-2xl font-bold tracking-tight text-purple-100-900'>{title}</div>
            <p className='mt-6 text-base leading-7 text-red-300-600'>{description}</p>
            
        </div>
    </div>
)}