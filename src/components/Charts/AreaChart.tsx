import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Context } from "../../contexts/Context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
interface AreaProps {
  id: string;
  height: string;
  width: string;
  currentColor: string;
  data: {
    labels: string[];
    datasets: {
      fill: boolean;
      label: string;
      data: number[];
    }[];
  };
}

export function AreaChart({
  id,
  data,
  currentColor,
  height,
  width,
}: AreaProps) {
  const { currentMode } = useContext(Context);

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      responsive: true,
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    elements: {
      line: {
        backgroundColor: currentMode === "Dark" ? "#fff" : "#33373E",
        borderColor: currentColor,
      },
    },
  };

  return (
    <Line id={id} height={height} width={width} options={options} data={data} />
  );
}
