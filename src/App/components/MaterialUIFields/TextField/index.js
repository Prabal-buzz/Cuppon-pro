import React from 'react';
import { Grid, Typography, FormControl, TextField as Input } from '@material-ui/core';
import { useStyles } from './index.style';

const TextField = ({
  label,
  input,
  customClass,
  meta: { touched, invalid, error },
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      {label && (
        <Grid item xs={12} sm={4}>
          <Typography className={classes.label}>{label}</Typography>
        </Grid>
      )}
      <Grid item xs={12} sm={label ? 7 : 12}>
        <FormControl error={touched && invalid} className={classes.formControl}>
          <Input
            variant="outlined"
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...rest}
            className={customClass ? customClass : classes.field}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default TextField;
