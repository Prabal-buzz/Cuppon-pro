import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Image } from "../../../../../../App/components/Image";

import Validators from "../../../../../../App/utils/validators";
import TextField from "../../../../../../App/components/MaterialUIFields/TextField";
import SelectField from "../../../../../../App/components/MaterialUIFields/SelectField";

import "./style.scss";

const currencies = [
  {
    value: "USD",
    label: "$- US Dollar",
  },
  {
    value: "EUR",
    label: "€- Euro Pound Sterling",
  },
  {
    value: "BTC",
    label: "฿- Bitcoin",
  },
  {
    value: "JPY",
    label: "¥- Japanese Yen",
  },
];

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "448px",
  },
  image: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "10px",
  },
  head: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '-20px',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
  },
  text: {
    width: "28rem",
  },
  display: {
    width: "130px",
  },
  pantxt: {
    width: "210px",
  },
  vat: {
    width: "405px",
  },
  publish: {
    width: "10%",
    height: "50px",
  },
  select: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
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

const CompanyInfo = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.image}>
        <Image image="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" />
        <Image image="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" />
        <Image image="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png" />
      </div>
      <Grid container>
        <Paper>
          <Typography className={classes.head}>Company Information</Typography>
          <Form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Field
                  variant="outlined"
                  name="name"
                  type="text"
                  label="Company Name"
                  component={TextField}
                  validate={Validators.emptyValidator}
                  className={classes.text}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  variant="outlined"
                  name="currency"
                  type="text"
                  label="Default Currency"
                  component={SelectField}
                  validate={Validators.emptyValidator}
                  className={classes.text}
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={6}>
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
                  <option value="USA">USA</option>
                  <option value="India">India</option>
                </Field>
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
                  <option value="Biratnagar">Biratnagar</option>
                  <option value="Dharan">Dharan</option>
                  <option value="Damak">Damak</option>
                  <option value="Illam">Illam</option>
                  <option value="Birtamod">Birtamod</option>
                  <option value="Ithari">Ithari</option>
                  <option value="Dhunkuta">Dhunkuta</option>
                </Field>
              </Grid>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                <Field
                  variant="outlined"
                  name="email"
                  type="email"
                  label="Email"
                  component={TextField}
                  validate={[
                    Validators.emptyValidator,
                    Validators.emailValidator,
                  ]}
                  className={classes.text}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  variant="outlined"
                  name="phone_number"
                  type="number"
                  label="Phone no."
                  component={TextField}
                  validate={[
                    Validators.emptyValidator,
                    Validators.integerValidator,
                  ]}
                  className={classes.text}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  variant="outlined"
                  name="category"
                  type="text"
                  label="Category"
                  component={TextField}
                  validate={[
                    Validators.emptyValidator,
                  ]}
                  className={classes.text}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Paper>
      </Grid>
    </div>
  );
};

export default reduxForm({
  form: "ComanyInfo",
})(CompanyInfo);