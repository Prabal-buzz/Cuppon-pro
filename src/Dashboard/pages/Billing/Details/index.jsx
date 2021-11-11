import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { saveBill, updateBill } from './store/actions';
import { resetSave, resetUpdate } from './store/actions';
import { resetSalesItem, resetBillUserDetail } from '../Create/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../../../App/auth';

import Invoice from './components/Invoice';
import Payment from './components/Payment';

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    maxHeight: 180,
    width: 320,
    marginRight: '10px',
    marginBottom: '8px',
  },
  media: {
    width: 320,
    paddingTop: '56.25%',
    objectFit: 'contain',
    height: 0,
  },
  save: {
    color: '#fff',
    backgroundColor: '#203A53',
  },
  payment: {
    color: '#fff',
    backgroundColor: '#46BE8A',
  },
}));

function Details() {
  const classes = useStyles();
  const location = useLocation();
  const [payment, setPayment] = useState(false);
  const data = location.state?.data;
  const billUser = location?.user;
  const dispatch = useDispatch();
  const context = useContext(AuthContext);

  const verifiedBill = useSelector((state) => state.VerifyBill?.response);

  useEffect(() => {
    dispatch(resetSalesItem());
    dispatch(resetBillUserDetail());
    dispatch(resetSave());
    dispatch(resetUpdate());
  }, [dispatch, verifiedBill]);

  const handlePayment = (data) => {
    dispatch(updateBill(data));
  };

  const handleNewPayment = (data) => {
    dispatch(saveBill(data));
  };

  var billData;
  if (data !== undefined) {
    billData = (
      <Grid item>
        {payment && (
          <Payment
            onSubmit={handlePayment}
            initialValues={{
              company: context.currentUser.company[0].id,
              bill_id: data.id,
              name: data.name,
              phone_number: data.phone_number,
              email: data.email,
              tax: data.tax,
              user: context.currentUser.id,
              sales_item: data.sales_item,
            }}
          />
        )}
      </Grid>
    );
  } else if (billUser !== undefined && billUser?.bill_id !== undefined) {
    billData = (
      <Grid item>
        {payment && (
          <Payment
            onSubmit={handlePayment}
            initialValues={{
              company: context.currentUser.company[0].id,
              bill_id: billUser.bill_id,
              name: billUser.name,
              phone_number: billUser.phone_number,
              email: billUser.email,
              tax: verifiedBill.data?.tax,
              user: context.currentUser.id,
              sales_item: verifiedBill.data?.sales_item,
            }}
            date={billUser?.date}
          />
        )}
      </Grid>
    );
  } else {
    billData = (
      <Grid item>
        {payment && (
          <Payment
            onSubmit={handleNewPayment}
            initialValues={{
              company: context.currentUser.company[0].id,
              bill_id: null,
              name: billUser?.name,
              phone_number: billUser?.phone_number,
              email: billUser?.email,
              tax: verifiedBill.data?.tax,
              user: context.currentUser.id,
              sales_item: verifiedBill.data?.sales_item,
            }}
            date={billUser?.date}
          />
        )}
      </Grid>
    );
  }

  return (
    <Grid container spacing={0} direction="column">
      <Grid item xs={12} sm={12} lg={12}>
        <Grid container spacing={1} direction="row">
          <Grid item>
            <Link
              to={{
                pathname: '/billing/create',
                data: data,
                billUser: billUser,
                verifiedBill: verifiedBill?.data,
              }}
            >
              <Button variant="contained">Edit</Button>
            </Link>
          </Grid>
          <Grid item>
            <Button variant="contained">PDF</Button>
          </Grid>
          <Grid item>
            <Button variant="contained">Print</Button>
          </Grid>
          <Grid item>
            <Link to="/billing">
              <Button variant="contained" className={classes.save}>
                Save
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Button
              className={classes.payment}
              onClick={() => setPayment(!payment)}
            >
              Payment
            </Button>
          </Grid>
          <Grid item>
            <Link to="/billing">
              <Button variant="contained">Cancel</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <Grid container spacing={5} direction="row">
          <Grid item xs={12} sm={12} lg={5} md={7}>
            <Grid container spacing={3}>
              <Grid item>
                <Invoice
                  data={data}
                  user={location?.user}
                  verifiedBill={verifiedBill?.data}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={12}>
            <Grid container spacing={3} direction="column">
              {billData}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Details;
