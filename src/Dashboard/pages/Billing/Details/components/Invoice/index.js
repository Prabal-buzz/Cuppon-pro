import React, { useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from '@material-ui/core';
import { AuthContext } from '../../../../../../App/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../../../Company/CompanyInfo/store/actions';

import "./style.scss";
import List from './List';

const useStyles = makeStyles((theme) => ({
  head: {
    color: '#EAECED',
    fontSize: '34px',
    paddingRight: '20px'
  },
  company_name: {
    fontSize: '20px',
    color: '#12100D'
  },
  phone_email: {
    fontSize: '15px',
    color: '#12100D'
  },
  invoice_date: {
    fontSize: '14px',
    color: '#12100D'
  },
  number: {
    fontSize: '14px',
    color: '#12100D',
    paddingRight: '20px'
  },
}));

function Invoice({ data, user, verifiedBill }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);
  const CompanyDetails = useSelector((state) => state.companyGetInfo.response);

  useEffect(() => {
    dispatch(getInfo(currentUser.company[0].id));
  }, [
    dispatch,
    currentUser,
  ]);

  const getNewDate = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const dt = date.getDate();
    return dt + ' ' + month + ' ' + year;
  }

  const columns = [
    { key: 'date', name: 'SL' },
    { key: 'product_name', name: 'ITEM' },
    { key: 'rate', name: 'PRICE' },
    { key: 'quantity', name: 'QTY.' },
    { key: 'total', name: 'TOTAL' },
  ];

  if (data?.invoice_number) {
    return (
      <Grid container spacing={0} className="wrapper-1">
        <Grid item xs={12} >
          <Grid container alignItems="center" justify="flex-end" className="invoice">
            <Grid item >
              <Typography className={classes.head}> Invoice </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container direction="row" justify="space-between" className="info">
            <Grid item >
              <Grid container direction="column" className="infoLeft">
                <Grid item >
                  <Typography className={classes.company_name}> {CompanyDetails?.data?.name} </Typography>
                </Grid>
                <Grid item >
                  <Typography className={classes.phone_email}> {CompanyDetails?.data?.phone_number} </Typography>
                </Grid>
                <Grid item >
                  <Typography className={classes.phone_email}> {CompanyDetails?.data?.email} </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item >
              <Grid container direction="column" className="infoRight">
                <Grid item >
                  <Typography className={classes.invoice_date}>Invoice: #{data?.invoice_number} </Typography>
                </Grid>
                <Grid item >
                  <Typography className={classes.invoice_date}> Date: {getNewDate(data.created_at)} </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container >
            <Grid item >
              <List columns={columns} rows={data?.sales_item} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container direction="row" className="info">
            <Grid item xs={6} >
              <Grid container justify="flex-start" >
                <Grid item >
                  <Grid container direction="column" className="infoLeft">
                    <Grid item >
                      <Typography className={classes.company_name}> BILL TO: </Typography>
                    </Grid>
                    <Grid item >
                      <Typography className={classes.invoice_date}> {data?.name} </Typography>
                    </Grid>
                    <Grid item >
                      <Typography className={classes.invoice_date}> {data?.phone_number} </Typography>
                    </Grid>
                    <Grid item >
                      <Typography className={classes.invoice_date}> {data?.email} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} >
              <Grid container justify="flex-end" className="totalbox">
                <Grid item >
                  <Grid container direction="column" >
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}>SUBTOTAL: </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {data?.total} </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}> SERVICE CHARGE: </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {data?.service_charge ? data?.service_charge : 0}%</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}>TAX: </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {data?.tax ? data?.tax : 0}% </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider variant="fullWidth" />
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}> TOTAL </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {data?.grand_total} </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container alignItems="center" justify="center" className="thanks">
            <Grid item >
              <Typography className={classes.invoice_date}>Thank you for doing business with us</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    );
  } else {
    return (
      <Grid container spacing={0} className="wrapper-1">
        <Grid item xs={12} >
          <Grid container alignItems="center" justify="flex-end" className="invoice">
            <Grid item >
              <Typography className={classes.head}> Invoice </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container direction="row" justify="space-between" className="info">
            <Grid item >
              <Grid container direction="column" className="infoLeft">
                <Grid item >
                  <Typography className={classes.company_name}> {CompanyDetails?.data?.name} </Typography>
                </Grid>
                <Grid item >
                  <Typography className={classes.phone_email}> {CompanyDetails?.data?.phone_number} </Typography>
                </Grid>
                <Grid item >
                  <Typography className={classes.phone_email}> {CompanyDetails?.data?.email} </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item >
              <Grid container direction="column" className="infoRight">
                <Grid item >
                  <Typography className={classes.invoice_date}>Invoice: #{data?.invoice_number} </Typography>
                </Grid>
                <Grid item >
                  <Typography className={classes.invoice_date}> Date: {user?.date} </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container >
            <Grid item >
              <List columns={columns} rows={verifiedBill?.sales_item} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container direction="row" className="info">
            <Grid item xs={6} >
              <Grid container justify="flex-start" >
                <Grid item >
                  <Grid container direction="column" className="infoLeft">
                    <Grid item >
                      <Typography className={classes.company_name}> BILL TO: </Typography>
                    </Grid>
                    <Grid item >
                      <Typography className={classes.invoice_date}> {user?.name} </Typography>
                    </Grid>
                    <Grid item >
                      <Typography className={classes.invoice_date}> {user?.phone_number} </Typography>
                    </Grid>
                    <Grid item >
                      <Typography className={classes.invoice_date}> {user?.email} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} >
              <Grid container justify="flex-end" className="totalbox">
                <Grid item >
                  <Grid container direction="column" >
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}>SUBTOTAL: </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {verifiedBill?.total} </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}> SERVICE CHARGE: </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {verifiedBill?.service_charge ? verifiedBill?.service_charge : 0}% </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}>TAX: </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {verifiedBill?.tax ? verifiedBill?.tax : 0}% </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Divider variant="fullWidth" />
                    <Grid item >
                      <Grid container direction="row" justify="space-between" className="total">
                        <Grid item >
                          <Typography className={classes.invoice_date}> TOTAL </Typography>
                        </Grid>
                        <Grid item >
                          <Typography className={classes.number}> {verifiedBill?.grand_total} </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} >
          <Grid container alignItems="center" justify="center" className="thanks">
            <Grid item >
              <Typography className={classes.invoice_date}>Thank you for doing business with us</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    );
  }

}

export default Invoice;