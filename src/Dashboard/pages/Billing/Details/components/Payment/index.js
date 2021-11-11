import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Field, Form, reduxForm } from "redux-form";
import CalTable from "./Table";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Validators from "../../../../../../App/utils/validators";
import TextField from "../../../../../../App/components/MaterialUIFields/TextField";
import SelectField from "../../../../../../App/components/MaterialUIFields/SelectField";

import "./style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    marginTop: '20px',
    marginBottom: '20px',
    background: '#ffffff 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '10px'
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

function Payment({ handleSubmit, date }) {
  const classes = useStyles();
  const location = useLocation();
  const data = location.state?.data;
  const verifiedBill = useSelector((state) => state.VerifyBill?.response);

  const columns = [
  { key: 'created_at', name: 'Date' },
  { key: 'total', name: 'Amount'},
  { key: 'taxed_amount', name: 'Discount' },
  { key: 'paid_amount', name: 'Amount Due'},
  { key: 'grand_total', name: 'Payment Value' },
  ];

  const col = [
  { key: 'date', name: 'Date' },
  { key: 'total', name: 'Amount'},
  { key: 'taxed_amount', name: 'Discount' },
  { key: 'paid_amount', name: 'Amount Due'},
  { key: 'grand_total', name: 'Payment Value' },
  ];

    return (
        < >
            <Form onSubmit={handleSubmit}>
              <Grid container spacing= {0} direction="row" xs={12}  className={classes.grid}>
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                      <Grid container direction="column">
                          <Grid item>
                              <Field
                                  variant="outlined"
                                  name="paid_amount"
                                  type="number"
                                  label="Pay Amount"
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
                  <Grid item xs={12} sm={6} lg={6} md={6}>
                      <Grid container direction="column">
                          <Grid item>
                              <Field
                                variant="outlined"
                                name="payment_mode"
                                type="text"
                                label="Method"
                                component={SelectField}
                                validate={Validators.emptyValidator}
                              >
                                <option aria-label="None" value="" disabled>
                                Select Method{" "}
                                </option>
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                              </Field>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
              {
                data ? 
                <CalTable columns={columns} rows={data}/>
                :
                <CalTable columns={col} rows={verifiedBill?.data} date={date}/>
              }
            </Form>
        </>
    );
  }

export default reduxForm({
  form: "PAYMENT_FORM",
})(Payment); 