import {
  Grid,
  makeStyles,
  Button,
  // FormControl,
  // Select,
  // MenuItem,
  // InputLabel,
} from "@material-ui/core";
import React from "react";
// import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import "./style.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  filterButton: {
    backgroundColor: "#2a363a",
    zIndex: "1",
    color: "#fff",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: "#2a363a",
    },
  },
  margin: {
    margin: `0 ${theme.spacing(1)}px`,
  },
  buttonGreen: {
    backgroundColor: "#00be8d",
    color: "#fff",
    margin: `0 ${theme.spacing(1)}px`,
    "& .MuiSvgIcon-root": {
      fontSize: "16px",
    },
    "&:hover": {
      backgroundColor: "#00be8d",
    },
  },
}));

const TopButtonItems = () => {
  const classes = useStyles();
  // const [items, setItems] = useState("");

  /* const handleChange = (e) => {
    setItems(e.target.value);
  }; */

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} align="right">
          <Link to="/items/create">
            <Button variant="contained" className={classes.buttonGreen}>
              <AddIcon /> New
            </Button>
          </Link>
        </Grid>

        {/* <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className="searchBar">
                <label>Name</label>
                <br />
                <input type="text" placeholder="Name" className="text" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <div className="searchBar">
                    <label id="">Price Range</label>
                    <br />
                    <input type="text" placeholder="From" className="text" />
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <div className="searchBar_price">
                    <label id=""></label> <br />
                    <input type="text" placeholder="To" className="text" />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2} align="right">
            <br/>

              <Button variant="contained" className={classes.filterButton}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default TopButtonItems;
