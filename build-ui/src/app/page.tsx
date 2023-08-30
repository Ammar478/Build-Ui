"use client"
import { Card, HeaderTitle } from '../components';
import {PieChartWrapper} from '@/components';
import React from 'react';

export default function Home()
{
  const [sorted,setSorted]=React.useState<boolean>(false)
  return (

    <main className="flex min-h-screen flex-col justify-between p-24">
      <header className='flex flex-row justify-between'>
<HeaderTitle title='BUILD UI'/>
      </header>

      <div style={{height:'30vh'}} >
        <PieChartWrapper />
      </div>
      <button onClick={()=>setSorted(!sorted)}>sorted</button>
      
<Card title={'sss'} description={'dd'} />

      </main>

  )
}
