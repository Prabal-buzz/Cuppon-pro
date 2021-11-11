import React from 'react';
import { FormControl, Grid, makeStyles, Select, Typography } from '@material-ui/core';
import { renderFromHelper } from '../helpers';

const useStyles = makeStyles({
  root: {
    margin: '8px 0'
  },
  label: {
    height: '100%',
    verticalAlign: 'middle',
    padding: '12px 0',
    textAlign: 'center',
  },
  formControl: {
    width: '100%',
    '& > div': {
      border: 'none',
    }
  },
  field: {
    border: '1px solid #D0D3D5',
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px'
    }
  },
});

const SelectField = ({ label, input, meta: { touched, invalid, error }, children, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      {label && (<Grid item xs={12} sm={4}>
        <Typography className={classes.label}>{label}</Typography>
      </Grid>)}
      <Grid item xs={12} sm={7}>
        <FormControl className={classes.formControl} error={touched && invalid}>
          <Select
            native
            {...input}
            {...rest}
            variant="outlined"
            className={classes.field}
          >
            {children}
          </Select>
          {renderFromHelper({ touched, error })}
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SelectField;
