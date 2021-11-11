import React from 'react';
import { Checkbox, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '8px 0'
  },
  formControl: {
    width: '100%',
    '& > div': {
      border: 'none',
    },
    '& .MuiCheckbox-root': {
      width: 'fit-content'
    }
  },
  label: {
    height: '100%',
    verticalAlign: 'middle',
    padding: '12px 0'
  },
});

export default function CheckboxField({ label, input, ...rest }) {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Typography className={classes.label}>{label}</Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Checkbox
          {...rest}
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      </Grid>
    </Grid>
  );
};
