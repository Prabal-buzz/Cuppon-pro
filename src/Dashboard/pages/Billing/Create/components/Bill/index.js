import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from '@material-ui/core';
import { Field, reduxForm } from "redux-form";

import TextField from "../../../../../../App/components/MaterialUIFields/TextField";
import DatePicker from "../../../../../../App/components/MaterialUIFields/DatePicker";

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
}));

function Bill({ handleSubmit }) {
  const classes = useStyles();

    return (
        <div className="wrapper_bill">
            <form className="secondaryWrapper_bill" onSubmit={handleSubmit}>
                <Grid container spacing= {3} direction="row">
                    <Grid item xs={12} sm={6} lg={6} md={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Field
                                    variant="outlined"
                                    name="phone_number"
                                    type="number"
                                    label="Phone no."
                                    component={TextField}
                                    // validate={[
                                    // Validators.integerValidator,
                                    // ]}
                                    className={classes.text}
                                />
                            </Grid>
                            <Grid item>
                                <Field
                                    variant="outlined"
                                    name="name"
                                    type="text"
                                    label="Name"
                                    component={TextField}
                                    className={classes.text}
                                />
                            </Grid>
                            <Grid item>
                                <Field
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    label="Email"
                                    component={TextField}
                                    // validate={[
                                    // Validators.emailValidator,
                                    // ]}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} md={6}>
                        <Grid container direction="column">
                            <Grid item>
                                <Field
                                    variant="outlined"
                                    name="date"
                                    type="date"
                                    label="Bill Date"
                                    component={DatePicker}
                                />
                            </Grid>
                            <Grid item >
                                <Button
                                variant="contained"
                                className={classes.button}
                                type="submit"
                                >
                                    Verify
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
  }

export default reduxForm({
  form: "CreateBill_Form",
})(Bill);