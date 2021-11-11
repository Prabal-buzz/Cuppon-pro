import React, { useState, useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import IndividualRole from "../IndividualRole";
import { connect } from "react-redux";
import { AuthContext } from "../../../../../App/auth";
import actions from "../../store/actions";
import { Link } from 'react-router-dom';
import { useStyles } from "./index.style";

const Roles = (props) => {

  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      props.getCompanyRoles(currentUser.company[0].id);
      setMounted(true);
    }
  }, [currentUser, props, mounted, setMounted]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={8}>
          <h2>Roles</h2>
        </Grid>
        <Grid container item xs={4} justify="flex-end" alignItems="center">
          <Link to={`/company`}>View All</Link>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {props.roles.map((role, index) => (
          <Grid item lg={4} md={12} key={index}>
            <IndividualRole role={role} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCompanyRoles: (company_id) =>
    dispatch(actions.getCompanyRoles(company_id)),
});

const mapStateToProps = (state) => {
  return {
    success: state.dashboard.success,
    loading: state.dashboard.loading,
    roles: state.dashboard.roles,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Roles);
