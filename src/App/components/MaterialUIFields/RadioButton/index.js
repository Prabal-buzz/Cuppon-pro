import React from "react";
import {
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "8px 0",
  },
  label: {
    fontFamily: 'Open Sans, Bold',
    height: '100%',
    verticalAlign: 'middle',
    padding: '12px 0',
    textAlign: 'center',
  },
});

export default function RadioButton({ label, input, options, ...rest }) {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Typography className={classes.label}>{label}</Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <RadioGroup {...input} {...rest} row>
          {options.map((option) => (
            <FormControlLabel
              key={option.key}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </Grid>
    </Grid>
  );
}
