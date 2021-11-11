import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './index.style';

export default function CustomList(props) {
  const { items } = props;
  const classes = useStyles();

  return (
    <List>
      {items.map((item) =>
        item.permitted ? (
          <Link key={item.key} to={item.path} color="inherit">
            <ListItem button classes={classes}>
              {item.icon} <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ) : (
          <ListItem key={item.key} button classes={classes}>
            {item.icon} <ListItemText primary={item.text} />
          </ListItem>
        )
      )}
    </List>
  );
}
