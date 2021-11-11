import React from "react";
import {
  Grid,
  FormControl,
  TextField as Input,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useStyles } from "./index.style";

const ImageField = ({ input,
  label,
  mimeType,
  dataAllowedFileExtensions,
  meta: { touched, invalid, error },
}) => {
  const classes = useStyles();
  const [image, setImage] = React.useState("");

  const onInputChange = (e) => {
    e.preventDefault();
    let imageFile = e.target.files[0];
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      setImage(localImageUrl);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  };

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Typography className={classes.label}>{label}</Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <FormControl error={touched && invalid} className={classes.formControl}>
          {image && (<Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={image}
            />
          </Card>)}
          <Input
            type="file"
            name={input.name}
            accept={mimeType}
            onChange={onInputChange}
            data-allowed-file-extensions={dataAllowedFileExtensions} />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ImageField;
