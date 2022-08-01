import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, StackingColumnSeries  } from '@syncfusion/ej2-react-charts';


import { useStateContext } from '../../contexts/Context';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
interface StackedProps {
  id : string
  width?: string
  height?: string
  data:{
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
}
};

export function Stacked({ id, width, height, data } : StackedProps) {
  const { currentMode } = useStateContext();
  const options = {
    plugins: {
      datalabels: {
        display:false
      },
      legend: {
          labels: {
            font: {
                weight:"bold"
            },
            color: currentMode === 'Dark' ? '#fff' : '#33373E'
        },
        position: 'bottom' as const
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
      
    },
  };
  
  return (
    <Bar id={id} width={width} height={height} options={options} data={data} />
  );
};