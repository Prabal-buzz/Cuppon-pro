import { Button, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Field, Form, reduxForm } from "redux-form";
import { Input, Radio, Select, FileInput } from "../../../../../App/components/MaterialUIFields";
import validators from "../../../../../App/utils/validators";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { useStyles } from "./index.style";

const form = "ReduxForm";

const ProductForm = (props) => {

  const classes = useStyles();
  const [mounted, setMounted] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!mounted) {
      new Promise((resolve, reject) => {
        props.getCategories(resolve, reject);
      }).then(res => {
        setCategories(res.data);
      }).catch(e => {
        setCategories([]);
      });
      setMounted(true);
    }
  }, [props, mounted, setMounted]);

  return (
    <Form onSubmit={props.handleSubmit}>
      <Paper className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Field
              label="Name"
              name="name"
              type="text"
              component={Input}
              validate={validators.emptyValidator}
            />
            <Field
              label="Code"
              name="product_code"
              type="text"
              component={Input}
              validate={validators.emptyValidator}
            />
            <Field
              label="Status"
              name="status"
              options={[
                {
                  label: "Active",
                  key: "ACTIVE",
                  value: "ACTIVE",
                },
                {
                  label: "Inactive",
                  key: "INACTIVE",
                  value: "INACTIVE",
                },
              ]}
              component={Radio}
              validate={validators.emptyValidator}
            />
            <Field
              label="Category"
              name="product_category"
              component={Select}
              validate={validators.emptyValidator}
            >
              {categories.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Field>
            <Field
              label="Brand Name"
              name="brand_name"
              type="text"
              component={Input}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              type="file"
              component={FileInput}
              label="Image"
              name="image"
              dataAllowedFileExtensions="jpg png"
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h3>Sales Information</h3>
          <Paper className={classes.root}>
            <Field
              label="Selling Price"
              name="selling_price"
              type="text"
              component={Input}
            />
            <Field
              label="Selling Currency"
              name="selling_currency"
              component={Select}
            >
              <option value="USD">USD</option>
              <option value="NRS">NRS</option>
              <option value="INR">INR</option>
            </Field>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <h3>Purchase Information</h3>
          <Paper className={classes.root}>
            <Field
              label="Purchase Price"
              name="purchase_price"
              type="text"
              component={Input}
            />
            <Field
              label="Purchase Currency"
              name="purchase_currency"
              component={Select}
            >
              <option value="USD">USD</option>
              <option value="NRS">NRS</option>
              <option value="INR">INR</option>
            </Field>
          </Paper>
        </Grid>
      </Grid>

      <Button
        onClick={props.onCancel}
        variant="contained"
        className={classes.buttonRed}
      >
        Cancel
      </Button>
      <Button type="submit" variant="contained" className={classes.buttonGreen}>
        Save
      </Button>
    </Form>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(actions.getCategories(data)),
});

const mapStateToProps = (state) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: form, enableReinitialize: true })(ProductForm));
