import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F7FAFC',
    color: '#A62A22',
    height: '32px',
  },
  body: {
    fontSize: 14,
    border: "none"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      backgroundColor: '#F7FAFC'
  },
}))(TableRow);

const useStyles = makeStyles({
  head: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  tableWrapper: {
    borderRadius: '10px 10px 0px 0px',
  },
  tableCell: {
    width: '6rem',
  },
  table: {
    minWidth: 400,
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

const List = ({ rows, columns }) => {
  const classes = useStyles();

  return (
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
                {rows && rows.map((row, index) => (
                <StyledTableRow key={row.id}>
                  {columns.map((col) => {
                    if (col.name === "SL") {
                      return (
                        <StyledTableCell key={col.id} align="left">
                          {`00${index+1}`}
                        </StyledTableCell>
                      )
                    } else {
                      return (
                        <StyledTableCell key={col.id} align="left">
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
  );
};

export default List;
