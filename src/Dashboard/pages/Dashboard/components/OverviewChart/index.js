import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import './ChartjsElements';
import { useStyles } from "./index.style";

const state = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Loss",
      data: [5, 15, 20, 15, 10, 14, 20],
      backgroundColor: "#b22229",
    },
    {
      label: "Profit",
      data: [10, 20, 30, 20, 50, 80, 65],
      backgroundColor: "#00b946",
    },
  ],
};
const options = {
  responsive: true,
  legend: {
    display: false
  },
  maintainAspectRatio: true,
  cornerRadius: 4,

  dataset: {
    stacked: true,
    barThickness: 60,
    gridLines: {
      display: false,
      drawBorder: false,
      color: '#f2f9fc',
    },
    ticks: {
      fontColor: "#9db5c9",
    },
  }
};

class OverviewChart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.header}>
          <div className={classes.mainHeader}>
            <h3>Overview</h3>
          </div>
          <div className={classes.profit}>
            <div className={classes.profitBtn}>
            </div>
              Profit
          </div>
          <div className={classes.loss}>
            <div className={classes.lossBtn}>

            </div>
              Loss
          </div>
          <select className={classes.selectMonth}>
            <option value="1 Month">1 Month</option>
            <option value="3 Month">3 Month</option>
            <option value="6 Month">6 Month</option>
            <option value="1 year">1 year</option>
          </select>
        </div>
        <div className={classes.root}>
          <Bar data={state} options={options} />

        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(OverviewChart);
