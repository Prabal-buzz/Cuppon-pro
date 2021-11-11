import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './index.style';

const Header = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.header}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <p className={classes.textCountry}>
        Country: <strong>NP</strong>
      </p>
      <h1 className={classes.logoText}>
        CUPPON <span className={classes.colorRed}>PRO</span>
      </h1>
      <p></p>
    </Box>
  );
};

export default Header;
