import React from 'react';
import PropTypes from 'prop-types';

// material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

// styles
import './style.scss';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  activate: {
    backgroundColor: '#46be8a',
    color: 'white',
    fontSize: '12px',
    width: '177px',
    height: '40px',
  },
  delete: {
    backgroundColor: '#a62a22',
    color: 'white',
    fontSize: '12px',
    width: '177px',
    height: '40px',
  },
}));

const BoxCard = ({ cardBody, background, border, dotWidth, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      {title && (<h2> {title} </h2>)}
      <div className="boxCard">
        <Box component="span" m={1}>
          <Card className="BoxCardWrapper">
            <Paper
              elevation={0}
              square
              style={{
                background: background,
                borderTopColor: border,
                borderRightColor: border,
                borderBottomColor: border,
                borderLeftColor: background,
              }}
            />
            <CardContent className="cardContent"> {cardBody} </CardContent>
            <Paper
              elevation={1}
              square
              className="circleRight"
              style={{
                background: background,
                borderTopColor: border,
                borderRightColor: border,
                borderBottomColor: border,
                borderLeftColor: background,
              }}
            />
            <div className="cardDots" style={{ width: dotWidth }}>
              <hr className="new2" />
            </div>
          </Card>
        </Box>
        {/* <div className="cardBottomWrapper">
          <Button className={classes.activate}>Activate</Button>
          <Button className={classes.delete}>Delete</Button>
        </div> */}
      </div>
    </div>
  );
};

BoxCard.propTypes = {
  background: PropTypes.string,
  border: PropTypes.string,
  dotWidth: PropTypes.string,
};

BoxCard.defaultProps = {
  background: '#FFFFFF',
  border: '#eeeeee',
  dotWidth: '15rem',
};

export default BoxCard;
