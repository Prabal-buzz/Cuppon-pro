import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, Form, reduxForm } from "redux-form";
import { Grid } from '@material-ui/core';

import Validators from "../../../../../../App/utils/validators";
import TextField from "../../../../../../App/components/MaterialUIFields/TextField";
import SelectField from "../../../../../../App/components/MaterialUIFields/SelectField";
import RadioButton from "../../../../../../App/components/MaterialUIFields/RadioButton";

const useStyles = makeStyles((theme) => ({
  wrap: {
    marginTop: '20px',
    background: '#ffffff 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '10px',
  },
  text: {
    width: "28rem",
  },
  button: {
    backgroundColor: "#46BE8A",
    width: "85px",
    height: "36px",
    color: "white",
    display: "flex",
    marginBottom: "20px",
    marginRight: "40px"
  },
}));

const ProfileForm = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={2} direction="column" className={classes.wrap}>

        <Grid item >
          <Grid container spacing={3} direction="row">
            <Grid item xs={12} sm={6}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Field
                    name="full_name"
                    type="text"
                    label="Full Name"
                    component={TextField}
                    validate={Validators.emptyValidator}
                    className={classes.text}
                  />
                </Grid>
                <Grid item>
                  <Field
                    label="Gender"
                    name="gender"
                    options={[
                      {
                        key: "F",
                        label: "Female",
                        value: "F",
                      },
                      {
                        key: "M",
                        label: "Male",
                        value: "M",
                      },
                      {
                        key: "O",
                        label: "Other",
                        value: "O",
                      },
                    ]}
                    component={RadioButton}
                    validate={Validators.emptyValidator}
                  />
                </Grid>
                <Grid item>
                  <Field
                    variant="outlined"
                    name="address"
                    type="text"
                    label="Address"
                    component={TextField}
                    validate={Validators.emptyValidator}
                    className={classes.text}
                  />
                </Grid>
                <Grid item>
                  <Field
                    variant="outlined"
                    name="email"
                    type="email"
                    label="Email"
                    disabled
                    component={TextField}
                    validate={[
                      Validators.emptyValidator,
                      Validators.emailValidator,
                    ]}
                    className={classes.text}
                  />
                </Grid>
                <Grid item>
                  <Field
                    variant="outlined"
                    name="phone_number"
                    type="text"
                    label="Phone no."
                    component={TextField}
                    validate={[
                      Validators.emptyValidator,
                      Validators.integerValidator,
                    ]}
                    className={classes.text}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  <Field
                    variant="outlined"
                    name="state"
                    type="text"
                    label="State"
                    component={SelectField}
                    validate={Validators.emptyValidator}
                    className={classes.text}
                  >
                    <option aria-label="None" value="" disabled>
                      Select State{" "}
                    </option>
                    <option value="State 1">State 1</option>
                    <option value="State 2">State 2</option>
                    <option value="Bagmati">Bagmati</option>
                    <option value="State 4">State 4</option>
                    <option value="State 5">State 5</option>
                    <option value="State 6">State 6</option>
                    <option value="State 7">State 7</option>
                  </Field>
                </Grid>
                <Grid item>
                  <Field
                    variant="outlined"
                    name="country"
                    type="text"
                    label="Country"
                    component={SelectField}
                    validate={Validators.emptyValidator}
                    className={classes.text}
                  >
                    <option aria-label="None" value="" disabled>
                      Select Country{" "}
                    </option>
                    <option value="Nepal">Nepal</option>
                    <option value="UsA">USA</option>
                    <option value="India">India</option>
                  </Field>
                </Grid>
                <Grid item>
                  <Field
                    variant="outlined"
                    name="city"
                    type="text"
                    label="City"
                    component={SelectField}
                    validate={Validators.emptyValidator}
                    className={classes.text}
                  >
                    <option aria-label="None" value="" disabled>
                      Select City{" "}
                    </option>
                    <option value={10}>Biratnagar</option>
                    <option value={20}>Dharan</option>
                    <option value={30}>Damak</option>
                    <option value={40}>Illam</option>
                    <option value={50}>Birtamod</option>
                    <option value={60}>Ithari</option>
                    <option value={70}>Dhunkuta</option>
                  </Field>
                </Grid>
                <Grid item>
                  <Field
                    variant="outlined"
                    name="zip_code"
                    type="number"
                    label="Zip Code"
                    component={TextField}
                    validate={[
                      Validators.emptyValidator,
                      Validators.integerValidator,
                    ]}
                    className={classes.text}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container justify="flex-end">
            <Grid item >
              <Button variant="contained" className={classes.button} type="submit">
                Save
                </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid >
    </Form>
  );
};

export default reduxForm({ fields: ["text"] })(ProfileForm);
