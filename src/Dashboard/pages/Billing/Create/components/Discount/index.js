import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
import { reduxForm } from "redux-form";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import "./style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
  },
  button: {
    backgroundColor: "#46BE8A",
    width: "85px",
    height: "36px",
    color: "white",
    display: "flex",
    marginBottom: "20px",
  },
    formControl: {
    // margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
}));

function Discount() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

    return (
        <div className="wrapper_discount">
            <form className="secondaryWrapper_discount">
                <Grid container spacing= {3} direction="column" xs={12} >
                    <Grid item >
                        <Grid container direction="row">
                            <Grid item  xs={6} sm={6} lg={6} md={6}>
                                <Typography> Discount </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6}>
                                <Typography> Amount </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction="row">
                            <Grid item  xs={6} sm={6} lg={6} md={6}>
                                <Typography> MoMo </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6}>
                              <FormControl component="fieldset" className={classes.formControl}>
                                <RadioGroup
                                  aria-label="gender"
                                  name="gender2"
                                  className={classes.group}
                                  value={value}
                                  onChange={handleChange}
                                >
                                  <FormControlLabel
                                    value="5"
                                    control={<Radio color="primary" />}
                                    label="5%"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container direction="row">
                            <Grid item  xs={6} sm={6} lg={6} md={6}>
                                <Typography> On Everything </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} lg={6} md={6}>
                              <FormControl component="fieldset" className={classes.formControl}>
                                <RadioGroup
                                  aria-label="gender"
                                  name="gender2"
                                  className={classes.group}
                                  value={value}
                                  onChange={handleChange}
                                >
                                  <FormControlLabel
                                    value="20"
                                    control={<Radio color="primary" />}
                                    label="20%"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
  }

export default reduxForm({
  form: "CreateBill",
})(Discount);