import React from 'react';
import { PieChart } from '@/components'
import {PieDataDummy} from '@/mock'

export const PieChartWrapper:React.FC=()=> {
    return <div  className='p-3 absolute flex flex-row rounded-lg bg-opacity-5 bg-purple-100 h-1/3 w-1/4  justify-start flex-nowrap' >
        <div style={{ height: '300px' ,width:'50%'}}>
            <PieChart data={PieDataDummy} sortByValue={false} />
            </div>
    </div>
}