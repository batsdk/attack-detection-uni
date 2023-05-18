import React, { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../assets/styles/Overview.css";

const Overview = () => {
  function createData(seq_no, date, time, attack_type, model_id) {
    return { seq_no, date, time, attack_type, model_id };
  }

  const modelColors = {
    data_poison: '#088395',
    model_poison: '#F6BA6F',
    byzantine: '#FF6969',
    sybil: '#865DFF',

  }

  const [barChartData, setBarChartData] = useState([
    { name: "Data \n Poisoning", attacks: 40, color: modelColors.data_poison },
    { name: "Model \n Poisoning", attacks: 12, color: modelColors.model_poison },
    { name: "Byzantine", attacks: 31, color: modelColors.byzantine },
    { name: "Sybil", attacks: 27, color: modelColors.sybil },
  ]);

  const [attackTabeRows, setAttackTabeRows] = useState([
    createData(1, "2022/1/14", 6.0, "Data Poisoning", 4),
    createData(2, "2023/12/10", 9.0, "Sybil", 43),
    createData(3, "2021/10/30", 16.0, "Sybil", 60),
    createData(4, "2018/1/14", 3.7, "Byzantine", 43),
    createData(5, "2020/10/22", 16.0, "Sybil", 39),
  ]);

  const [performancePieChart, setPerformancePieChart] = useState([
    { name: "Data Poisoning", value: 400, color : modelColors.data_poison },
    { name: "Model Poisoning", value: 300, color : modelColors.model_poison },
    { name: "Byzantine", value: 300, color : modelColors.byzantine},
    { name: "Sybil", value: 200, color : modelColors.sybil },
  ]);

  return (
    <div>
      <h1 className="overview-header">Overview of All Attacks</h1>

      <div className="overview-grid">
        {/* Attack Bar Chat */}
        <BarChart width={550} height={300} data={barChartData}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="attacks">
            {barChartData.map(({ color }, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Bar>
        </BarChart>

        {/* Attack Table */}
        <div className="table-container">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 450, maxWidth: 500 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Seq. No.</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Attack Type</TableCell>
                  <TableCell align="right">Model ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attackTabeRows.map((row) => (
                  <TableRow
                    key={row.seq_no}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.seq_no}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right">{row.attack_type}</TableCell>
                    <TableCell align="right">{row.model_id}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Attack Perfomance Pie Chart */}
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={performancePieChart}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#22c55e"
            label
          >
          {performancePieChart.map(({color}, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Card Details */}
            <div className="card-details">
              <div className="single-card">
                <h3 className="card-h3" >12</h3>
                <h4 className="card-h4" >Attack Count</h4>
              </div>
              <div className="single-card">
                <h3 className="card-h3" >12</h3>
                <h4 className="card-h4" >Attack Count</h4>
              </div>
            </div>

      </div>
    </div>
  );
};

export default Overview;
