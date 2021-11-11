import { Typography } from '@material-ui/core';
import React from 'react';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// router

const useStyles = makeStyles((theme) => ({
  number: {
    fontSize: '355px',
    color: 'white',
  },
  oops: {
    fontSize: '55px',
    color: 'white',
  },
  message: {
    fontSize: '24px',
    color: 'white',
  },
  button: {
    width: '458px',
    height: '87px',
    backgroundColor: '#a62a22',
    borderRadius: '25px',
    fontSize: '31px',
    color: 'white',
  },
}));

const PageNotFound = ({ history }) => {
  const classes = useStyles();

  const _redirectToHome = () => {
    history.push('/');
  };
  return (
    <div className='errorWrapper'>
      <div>
        <Typography className={classes.number}>404</Typography>
      </div>
      <div className='secondComp'>
        <Typography className={classes.oops}>Ooops!</Typography>
        <Typography className={classes.message}>
          We couldn't find the page that you are looking for
        </Typography>
        <Button className={classes.button} onClick={_redirectToHome}>
          Go back home
        </Button>{' '}
      </div>
    </div>
  );
};

export default PageNotFound;
