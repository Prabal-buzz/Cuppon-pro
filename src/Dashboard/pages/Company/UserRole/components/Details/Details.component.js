import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    wrap: {
        marginTop: '20px',
        background: '#ffffff 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '10px',
    },
    value: {
        fontFamily: 'Open Sans, Bold',
        height: '100%',
        padding: '8px 0',
    },
    label: {
        fontFamily: 'Open Sans, Bold',
        height: '100%',
        padding: '8px 0px 8px 20px',
    }
    }));

const Details = ({data}) => {
  const classes = useStyles();

  const gender = (gender) => {
    if(gender === "M"){
        return "Male";
    } else if(gender === "F"){
        return "Female";
    }else {
        return "Others";
    }
  }

  return (
    <Grid container spacing= {3} direction="row" className={classes.wrap}>
        <Grid item xs={12} sm={6}>
            <Grid container spacing= {1} direction="column">
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>Fullname:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.full_name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>Gender:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{gender(data.gender)}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>Country:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.country}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>City:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.city}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>Zip Code:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.zip_code}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Grid container spacing= {1} direction="column">
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>State:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.state}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.label}>Address:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.address}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>Email:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.email}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing= {0} direction="row">
                        <Grid item xs={12} sm={3}>
                            <Typography className={classes.label}>Phone No:</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.value}>{data.phone_number}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Details;

