import { useContext } from "react";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Context } from "../../contexts/Context";

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
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

export function LineChart({ data }: dataLineChartProps) {
  const { currentMode } = useContext(Context);
  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        labels: {
          font: {
            weight: "bold",
          },
          color: currentMode === "Dark" ? "#fff" : "#33373E",
        },
        position: "bottom" as const,
      },
      title: {
        display: false,
      },
    },
  };

  return <Line options={options} data={data} />;
}
