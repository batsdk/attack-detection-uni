import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../assets/styles/Overview.css";
import "../assets/styles/Perfomance.css";

const createData = (seq_no, date, time, attack_type, model_id) => {
  return { seq_no, date, time, attack_type, model_id };
};

const Logs = () => {
  const logsData = [
    createData(1, "2022/1/14", 6.0, "Data Poisoning", 4),
    createData(2, "2023/12/10", 9.0, "Sybil", 43),
    createData(3, "2021/10/30", 16.0, "Sybil", 60),
    createData(4, "2018/1/14", 3.7, "Byzantine", 43),
    createData(5, "2020/10/22", 16.0, "Sybil", 39),
    createData(1, "2022/1/14", 6.0, "Data Poisoning", 4),
    createData(2, "2023/12/10", 9.0, "Sybil", 43),
    createData(4, "2018/1/14", 3.7, "Byzantine", 43),
    createData(5, "2020/10/22", 16.0, "Sybil", 39),
  ];

  return (
    <>
      {/* Attack Table */}
      <div className="center-all content-height">
      <h1 className="overview-header">Logs of All Attacks</h1>
        <div className="table-container">
          <TableContainer className="no-shadow" component={Paper}>
            <Table
              sx={{ minWidth: 450, maxWidth: 500 }}
              aria-label="simple table"
              className="no-shadow"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Sequence</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Attack Type</TableCell>
                  <TableCell align="right">Model #ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {logsData.map((row, index) => (
                  <TableRow
                    key={index}
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
    </>
  );
};

export default Logs;
