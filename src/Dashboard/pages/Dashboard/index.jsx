import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import {
  CompanyDetails,
  OverviewChart,
  Roles,
  TopProducts,
  Transactions,
} from './components';

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={8} md={12}>
            <OverviewChart />
          </Grid>
          <Grid item lg={4} md={12}>
            <CompanyDetails />
          </Grid>
        </Grid>
        <Roles />
        <Grid container spacing={4}>
          <Grid item lg={7} md={12}>
            <Transactions />
          </Grid>
          <Grid item lg={5} md={12}>
            <TopProducts />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
