import React from 'react';
import { FormControl, Grid, makeStyles, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    margin: '8px 0'
  },
  label: {
    height: '100%',
    verticalAlign: 'middle',
    padding: '12px 0'
  },
  formControl: {
    width: '100%',
    '& > div': {
      border: 'none',
    }
  },
  field: {
    width: '100%',
    border: '1px solid #D0D3D5',
  },
});

const SwitchField = ({ label, input, meta: { touched, invalid, error }, children, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Typography className={classes.label}>{label}</Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <FormControl className={classes.formControl} error={touched && invalid}>
          <Switch
            {...input}
            {...rest}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SwitchField;
