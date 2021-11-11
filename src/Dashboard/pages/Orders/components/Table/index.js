import React from 'react';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from "./index.style";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'black',
    color: 'white',
    height: '32px',
  },
  body: {
    fontSize: 14,
    border: "none"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const statuses = [
  { key: "new-order", value: "New Order" },
  { key: "confirmed", value: "Confirmed" },
  { key: "processing", value: "Processing" },
  { key: "billable", value: "Billable" },
  { key: "cancelled", value: "Cancelled" },
];

const CustomTable = ({ rows, columns, onFilter, active }) => {
  const classes = useStyles();

  const onStatusChange = (value, id) => {
    // console.log(value, id);
  }

  return (
    <div>
      <div className={classes.topbar}>
        <Grid container spacing={0} direction="row" alignItems="center">
          <Grid item xs={12} sm={6} >
            <Grid spacing={1} container direction="row" justify="flex-start">
              <Grid item>
                <Button variant="contained" className={active ? classes.active : classes.history}
                  onClick={onFilter}>
                  Active
                        </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" className={active ? classes.history : classes.active}
                  onClick={onFilter}>
                  History
                        </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} sm={6} >
            <Grid container direction="row" justify="flex-end" alignItems="center">
              <Grid item>
                <TextField
                  placeholder="Search"
                  variant="outlined"
                  size="small"
                  className={classes.search_field}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon style={{ marginRight: "-10px" }} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </div>
      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.name} align="left" className={classes.tableCell}>
                  {column.name}
                  {column.name === "Number" ? <UnfoldMoreIcon /> : null}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((row) => (
              <StyledTableRow key={row.id}>
                {columns.map((col) => {
                  if (col.key === "grand_total") {
                    return (
                      <StyledTableCell key={col.name} align="left">
                        Rs.{row[col.key]}
                      </StyledTableCell>
                    )
                  } if (col.key === "items") {
                    return (
                      <StyledTableCell key={col.name} align="left">
                        {row.order_lines.map(product => product.product_name).join(", ")}
                      </StyledTableCell>
                    )
                  } else if (col.key === "status") {
                    return (
                      <StyledTableCell key={col.name} align="left">
                        <Select
                          native
                          variant="outlined"
                          name={`status_${row.product_code}`}
                          onChange={(e, value) => onStatusChange(value, row.id)}
                          className={classes.field}
                          defaultValue={row[col.key]}
                        >
                          {statuses.map(status => <option key={status.key} value={status.key}>{status.value}</option>)}
                        </Select>
                      </StyledTableCell>
                    )
                  } else if (col.key === "discount") {
                    return (
                      <StyledTableCell key={col.name} align="left">
                        {row[col.key]}
                      </StyledTableCell>
                    )
                  } else {
                    return (
                      <StyledTableCell key={col.name} align="left">
                        {row[col.key]}
                      </StyledTableCell>
                    )
                  }
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;