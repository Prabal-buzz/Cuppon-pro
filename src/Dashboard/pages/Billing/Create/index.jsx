import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Bill from './components/Bill';
import Discount from './components/Discount';
import CustomTable from './components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getBillUserDetail } from './store/actions';
import { addSalesItems } from './store/actions';

function Create() {
  const dispatch = useDispatch();
  const location = useLocation();
  const userDetail = useSelector((state) => state.BillUserDetail.response);
  const data = location?.data;
  const billUser = location?.billUser;
  const verifiedBill = location?.verifiedBill;

  const handleUserDetail = (data) => {
    dispatch(getBillUserDetail(data));
  };

  const getNewDate = (value) => {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    return year + '-' + month + '-' + dt;
  };

  var bill;
  if (data !== undefined) {
    dispatch(addSalesItems(data.sales_item));
    bill = (
      <Bill
        onSubmit={handleUserDetail}
        initialValues={{
          phone_number: data.phone_number,
          name: data.name,
          email: data.email,
          bill_id: data.id,
          company: data.company,
          date: getNewDate(data.created_at),
        }}
      />
    );
  } else if (billUser !== undefined) {
    dispatch(addSalesItems(verifiedBill?.sales_item));
    bill = <Bill onSubmit={handleUserDetail} initialValues={billUser} />;
  } else {
    bill = (
      <Bill onSubmit={handleUserDetail} initialValues={userDetail?.data} />
    );
  }

  const columns = [
    { key: 'id', name: 'No' },
    { key: 'product_name', name: 'Item Name' },
    { key: 'product_code', name: 'Item Code' },
    { key: 'rate', name: 'Rate' },
    { key: 'quantity', name: 'Quantity' },
    { key: 'total', name: 'Total' },
  ];

  return (
    <Grid container spacing={3} >
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} sm={9} lg={9} md={9}>
            <Grid container direction="column">
              <Grid item>
                <Typography> Add New Bill </Typography>
              </Grid>
              <Grid item>
                {bill}
              </Grid>
            </Grid>
          </Grid>
          {userDetail?.data ? (
            <Grid item xs={12} sm={3} lg={3} md={3}>
              <Grid container direction="column">
                <Grid item>
                  <Typography> Applicable Discount </Typography>
                </Grid>
                <Grid item>
                  <Discount />
                </Grid>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <CustomTable columns={columns} />
      </Grid>
    </Grid>
  );
}

export default Create;
