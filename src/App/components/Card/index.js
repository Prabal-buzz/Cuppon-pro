import React from 'react';
import BoxCard from '../BoxCard';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rounded: {
    width: '145px',
    height: '185px',
    backgroundColor: 'transparent',
  },
  discount: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: '60px',
    paddingBottom: '22px',
  },
  companyName: {
    color: 'white',
    marginRight: '40px',
    marginTop: '8px',
  },
  avatar: {
    border: '2px solid white',
  },
  productImg: {
    width: '145px',
    height: '148px',
  },
  description: {
    fontSize: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
const CardBody = ({ item, description, discount, company, product }) => {
  const classes = useStyles();
  return (
    <div className="FashionCardWrapper">
      <div className="topWrapper">
        <div className="storeAvatar">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.avatar}
          />
        </div>
        <div>
          <Typography className={classes.companyName}>
            {company ? company.name : 'CL STORE'}
          </Typography>
        </div>
      </div>
      <div className="midWrapper">
        <div className="info">
          <h1>{item ? item.name : 'All'}</h1>
          <Typography className={classes.description}>{description}</Typography>
        </div>
        <div className="roundedAvatarWrapper">
          <Avatar variant="rounded" className={classes.rounded}>
            <img
              alt={description}
              src={item && item.images ? item.images[0] : '/static/images/avatar/1.jpg'}
              className={classes.productImg}
            />
          </Avatar>
        </div>
      </div>
      <div>
        <Typography className={classes.discount}>
          {discount}% Discount
        </Typography>
      </div>
    </div>
  );
};

const Card = ({ item, description, discount, company }) => {
  return (
    <BoxCard
      cardBody={CardBody({ item, description, discount, company })}
      dotWidth="325px"
    />
  );
};
export default Card;
