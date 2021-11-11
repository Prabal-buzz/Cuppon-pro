import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useStyles } from "./index.style";

const rows = [
  {
    date: "12.3.2020",
    payment: "Cash",
    discount: "500",
    total: "2500",
  },
  {
    date: "12.3.2020",
    payment: "Master Card",
    discount: 200,
    total: 2000,
  },
  {
    date: "12.3.2020",
    payment: "Credit Card",
    discount: 100,
    total: 540,
  },
  {
    date: "12.3.2020",
    payment: "Master Card",
    discount: 20,
    total: 160,
  },
  {
    date: "12.3.2020",
    payment: "Cash",
    discount: 2000,
    total: 20500,
  },
];

const Transaction = () => {
  const [transactions, getTransactions] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      getTransactions(rows);
      setMounted(true);
    }
  }, [mounted, setMounted])

  const classes = useStyles();
  return (
    <div className={classes.marginTop}>
      <Grid container>
        <Grid item xs={8}>
          <h2>Transactions</h2>
        </Grid>
        <Grid container item xs={4} justify="flex-end" alignItems="center">
          <p>View All</p>
        </Grid>
      </Grid>
      <Paper className={classes.root}>
        <TableContainer>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow >
                <TableCell>Date & Time</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Discounted Item</TableCell>
                <TableCell>Total Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.discount}</TableCell>
                  <TableCell>{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Transaction;
