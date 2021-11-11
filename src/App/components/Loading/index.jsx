import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { useStyles } from './index.style';

export default function Loading({ loading }) {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
