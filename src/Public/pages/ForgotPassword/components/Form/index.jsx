import React from 'react';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { Field, Form, reduxForm } from 'redux-form';
import Validators from '../../../../../App/utils/validators';
import { Input } from '../../../../../App/components/MaterialUIFields';
import { useStyles } from '../../../../index.style';
import { CardMedia, Header } from '../../../../components';
import { Link } from 'react-router-dom';

const FORM_NAME = 'ForgotPwdForm';

const ForgotPwdForm = ({ handleSubmit }) => {
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
                  <h2 className={classes.h2}>PASSWORD RESET</h2>
                </Grid>

                <Grid container spacing={1} justify="center">
                  <p className={classes.infoText}>
                    <strong>Forgot Password?</strong> Please enter your
                    registered email & procced to get the password reset token.
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
                        Go back to{' '}
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

export default reduxForm({ form: FORM_NAME })(ForgotPwdForm);
