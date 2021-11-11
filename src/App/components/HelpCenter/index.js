import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './index.style';


const HelpCenter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.help}>Help Center</Typography>
      <Typography className={classes.visit}>Visit our help center</Typography>
      <img
        src="https://img.freepik.com/free-vector/support-with-icons_1212-151.jpg?size=338&ext=jpg"
        alt="Help"
        className={classes.img}
      />
    </div>
  );
};

export default HelpCenter;
