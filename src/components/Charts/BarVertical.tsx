import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface BarProps {
    id:string
    width?: string
    height?: string
    data: {
      labels: string[];
      datasets: {
          label: string;
          data: number[];
          backgroundColor: string;
      }[];
    }
  }

export function BarVertical({ id, width, height, data } : BarProps) {
    const options = {
      responsive: true,
      scales: {
        y: {
          display: false
        },
        x: {
          display: false
        }
      },
      plugins: {
        datalabels: {
          display:false
        },
        legend: {
          display:false
        },
        title: {
          display: false,
        },
      },
    };


  return (
    <Bar id={id} height={height} width={width} options={options} data={data} />
  )
}