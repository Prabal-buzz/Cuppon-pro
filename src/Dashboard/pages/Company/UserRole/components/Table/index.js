import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'black',
    color: 'white',
    height: '32px',
  },
  body: {
    fontSize: 14,
    textTransform: 'capitalize'
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
    marginBottom: '12px',
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
  search_field: {
    [`& fieldset`]: {
      borderRadius: 20,
    },
    backgroundColor: '#fff',
    width: '40%',
    height: '40px'
  },
  avatar: {
    marginLeft: '20px'
  }
});

const CustomTable = ({ rows, columns, open }) => {
  const classes = useStyles();

  function getFilterRow(row, col) {
    if (col.name === 'Role') {
      return row[col.key].filter(group => group !== "user");
    } else {
      return row[col.key];
    }
  };

  return (
    <div>
      <div className={classes.search_box}>
        <Typography className={classes.head}>Roles</Typography>
        {/* <TextField 
          placeholder="Search"
          variant="outlined"
          size="small"
          className={classes.search_field}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <SearchIcon style={{ marginRight: "-10px" }}/>
                </IconButton>
              </InputAdornment>
            )
          }}
        /> */}
      </div>

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
            {rows && rows.map((row) => (
              <StyledTableRow key={row.id} name={row} onClick={(event) => open(event, row)}>
                {columns.map((col) => (
                  <StyledTableCell key={col.key} align="left" >
                    {col.name === '' ? <Avatar alt={row[col.alt]} src={row[col.key]} className={classes.avatar} /> : getFilterRow(row, col)}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomTable;
