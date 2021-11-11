import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import TableFooter from '@material-ui/core/TableFooter';
import { Link } from 'react-router-dom';
import ShowRow from './ShowRow';
import EditRow from './EditRow';
import { addSalesItem, verifyBill } from "../../store/actions";
import { reset } from 'redux-form';
import { AuthContext } from '../../../../../../App/auth';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'black',
    color: 'white',
    height: '32px',
  },
  body: {
    fontSize: 14,
    border: 'none'
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
    display: 'flex',
    boxShadow: '0px 0px 30px #00000017',
    borderRadius: '10px 10px 0px 0px',
    minHeight: 700,
  },
  tableCell: {
    width: '15rem',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 700,
    background: '#273238 0% 0% noRepeat paddingBox',
    borderRadius: '10px 10px 0px 0px',
  },
  stickyFooter: {
    bottom: 0,
    backgroundColor: "#ffffff",
    border: 'none'
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
    backgroundColor: '#E4EAEC',
    color: '#808C95',
    fontSize: '12px',
    marginLeft: '40px',
  },
});

const CustomTable = ({ columns }) => {
  const classes = useStyles();
  const customColumnStyle1 = { width: "2%" };
  const customColumnStyle2 = { width: "25%" };
  const customColumnStyle3 = { width: "12.2%" };
  const customColumnStyle4 = { width: "6%" };
  const [ind, setInd] = React.useState(1);
  const dispatch = useDispatch();
  const context = useContext(AuthContext);
  const listing = useSelector((state) => state.SalesItem?.sales_item);
  const verifyData = useSelector((state) => state.SalesItem);
  const products = useSelector((state) => state.ProductListing.response);
  const user = useSelector((state) => state.form?.CreateBill_Form);

  const addItem = (data) => {
    data.idx = ind;
    const item = products?.data.filter(item => item.name === data.product_name);
    data.product = item[0].id;
    data.id = null;
    data.quantity = parseInt(data.quantity);
    data.rate = parseInt(data.rate);
    data.total = parseInt(data.total);
    dispatch(addSalesItem(data));
    dispatch(reset('ADDNEW_FORM'));
    setInd(ind + 1);
  };

  const getVerified = () => {
    dispatch(verifyBill(verifyData, context.currentUser.company[0].id));
  }

  return (
    <>
      <TableContainer component={Paper} className={classes.tableWrapper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell style={column.name === 'No'
                  ? customColumnStyle1 : column.name === 'Item Name' ? customColumnStyle2 : customColumnStyle3}
                  key={column.key} align="left"
                  className={classes.tableCell}>
                  {column.name}
                </StyledTableCell>
              ))}
              <StyledTableCell style={customColumnStyle4} />
              <StyledTableCell style={customColumnStyle4} />
            </TableRow>
          </TableHead>
          <TableBody >
            {listing && listing.map((row, index) => (
              <ShowRow columns={columns} row={row} index={index + 1} />
            ))}

            <Grid container>
              <EditRow text="+ Add Line"
                form={`ADDNEW_FORM`}
                form_name="ADDNEW_FORM"
                onSubmit={addItem}
                initialValues={{ voucher: null, order: null }}
                index={listing?.length + 1}
              />
            </Grid>

            {listing.length !== 0 ?
              <>
                <StyledTableRow style={{ backgroundColor: '#fff', color: 'white' }} >
                  <StyledTableCell style={customColumnStyle1} rowSpan={4} />
                  <StyledTableCell style={customColumnStyle2} rowSpan={4} />
                  <StyledTableCell style={customColumnStyle3} rowSpan={4} />
                  <StyledTableCell style={customColumnStyle3} rowSpan={4} />
                  <StyledTableCell style={customColumnStyle3} rowSpan={4} />
                  <StyledTableCell style={{ width: "25%", paddingRight: '80px' }} align="center">
                    Total:
                    </StyledTableCell>
                  <StyledTableCell style={customColumnStyle2} align="center" >
                    Rs.
                        {listing.map(li => parseInt(li.total)).reduce((sum, val) => sum + val, 0)}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ backgroundColor: '#fff', color: 'white' }} >
                  <StyledTableCell align="center" style={{ paddingRight: '50px', width: "25%" }}>
                    Discount:
                    </StyledTableCell>
                  <StyledTableCell align="center">
                    Rs. 0
                    </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow style={{ backgroundColor: '#fff', color: 'white' }}>
                  <StyledTableCell align="center" style={{ paddingRight: '0px', width: "25%" }}>
                    Total Item Types:
                      </StyledTableCell>
                  <StyledTableCell colSpan={2} align="center">
                    {listing.length}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow >
                  <StyledTableCell style={{ backgroundColor: '#E2F3FF', color: '#46BE8A', paddingRight: '80px', width: "25%" }} align="center" >
                    Total:
                      </StyledTableCell>
                  <StyledTableCell align="center" style={{ backgroundColor: '#E2F3FF', color: '#46BE8A' }}>
                    Rs. {listing.map(li => parseInt(li.total)).reduce((sum, val) => sum + val, 0)}
                  </StyledTableCell>
                </StyledTableRow>
              </>
              :
              null
            }

          </TableBody>
          {listing.length !== 0 ?
            <TableFooter className={classes.stickyFooter}>
              <StyledTableRow style={{ backgroundColor: '#fff', color: 'white' }}>
                <StyledTableCell align="center">
                  <Link to={{
                    pathname: "/billing/details",
                    user: user?.values
                  }}>
                    <Button className={classes.view} onClick={getVerified}>Preview</Button>
                  </Link>
                  <Link to="/billing">
                    <Button className={classes.disable}>Cancel</Button>
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            </TableFooter>
            :
            null
          }
        </Table>
      </TableContainer>
    </>
  );
};

export default CustomTable;
