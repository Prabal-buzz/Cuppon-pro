import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { Field, Form, reduxForm } from 'redux-form';
import Validators from '../../../../../App/utils/validators';
import { Input } from '../../../../../App/components/MaterialUIFields';
import { useStyles } from '../../../../index.style';
import { CardMedia, Header } from '../../../../components';

const FORM_NAME = 'LoginForm';

const Login = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <Header />
      <Grid
        container
        display="flex"
        alignItems="center"
        justify="center"
        className={classes.formContainer}
      >
        <Grid container display="flex" justify="center" direction="row">
          <CardMedia />
          <Grid item md={6} sm={12}>
            <Card className={classes.cardBody}>
              <CardContent className={classes.content}>
                <Grid container spacing={1} justify="center">
                  <h2 className={classes.h2}>LOGIN</h2>
                </Grid>
                <Grid container spacing={1} justify="center">
                  <p className={classes.infoText}>
                    Please enter your email & password to continue.
                  </p>
                </Grid>
                <Grid container spacing={1} justify="center">
                  <Form className={classes.form} onSubmit={handleSubmit}>
                    <Field
                      placeholder="Email"
                      variant="outlined"
                      name="email"
                      type="email"
                      customClass={classes.inputRound}
                      component={Input}
                      validate={Validators.emailValidator}
                    />

                    <Field
                      placeholder="Password"
                      variant="outlined"
                      name="password"
                      type="password"
                      customClass={classes.inputRound}
                      component={Input}
                      validate={Validators.emptyValidator}
                    />

                    <Grid container spacing={1} justify="center">
                      <Link
                        to="/forgot/password"
                        className={classes.forgotPass}
                      >
                        Forgot Password?
                      </Link>
                    </Grid>

                    <Grid
                      className={classes.btns}
                      container
                      spacing={1}
                      justify="center"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.btnRound}
                      >
                        Login
                      </Button>
                    </Grid>
                  </Form>
                </Grid>
                <Grid container spacing={1} justify="center">
                  <p className={classes.normalText}>
                    Do not have an account?{' '}
                    <strong>
                      <Link to="/register">Sign Up</Link>
                    </strong>
                  </p>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default reduxForm({ form: FORM_NAME })(Login);
