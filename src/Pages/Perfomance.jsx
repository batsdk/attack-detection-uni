import React from "react";
import "../assets/styles/Perfomance.css";

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const Perfomance = () => {
  const data = [
    {
      name: "1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "3",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "4",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "5",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "6",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="center-all content-height">
        <h1 className="overview-header">Perfomance of Attack Detection</h1>
        <LineChart
          width={890}
          height={520}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </>
  );
};

export default Perfomance;
