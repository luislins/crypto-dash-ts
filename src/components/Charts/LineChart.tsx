import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { Line } from 'react-chartjs-2';
import { useStateContext } from '../../contexts/Context';
import faker from 'faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface dataLineChartProps {
  data:{
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
  }
};

export function LineChart({ data } : dataLineChartProps) {
  const { currentMode } = useStateContext();
  const options = {
    responsive: true,
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
        },
      title: {
        display: false
      },
    },
  };

  return (
   <Line options={options} data={data} />
  );
}

