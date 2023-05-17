import React, { useState } from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

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
  
  const [barChartData, setBarChartData] = useState([
    { name: "Data Poisoning", attacks: 40 },
    { name: "Model Poisoning", attacks: 12 },
    { name: "Byzantine", attacks: 31 },
    { name: "Sybil", attacks: 27 },
  ])

  const [attackTabeRows, setAttackTabeRows] = useState([
    createData(1, "2022/1/14", 6.0, "Data Poisoning", 4),
    createData(2, "2023/12/10", 9.0, "Sybil", 43),
    createData(3, "2021/10/30", 16.0, "Sybil", 60),
    createData(4, "2018/1/14", 3.7, "Byzantine", 43),
    createData(5, "2020/10/22", 16.0, "Sybil", 39),
  ])

  return (
    <div>
      <h1 className="overview-header" >Overview of All Attacks</h1>

      <div className="overview-grid">
        {/* Attack Bar Chat */}
        <BarChart width={450} height={300} data={barChartData}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="attacks" fill="#8884d8" barSize={30} />
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
      </div>
    </div>
  );
};

export default Overview;
