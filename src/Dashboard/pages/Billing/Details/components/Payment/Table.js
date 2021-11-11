import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { useSelector } from "react-redux";

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
    marginRight:'15px'
  },
  disable: {
    width: '119px',
    height: '40px',
    backgroundColor: '#E4EAEC',
    color: '#808C95',
    fontSize: '12px',
  },
});

const CalTable = ({ rows, columns, date }) => {
  const classes = useStyles();
  const history = useHistory();
  const update = useSelector((state) => state.UpdateBill.response);
  const create = useSelector((state) => state.SaveBill.response);

  React.useEffect(() => {
    if(update?.data || create?.data ){
      history.push("/billing")
    }
  }, [update, create, history]);

  const getNewDate = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const dt = date.getDate();
  return dt+'.' + month + '.'+year;
}

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <StyledTableCell key={column.key} align="left" className={classes.tableCell}>
                    {column.name}
                    </StyledTableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows && 
                <StyledTableRow key={rows.id}>
                  {columns.map((col) => {
                  if (col.name === "Date") {
                    return (
                      <StyledTableCell align="left">
                        {col.key === "date" ? date : getNewDate(rows[col.key])}
                      </StyledTableCell>
                    )
                  } else {
                    return (
                      <StyledTableCell align="left">
                        {rows[col.key] ? rows[col.key] : "___"}
                      </StyledTableCell>
                    )
                  }
                })}
                </StyledTableRow>
                }
                <StyledTableRow style={{backgroundColor:'#fff', color: 'white'}}>
                    <StyledTableCell rowSpan={4}/>               
                    <StyledTableCell rowSpan={4}/>               
                    <StyledTableCell colSpan={2} align="center">
                        Amount Paid:
                    </StyledTableCell>
                    <StyledTableCell align="left">
                        {/* Rs. {rows.amount_paid ? rows.amount_paid : 0} */}
                        RS. 0
                    </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{backgroundColor:'#fff', color: 'white'}}>
                    <StyledTableCell colSpan={2} align="center" style={{paddingRight: '50px'}}>
                      Discount:
                    </StyledTableCell>
                    <StyledTableCell align="left">
                        {/* Rs. {rows.taxed_amount} */}
                        Rs. 0
                    </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{backgroundColor:'#fff', color: 'white'}}>
                    <StyledTableCell colSpan={2} align="center" style={{paddingRight: '25px'}}>
                        Amount Due:
                    </StyledTableCell>
                    <StyledTableCell align="left">
                        {/* Rs. {rows.total - rows.paid_amount} */}
                        Rs. 0
                    </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow >
                    <StyledTableCell style={{backgroundColor:'#E2F3FF', color: '#46BE8A', paddingRight: '80px'}} colSpan={2} align="center">
                        Total:
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{backgroundColor:'#E2F3FF', color: '#46BE8A'}}>
                        Rs. {rows.total}
                    </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{backgroundColor:'#fff', color: 'white'}}>
                    <StyledTableCell colSpan={3} align="left">
                        <Button className={classes.view} type="submit" >
                          Save & Print
                        </Button>
                        <Button className={classes.disable} onClick={() => history.push("/billing")}>
                          Cancel
                        </Button>
                    </StyledTableCell>
                </StyledTableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CalTable;
