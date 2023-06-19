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

import { makeStyles } from "@mui/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../assets/styles/Overview.css";

const Overview = () => {
  function createData(attack_type, date, time) {
    return { attack_type, date, time };
  }

  const modelColors = {
    data_poison: "#088395",
    model_poison: "#F6BA6F",
    byzantine: "#FF6969",
    sybil: "#865DFF",
  };

  const [barChartData, setBarChartData] = useState([
    { name: "Data \n Poisoning", attacks: 40, color: modelColors.data_poison },
    {
      name: "Model \n Poisoning",
      attacks: 12,
      color: modelColors.model_poison,
    },
    { name: "Byzantine", attacks: 31, color: modelColors.byzantine },
    { name: "Sybil", attacks: 27, color: modelColors.sybil },
  ]);

  const [attackTabeRows, setAttackTabeRows] = useState([
    createData("Data Poisoning", "2022/1/14", "22.10"),
    createData("Sybil", "2023/12/10", "09.00", ),
    createData("Sybil", "2021/10/30", "16.00", ),
    createData("Byzantine", "2018/1/14", "13.17", ),
    createData("Sybil", "2020/10/22", "15.09",),
  ]);

  const [performancePieChart, setPerformancePieChart] = useState([
    { name: "Data Poisoning", value: 400, color: modelColors.data_poison },
    { name: "Model Poisoning", value: 300, color: modelColors.model_poison },
    { name: "Byzantine", value: 300, color: modelColors.byzantine },
    { name: "Sybil", value: 200, color: modelColors.sybil },
  ]);

  const useStyles = makeStyles({
    tableContainer: {
      backgroundColor: "#333", // Set the background color for the table container
    },
    tableHeaderCell: {
      color: "#fff", // Set the text color for table header cells
    },
    tableCell: {
      color: "#fff", // Set the text color for table cells
    },
    table: {
      boxShadow: 'none',
    },
  });

  const classes = useStyles();

  return (
    <div className="overview-bg">
      <h1 className="overview-header">Overview of All Attacks</h1>

      <div className="overview-grid">
        {/* Attack Bar Chat */}
        <BarChart width={550} height={300} data={barChartData}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="attacks" barSize={25} >
            {barChartData.map(({ color }, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Bar>
        </BarChart>

        {/* Attack Table */}
        <div className="table-container">
          <TableContainer className="no-shadow" component={Paper}>
            <Table
              sx={{ minWidth: 450, maxWidth: 500 }}
              aria-label="simple table"
              className="no-shadow"
            >
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>
                    Attack Type
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell} align="right">
                    Date
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell} align="right">
                    Time
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {attackTabeRows.map((row,index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.attack_type}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      {row.date}
                    </TableCell>
                    <TableCell className={classes.tableCell} align="right">
                      {row.time}
                    </TableCell>
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
            {performancePieChart.map(({ color }, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Card Details */}
        <div className="card-details">
          <div className="single-card">
            <h3 className="card-h3">12</h3>
            <h4 className="card-h4">Attack Count</h4>
          </div>
          <div className="single-card">
            <h3 className="card-h3">04</h3>
            <h4 className="card-h4">Client Num.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
