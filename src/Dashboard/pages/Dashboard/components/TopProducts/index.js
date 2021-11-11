import React, { useState, useEffect, useContext } from "react";
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
import actions from "../../store/actions";
import { connect } from "react-redux";
import { AuthContext } from "../../../../../App/auth";
import { Link } from 'react-router-dom';
import { useStyles } from "./index.style";


const TopProducts = (props) => {

  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      props.getTopProducts(currentUser.company[0].id);
      setMounted(true);
    }
  }, [props, currentUser, mounted, setMounted]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={8}>
          <h2>Top Products</h2>
        </Grid>
        <Grid container item xs={4} justify="flex-end" alignItems="center">
          <Link to="/items">View All</Link>
        </Grid>
      </Grid>
      <Paper className={classes.tablePaper}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Selling Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.items.slice(0, 5).map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.bulk_quantity}</TableCell>
                  <TableCell>{row.selling_price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getTopProducts: (company_id) => dispatch(actions.getTopProducts(company_id)),
});

const mapStateToProps = (state) => {
  return {
    success: state.dashboard.success,
    loading: state.dashboard.loading,
    items: state.dashboard.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopProducts);
