import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/Context';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut as DoughnutComponent } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
interface DoughnutProps {
  id?: string
  data?: { x: string; y: number; text: string;}[]
  legendVisiblity ?: boolean
  height ?: string
};

export function Doughnut({id, data, legendVisiblity, height } : DoughnutProps) {
  
  const data2 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [25, 25, 35, 15],
        backgroundColor: [
          '#e56590',
          '#00bdae',
          '#357cd2',
          '#404041',
        ],
        borderColor: [
          '#e56590',
          '#00bdae',
          '#357cd2',
          '#404041',
        ],
        borderWidth: 1,
      },
    ],
  };

const options = {
  plugins: {
    legend: {
      display:false
    },
    datalabels: {
      formatter: (value:string) => {
        return value + '%';
      },
      font: {
        size: 12,
        weight:600
      },
      color: '#fff'
    },
  responsive: true,
  scales: {
    y: {
      display: false
    },
    x: {
      display: false
    }
  },
  
}
};

  return (
    <DoughnutComponent data={data2} options={options} />
    // <AccumulationChartComponent
    //   id={id}
    //   legendSettings={{ visible: legendVisiblity, background: 'white' }}
    //   height={height}
    //   background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    //   tooltip={{ enable: true }}
    // >
    //   <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
    //   <AccumulationSeriesCollectionDirective>
    //     <AccumulationSeriesDirective
    //       name="Sale"
    //       dataSource={data}
    //       xName="x"
    //       yName="y"
    //       innerRadius="40%"
    //       startAngle={0}
    //       endAngle={360}
    //       radius="70%"
    //       explode
    //       explodeOffset="10%"
    //       explodeIndex={2}
    //       dataLabel={{
    //         visible: true,
    //         name: 'text',
    //         position: 'Inside',
    //         font: {
    //           fontWeight: '600',
    //           color: '#fff',
    //         },
    //       }}
    //     />
    //   </AccumulationSeriesCollectionDirective>
    // </AccumulationChartComponent>
  );
}