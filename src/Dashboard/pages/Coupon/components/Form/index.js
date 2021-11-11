import {
  Input,
  Select,
  SelectSearch,
} from '../../../../../App/components/MaterialUIFields';
import React, { useContext, useEffect, useState } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import Validators from '../../../../../App/utils/validators';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../../../../App/services/api';
import { AuthContext } from '../../../../../App/auth';
import RadioButton from '../../../../../App/components/MaterialUIFields/RadioButton';
import Card from '../../../../../App/components/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 16
  },
  saveBtn: {
    background: '#46BE8A',
  },
  cancelBtn: {
    backgroundColor: '#a62a22',
    color: 'white',
    marginLeft: 16
  },
  actionsContainer: {
    paddingBottom: 16,
    textAlign: 'right',
  }
}));

const COUPON_FORM = 'CouponForm';

const COUPON_TYPES = {
  ALL: 'all',
  PRODUCT: 'product',
  CATEGORY: 'category'
};

const CouponForm = ({ initialData, initialize, change, handleSubmit, onCancel }) => {
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);

  const [couponType, setCouponType] = useState();
  const [couponTypes, setCouponTypes] = useState([]);
  const [applyOn, setApplyOn] = useState();
  const [discount, setDiscount] = useState();
  const [name, setName] = useState();

  const getCouponTypes = () => {
    const api = new Api();
    api
      .get(`product/coupon-type`, {})
      .then(res => {
        setCouponTypes(res.data);
      })
      .catch((e) => {
        setCouponTypes([]);
      });
  };

  const getApplyOnOptionsUrl = (couponType) => {
    if (couponType === COUPON_TYPES.PRODUCT && currentUser.company) {
      return `company/${currentUser.company[0].id}/product`;
    } else if (couponType === COUPON_TYPES.CATEGORY && currentUser.company) {
      return `company/${currentUser.company[0].id}/productcategory`;
    }
    return null;
  };

  useEffect(() => {
    getCouponTypes();
    if (initialData) {
      initialize(initialData);
    }
  }, [initialData, initialize]);

  const handleCouponTypeChange = (e) => {
    const couponType = e.target.value;
    setCouponType(couponType);
  };

  const onAppyOnChange = (e, option) => {
    if (option) {
      setApplyOn(option);
      change('object_id', option.id);
    }
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={7}>
        <Paper>
          <Form onSubmit={handleSubmit}>
            <Field
              label="Name"
              variant="outlined"
              name="name"
              component={Input}
              onChange={handleNameChange}
              validate={Validators.emptyValidator}
            />
            <Field
              label="Coupon type"
              variant="outlined"
              name="content_type"
              component={Select}
              onChange={handleCouponTypeChange}
              validate={Validators.emptyValidator}
            >
              {couponTypes.map((type) => (
                <option key={type.key} value={type.key}>
                  {type.name}
                </option>
              ))}
            </Field>
            {(couponType === COUPON_TYPES.PRODUCT || couponType === COUPON_TYPES.CATEGORY) && (
              <Field
                label={
                  (couponType === COUPON_TYPES.PRODUCT && 'Item') ||
                  (couponType === COUPON_TYPES.CATEGORY && 'Item Type')
                }
                variant="outlined"
                name="apply_on"
                component={SelectSearch}
                validate={Validators.emptyValidator}
                url={getApplyOnOptionsUrl(couponType)}
                defaultValue={applyOn}
                onAppyOnChange={onAppyOnChange}
              />
            )}
            <Field name="object_id" component="input" type="hidden" />
            <Field
              label=""
              variant="outlined"
              name="discount_type"
              options={[
                {
                  label: '% Discount',
                  key: 'perc_discount',
                  value: 'percentage',
                },
                {
                  label: 'Flat Discount',
                  key: 'flat_discount',
                  value: 'flat',
                },
              ]}
              component={RadioButton}
              validate={Validators.emptyValidator}
            />
            <Field
              label="Discount"
              variant="outlined"
              name="discount"
              component={Input}
              type="number"
              onChange={handleDiscountChange}
              validate={Validators.emptyValidator}
            />
            <Field
              label="Expiry date"
              variant="outlined"
              name="expiry_date"
              type="date"
              component={Input}
              validate={Validators.emptyValidator}
            />
            <Field
              label="Description"
              variant="outlined"
              name="description"
              component={Input}
              validate={Validators.emptyValidator}
            />
            <Container className={classes.actionsContainer}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.saveBtn}
              >
                Save
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={onCancel}
                className={classes.cancelBtn}
              >
                Cancel
                </Button>
            </Container>
          </Form>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Card
          company={currentUser.company}
          description={name}
          discount={discount}
          item={applyOn}
        />
      </Grid>
    </Grid>

  );
};

export default reduxForm({ form: COUPON_FORM })(CouponForm);
