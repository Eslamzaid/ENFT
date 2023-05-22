import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January ",
    ETH: 2400,
    amt: 2400,
  },
  {
    name: "February ",
    ETH: 1398,
    amt: 2210,
  },
  {
    name: "March ",
    ETH: 9800,
    amt: 2290,
  },
  {
    name: "April ",
    ETH: 3908,
    amt: 2000,
  },
  {
    name: "May ",
    ETH: 4800,
    amt: 2181,
  },
  {
    name: "June ",
    ETH: 3800,
    amt: 2500,
  },
  {
    name: "July ",
    ETH: 4300,
    amt: 2100,
  },
];

export default class lineData extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="95%" height="95%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#8884d8" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ETH"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
