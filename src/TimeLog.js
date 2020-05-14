import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


const columns = [
  { id: "time in", label: "Time In", minWidth: 80 },
  { id: "time out", label: "Time Out", minWidth: 80 },
  {
    id: "worked time",
    label: "Worked Time (Hour)",
    minWidth: 50,
    align: "right",
  }
  
];

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: '#e3f2fd'
  },
  container: {
    maxHeight: 1400,
  }
});


export default function StickyHeadTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className={classes.container}>
            <TableRow >
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
              {props.clockIn.map((item,index) =>
                <TableRow>
                    <TableCell>
                        <p> {item.date} {item.time} </p>
                    </TableCell>
                    <TableCell>
                        <p> {props.clockOut[index].date} {props.clockOut[index].time} </p>
                    </TableCell>
                    <TableCell>
                        <p> {Math.round((props.clockOut[index].timeAtLogOut - item.timeAtLogIn)/1000/60/60).toFixed(2)} Unapproved </p>
                    </TableCell>
                </TableRow>)
              }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    
  );
}

