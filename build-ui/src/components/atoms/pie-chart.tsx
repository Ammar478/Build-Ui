import React from "react";
import {ResponsivePie} from "@nivo/pie";


interface ChartData
{
    id: string | number,
    value:number
}

export interface MayHaveLabel {
    label?: string | number;
}

interface Props
{
    data: MayHaveLabel[]
    sortByValue: boolean
}
 export const PieChart:React.FC<Props> = ({data,sortByValue=false}) =>
{
     return (
         <ResponsivePie
        data={data}
        margin={{
            top: 20, right: 20, bottom: 20, left: 20
        }}
        startAngle={-180}
        endAngle={360}
        sortByValue={sortByValue}
        innerRadius={0.8}
        padAngle={2}
        cornerRadius={11}
        activeInnerRadiusOffset={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel2' }}
          borderColor={{ theme: 'grid.line.stroke' }}
        arcLinkLabel="value"
        arcLinkLabelsSkipAngle={14}
        arcLinkLabelsTextOffset={7}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsDiagonalLength={13}
        arcLinkLabelsStraightLength={36}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.55}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'row',
        //         justify: false,
        //         translateX: 0,
        //         translateY: 56,
        //         itemsSpacing: 0,
        //         itemWidth: 100,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     symbolSize: 20,
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
    )
 }

