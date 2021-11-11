import React, { useEffect, useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { Field, reduxForm, formValueSelector } from "redux-form";
import { productListing } from "../../store/actions";
import { AuthContext } from '../../../../../../App/auth';

import Validators from "../../../../../../App/utils/validators";
import TextField from "../../../../../../App/components/MaterialUIFields/TextField";
import SelectField from "../../../../../../App/components/MaterialUIFields/SelectField";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'black',
    color: 'white',
    height: '32px',
  },
  body: {
    fontSize: 14,
    border: 'none'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  disable: {
    width: '119px',
    height: '40px',
    backgroundColor: '#a62a22',
    color: 'white',
    fontSize: '12px',
    marginLeft: '40px',
  },
  addline: {
    width: '119px',
    height: '40px',
    backgroundColor: '#3093F6',
    color: 'white',
    fontSize: '12px',
  },
});

function EditRow({ change, text, handleSubmit, index, form_name }) {
  const classes = useStyles();
  const customColumnStyle1 = { width: "2.5%" };
  const customColumnStyle2 = { width: "25%" };
  const customColumnStyle3 = { width: "12.3%" };
  const customColumnStyle4 = { width: "12%" };
  const dispatch = useDispatch();
  const context = useContext(AuthContext);
  const selector = formValueSelector(form_name);
  const products = useSelector((state) => state.ProductListing.response);
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(productListing(context.currentUser.company[0].id));
  }, [dispatch, context]);

  const handleUnitChange = (event, value) => {
    const item = products?.data.filter(item => item.name === value);
    const newCode = item[0].product_code;
    change('product_code', newCode);
  }

  const calulateTotalR = (event, value) => {
    const quantity = selector(state, 'quantity');
    const newCode = (value * quantity);
    change('total', newCode);
  }

  const calulateTotalQ = (event, value) => {
    const rate = selector(state, 'rate');
    const newCode = (rate * value);
    change('total', newCode);
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledTableRow>
        <StyledTableCell style={customColumnStyle1} align="left">
          {index}
        </StyledTableCell>
        <StyledTableCell colSpan={2} style={customColumnStyle2} align="left">
          <Field
            variant="outlined"
            name="product_name"
            type="text"
            component={SelectField}
            validate={Validators.emptyValidator}
            onChange={handleUnitChange}
          >
            <option aria-label="None" value="" disabled>
              Search Item{" "}
            </option>
            {products?.data.map((option) => (
              <option key={option.id} value={option.name} >
                {option.name}
              </option>
            ))}
          </Field>
        </StyledTableCell>
        <StyledTableCell style={customColumnStyle3} align="left">
          <Field
            variant="outlined"
            name="product_code"
            type="text"
            component={TextField}
          />
        </StyledTableCell>
        <StyledTableCell style={customColumnStyle3} align="left">
          <Field
            variant="outlined"
            name="rate"
            type="number"
            component={TextField}
            onChange={calulateTotalR}
          />
        </StyledTableCell>
        <StyledTableCell style={customColumnStyle3} align="left">
          <Field
            variant="outlined"
            name="quantity"
            type="number"
            component={TextField}
            onChange={calulateTotalQ}
          />
        </StyledTableCell>
        <StyledTableCell style={customColumnStyle3} align="left">
          <Field
            variant="outlined"
            name="total"
            type="number"
            component={TextField}
          />
        </StyledTableCell>
        <StyledTableCell style={customColumnStyle4} align="center">
          <Button className={classes.addline} type="submit" > {text} </Button>
        </StyledTableCell>
      </StyledTableRow>
    </form>
  );
}

export default reduxForm({ fields: ["text"] })(EditRow);