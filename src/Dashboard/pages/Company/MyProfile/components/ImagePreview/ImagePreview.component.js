import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from 'redux-form';
import ImageField from "../../../../../../App/components/MaterialUIFields/ImageField";

const useStyles = makeStyles((theme) => ({
  image: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#46BE8A",
    width: "85px",
    height: "36px",
    color: "white",
    display: "flex",
    marginTop: "5px",
  },
}));

const ImagePreview = ({ handleSubmit, url, table }) => {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <form onSubmit={handleSubmit}>
      <Field
        name="image"
        type="file"
        label={url}
        component={ImageField}
        dataAllowedFileExtensions="jpg png bmp"
      />
      <Button
        variant="contained"
        className={classes.button}
        type="submit"
      >
        upload
      </Button>
      </form>
    </div>
  );
}

export default reduxForm({ fields: ["text"] })(ImagePreview);

