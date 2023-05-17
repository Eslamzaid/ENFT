import { useContext } from "react";
import { DarkLightContext } from "../MarketP";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
// import

//#262049
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "ETH Price",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function lineData() {
  const darkLight = useContext(DarkLightContext);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Price",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(108,81,220)",
        // backgroundColor: "rgb(37,30,71)",
        backgroundColor: `${
          darkLight.darkMode ? "rgb(37,30,71)":"rgb(240,237,254)"
        }`,
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default lineData;
