import React from 'react';
import { Box, Card, CardContent, Grid, Hidden } from '@material-ui/core';
import { useStyles } from './index.style';

const CardMedia = () => {
  const classes = useStyles();

  return (
    <Hidden smDown>
      <Grid item md={6}>
        <Card className={classes.cardMedia}>
          <CardContent>
            <Grid container spacing={1} justify="center">
              <h2 className={classes.vc}>VENDOR CENTER</h2>
            </Grid>
            <Grid container spacing={1} justify="center">
              <img src="/login-welcome.svg" alt="Cuppon Pro" />
            </Grid>
            <Grid container spacing={1} justify="center">
              <h5 className={classes.h5}>OUR FEATURE</h5>
            </Grid>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column">
                <img
                  src="/create-cupon.svg"
                  alt="Cuppon Pro"
                  className={classes.featureImg}
                />
                <p className={classes.featureText}>CREATE CUPONS</p>
              </Box>
              <Box display="flex" flexDirection="column">
                <img
                  src="/track-account.svg"
                  alt="Cuppon Pro"
                  className={classes.featureImg}
                />
                <p className={classes.featureText}>CREATE CUPONS</p>
              </Box>
              <Box display="flex" flexDirection="column">
                <img
                  src="/personal-pos.svg"
                  alt="Cuppon Pro"
                  className={classes.featureImg}
                />
                <p className={classes.featureText}>CREATE CUPONS</p>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Hidden>
  );
};

export default CardMedia;
