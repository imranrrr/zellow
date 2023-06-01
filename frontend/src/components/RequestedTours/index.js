import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../Header/Index";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, email, Phone, message, time, date) {
  return { name, email, Phone, message, time, date };
}

const rows = [
  createData(
    "TEST",
    "TEST@gmail.com",
    "03004485888",
    "This is TEST",
    "4:39pm",
    "2,2,2023"
  ),
  createData(
    "TEST1",
    "TEST1@gmail.com",
    "03004485876",
    "This is TEST1",
    "4:39pm",
    "2,2,2023"
  ),
  createData(
    "TEST2",
    "TEST2@gmail.com",
    "03004485876",
    "This is TEST2",
    "4:40pm",
    "2,2,2023"
  ),
  createData(
    "TEST3",
    "TEST3@gmail.com",
    "03004485876",
    "This is TEST3",
    "4:43pm",
    "2,2,2023"
  ),
  createData(
    "TEST4",
    "TEST4@gmail.com",
    "03004485876",
    "This is TEST4",
    "4:35pm",
    "2,2,2023"
  ),
];
export default function CustomizedTables() {
  return (
    <>
      <Header/>
    <div style={{ padding: "3rem" }}>
      
      <div>
        <h3>Requested Tours</h3>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone</StyledTableCell>
                <StyledTableCell align="left">Message</StyledTableCell>
                <StyledTableCell align="left">Time</StyledTableCell>
                <StyledTableCell align="left">Date</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">{row.Phone}</StyledTableCell>
                  <StyledTableCell align="left">{row.message}</StyledTableCell>
                  <StyledTableCell align="left">{row.time}</StyledTableCell>
                  <StyledTableCell align="left">{row.date}</StyledTableCell>
                  <StyledTableCell align="left">
                    <div style={{ display: "flex" }}>
                      <div>
                        <EditIcon />
                      </div>
                      <div>
                        <DeleteIcon />
                      </div>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
    </>
  );
}
