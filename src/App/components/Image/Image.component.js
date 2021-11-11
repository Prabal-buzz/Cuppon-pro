import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    image: {
    display: "flex",
    flexDirection: "column",
  },
    card: {
    maxHeight: 180,
    width: 320,
    marginRight: "10px",
    marginBottom: '8px'
  },
    media: {
    width: 320,
    paddingTop: "56.25%",
    objectFit: "contain",
    height: 0, 
  },
}));

const Image = ({image}) => {
  const classes = useStyles();

  return (
    <div className={classes.image}>
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={image}
                title="Paella dish"
            />
        </Card>
    </div>
  );
}

export default Image;

