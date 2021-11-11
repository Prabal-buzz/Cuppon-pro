import React from 'react';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { Link, useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { reduxForm } from "redux-form";

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

const useStyles = makeStyles({
  head: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  tableWrapper: {
    boxShadow: '0px 0px 30px #00000017',
    borderRadius: '10px 10px 0px 0px',
  },
  tableCell: {
    width: '15rem',
  },
  table: {
    minWidth: 700,
    background: '#273238 0% 0% noRepeat paddingBox',
    borderRadius: '10px 10px 0px 0px',
  },
  view: {
    width: '119px',
    height: '40px',
    backgroundColor: '#46BE8A',
    color: 'white',
    fontSize: '12px',
  },
  disable: {
    width: '119px',
    height: '40px',
    backgroundColor: '#a62a22',
    color: 'white',
    fontSize: '12px',
    marginLeft: '40px',
  },
  search_box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  filter: {
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,
  },
  search_field: {
    padding: 0,
    margin: 0,
    backgroundColor: "#fff",
  },
  topbar: {
    display: "flex",
    marginBottom: '10px'
  },
  new: {
    color: '#fff',
    backgroundColor: "#46BE8A",
  },
});

const CustomTable = ({ rows, columns }) => {
  const classes = useStyles();
  const history = useHistory();

  const getNewDate = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    return dt + '.' + month + '.' + year;
  }

  return (
    <div>
      <div className={classes.topbar}>
        <Grid container spacing={0} direction="row" alignItems="center">
          <Grid item xs={12} sm={6} >
            {/* <Grid container direction="row" justify="flex-start" alignItems="center">
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
            </Grid> */}
          </Grid>
          <Grid item xs={12} sm={6} >
            <Grid spacing={1} container direction="row" justify="flex-end">
              <Grid item>
                <Link to="/billing/create">
                  <Button variant="contained" className={classes.new}>+ New</Button>
                </Link>
              </Grid>
              <Grid item>
                <Button variant="contained">Export</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell key={column.key} align="left" className={classes.tableCell}>
                  {column.name}
                  <UnfoldMoreIcon />
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((row) => (
              <StyledTableRow key={row.id}>
                {columns.map((col) => {
                  if (col.name === "Issue Date") {
                    return (
                      <StyledTableCell onClick={() => history.push("/billing/details", { data: row })} key={col.key} align="left">
                        {getNewDate(row[col.key])}
                      </StyledTableCell>
                    )
                  } else if (col.name === "Status") {
                    return (
                      <StyledTableCell onClick={() => history.push("/billing/details", { data: row })} key={col.key} align="left">
                        {row[col.key] ? "Paid" : "Due"}
                      </StyledTableCell>
                    )
                  } else {
                    return (
                      <StyledTableCell onClick={() => history.push("/billing/details", { data: row })} key={col.key} align="left">
                        {row[col.key] ? row[col.key] : "___"}
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

export default reduxForm({
  form: "BillFilter",
})(CustomTable);