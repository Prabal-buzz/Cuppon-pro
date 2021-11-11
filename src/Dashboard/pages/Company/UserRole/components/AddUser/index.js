import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Validators from "../../../../../../App/utils/validators";
import TextField from "../../../../../../App/components/MaterialUIFields/TextField";
import RadioButton from "../../../../../../App/components/MaterialUIFields/RadioButton";
import { Input } from '../../../../../../App/components/MaterialUIFields';

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: '85%',
    marginBottom: '15px',
    marginTop: '10px',
    background: '#ffffff 0% 0% no-repeat padding-box',
    boxShadow: '1px 3px 6px #00000029',
    borderRadius: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  margin: {
    width: "448px",
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

const AddUser = ({ handleSubmit }) => {
  const classes = useStyles();

  const confirmPasswordValidator = (value, values) => {
    return Validators.confirmValidator(
      value,
      values.password,
      'Confirm Password'
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container spacing={3} className={classes.wrap}>
        <Grid item xs={12} sm={6} >
          <Field
            name="first_name"
            type="text"
            label="First Name"
            component={TextField}
            validate={Validators.emptyValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Field
            name="email"
            type="email"
            label="Email"
            component={TextField}
            validate={Validators.emptyValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Field
            name="middle_name"
            type="text"
            label="Middle Name"
            component={TextField}
            validate={Validators.emptyValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Field
            label="Password"
            name="password"
            type="password"
            component={Input}
            validate={Validators.emptyValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Field
            name="last_name"
            type="text"
            label="Last Name"
            component={TextField}
            validate={Validators.emptyValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Field
            label="Confirm Password"
            name="confirm_password"
            type="password"
            component={Input}
            validate={confirmPasswordValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
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
        <Grid item xs={12} sm={6} >
          <Field
            name="phone_number"
            type="text"
            label="Phone No."
            component={TextField}
            validate={Validators.integerValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Field
            name="is_manager"
            label="Role"
            options={[
              {
                label: "Manager",
                value: "true",
                key: "manager"
              },
              {
                label: "Sales Team",
                value: "false",
                key: "sales-team"
              },
            ]}
            component={RadioButton}
            validate={Validators.emptyValidator}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            className={classes.button}
            type="submit"
          >
            Save
            </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default reduxForm({ form: "ADD_USER_FORM" })(AddUser);
