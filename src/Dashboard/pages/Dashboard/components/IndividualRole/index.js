import React from "react";
import { Avatar, Grid, Paper } from "@material-ui/core";
import { useStyles } from "./index.style";

const Roles = ({ role }) => {
  const {
    image,
    group,
    full_name,
    phone_number,
    address,
  } = role;
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.root}>
      <Grid container>
        <Grid item sm={4}>
          <div className={classes.center}>
            <Avatar src={image} alt={full_name} className={classes.avatar} />
            {group.map(groupName => <div className={classes.position}>{groupName}</div>)}
          </div>
        </Grid>
        <Grid item sm={8}>
          <p className={classes.dark}>Name: {full_name}</p>
          <p>Phone: {phone_number}</p>
          <p>Address: {address}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Roles;
