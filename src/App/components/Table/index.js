import React from 'react';
import PropTypes from 'prop-types';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, withStyles } from '@material-ui/core';
import PaginationActions from '../PaginationActions';
import { useStyles } from './index.style';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'black',
    color: 'white',
    height: '32px',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CustomTable = (props) => {

  const { page, total, rowsPerPage, rows, columns } = props;
  const classes = useStyles();

  const handleChangePage = (e, page) => {
    props.onChangePage(page, rowsPerPage);
  }

  const handleChangeRowsPerPage = (e, rowsPerPage) => {
    props.onChangePage(page, rowsPerPage);
  }

  return (
    <TableContainer component={Paper} className={classes.tableWrapper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCell
                key={column.key}
                align="left"
                className={classes.tableCell}
              >
                {column.name}
                <UnfoldMoreIcon className={classes.svg} />
              </StyledTableCell>
            ))}
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {columns.map((col) => (
                <StyledTableCell key={col.key} align="left">
                  {row[col.key]}
                </StyledTableCell>
              ))}
              <StyledTableCell className={classes.actionsColumn} align="left">
                {props.handleEdit && (
                  <Button
                    className={classes.viewEditBtn}
                    onClick={() => props.handleEdit(row)}
                  >
                    Edit
                  </Button>
                )}
                {props.handleView && (
                  <Button
                    className={classes.viewEditBtn}
                    onClick={() => props.handleView(row)}
                  >
                    View
                  </Button>
                )}
                {props.handleDelete && (
                  <Button
                    className={classes.disableBtn}
                    onClick={() => props.handleDelete(row)}
                  >
                    Delete
                  </Button>
                )}
                {props.handleDisable && (
                  <Button
                    className={classes.disableBtn}
                    onClick={() => props.handleDisable(row)}
                  >
                    Disable
                  </Button>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 30, 40, 50]}
              colSpan={3}
              count={total}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={PaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

CustomTable.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default CustomTable;
