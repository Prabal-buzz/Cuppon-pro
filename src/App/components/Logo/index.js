import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './index.style';

export default function Logo() {
  const classes = useStyles();

  return <Link className={classes.root} to="/"><img className={classes.logo} src="/logo.svg" alt="Cuppon Pro" /></Link>;
};
