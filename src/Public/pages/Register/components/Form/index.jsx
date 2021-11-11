import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { Field, Form, reduxForm } from 'redux-form';
import Validators from '../../../../../App/utils/validators';
import { Input, Radio } from '../../../../../App/components/MaterialUIFields';
import { useStyles } from '../../../../index.style';
import { Header } from '../../../../components';

const FORM_NAME = 'RegisterForm';

const Register = (props) => {
  const confirmPasswordValidator = (value, values) => {
    return Validators.confirmValidator(
      value,
      values.password,
      'Confirm Password'
    );
  };

  const classes = useStyles();

  return (
    <div className={classes.regPageContainer}>
      <Header />
      <Grid
        container
        display="flex"
        alignItems="center"
        justify="center"
        className={classes.signUpFormContainer}
      >
        <Grid container display="flex" justify="center" direction="row">
          <Grid item sm={12}>
            <Card className={classes.signUpRoot}>
              <Grid
                container
                spacing={1}
                justify="center"
                className={classes.formHeader}
              >
                <h2>Company Information</h2>
              </Grid>
              <CardContent className={classes.content}>
                <Grid container spacing={1} justify="center">
                  <Form
                    className={classes.fullWidthForm}
                    onSubmit={props.handleSubmit}
                  >
                    <div style={{ padding: 12 }}>
                      <Grid container spacing={6} justify="center">
                        <Grid item xs={12} sm={6}>
                          <Field
                            label="First Name"
                            variant="outlined"
                            name="first_name"
                            component={Input}
                            validate={Validators.emptyValidator}
                          />

                          <Field
                            label="Middle Name"
                            variant="outlined"
                            name="middle_name"
                            component={Input}
                          />

                          <Field
                            label="Last Name"
                            variant="outlined"
                            name="last_name"
                            component={Input}
                            validate={Validators.emptyValidator}
                          />
                          <Field
                            label="Gender"
                            name="gender"
                            options={[
                              {
                                label: 'Female',
                                key: 'female',
                                value: 'F',
                              },
                              {
                                label: 'Male',
                                key: 'male',
                                value: 'M',
                              },
                              {
                                label: 'Other',
                                key: 'other',
                                value: 'O',
                              },
                            ]}
                            component={Radio}
                            validate={Validators.emptyValidator}
                          />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Field
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            component={Input}
                            validate={Validators.emailValidator}
                          />

                          <Field
                            label="Phone"
                            variant="outlined"
                            name="phone_number"
                            component={Input}
                            validate={Validators.emptyValidator}
                          />

                          <Field
                            label="Password"
                            variant="outlined"
                            name="password"
                            type="password"
                            component={Input}
                            validate={Validators.emptyValidator}
                          />

                          <Field
                            label="Confirm Password"
                            variant="outlined"
                            name="confirm_password"
                            type="password"
                            component={Input}
                            validate={confirmPasswordValidator}
                          />
                        </Grid>
                      </Grid>
                    </div>

                    <Grid
                      className={classes.btns}
                      container
                      spacing={1}
                      justify="center"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        className={classes.btnRound}
                      >
                        Proceed
                      </Button>
                    </Grid>

                    <Grid container spacing={1} justify="center">
                      <p className={classes.normalText}>
                        Already have an account?{' '}
                        <strong>
                          <Link to="/login">Login</Link>
                        </strong>
                      </p>
                    </Grid>
                  </Form>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default reduxForm({ form: FORM_NAME })(Register);
