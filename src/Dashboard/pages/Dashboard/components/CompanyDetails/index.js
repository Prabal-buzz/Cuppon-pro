import React, { useContext, useEffect, useState } from "react";
import { Avatar, Grid, Paper } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useStyles } from "./index.style";
import { AuthContext } from "../../../../../App/auth";
import { connect } from "react-redux";
import actions from "../../store/actions";

const CompanyDetails = (props) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      props.getCompanyDetails(currentUser.company[0].id);
      setMounted(true);
    }
  }, [currentUser, mounted, setMounted, props]);

  const { company: { name, logo, address, phone_number, description } } = props;

  return (
    <>
      <Grid container>
        <Grid item xs={8}>
          <h3>Company Details</h3>
        </Grid>
        <Grid container item xs={4} justify="flex-end" alignItems="center">
          <Link to="/company">Edit</Link>
        </Grid>
      </Grid>
      <Paper elevation={1} className={classes.root}>
        <Grid container>
          <Grid item sm={4} xs={12}>
            <Avatar
              className={classes.avatar}
              src={logo}
              alt={name}
            />
          </Grid>
          <Grid item sm={8} xs={12}>
            <h3 className={classes.header}>{name}</h3>
            <p className={classes.margin}>Phone: {phone_number}</p>
            <p className={classes.margin}>{address}</p>
          </Grid>
          <p className={classes.smallText}>{description}</p>
        </Grid>
      </Paper>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCompanyDetails: (company_id) =>
    dispatch(actions.getCompanyDetails(company_id)),
});

const mapStateToProps = (state) => {
  return {
    success: state.dashboard.success,
    loading: state.dashboard.loading,
    company: state.dashboard.company,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetails);
