'use client'
import React from 'react';

export const HeaderTitle: React.FC<{title:string}> = ({title}) =>
{ 
    return    <div className='text-3xl font-extrabold'>
        <div className='bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 to-violet-500 '>
{title}
        </div>
   </div>
}