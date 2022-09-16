import React, { useState } from 'react'
import { SparklineType, SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/Context';

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
import { Line } from 'react-chartjs-2';
import faker from 'faker';
import { contentControlEvent } from '@syncfusion/ej2/documenteditor';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


interface SparkLineProps {
  id?: string
  height?: string
  currentColor: string
  width?: string
  data: {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor ?: string
        backgroundColor ?: string
    }[];
}
};

  export function SparkLine({ id, height, width, data, currentColor} : SparkLineProps) {
  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display:false
      },
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        display: false
      },
      x: {
        display: false
      }
    },
    elements: {
        line: {
          backgroundColor : currentColor,
          borderColor : currentColor
        }
    }
  };
  
  // data.datasets.map((item)=>{
  //   item.backgroundColor = currentColor
  //   item.borderColor = currentColor
  // });
  
  return (
    <Line id={id} height={height} width={width} options={options} data={data} />
  );
}