import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import {
  Grid,
  FormControl,
} from "@material-ui/core";

import Validators from "../../../../../../../App/utils/validators";
import TextField from "../../../../../../../App/components/MaterialUIFields/TextField";
import SelectField from "../../../../../../../App/components/MaterialUIFields/SelectField";

import "../style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "8px 0",
  },
  formControl: {
    width: "100%",
    "& > div": {
      border: "none",
    },
  },
  text: {
    lineHeight: "4rem",
    width: "5rem",
  },
  vat: {
    width: "auto",
    height: "auto",
  },
  button: {
    backgroundColor: "#46BE8A",
    height: "36px",
    color: "white",
    display: "flex",
  },
}));

const FormDocument = ({ handleSubmit, name, button }) => {
  const classes = useStyles();

  const ImageField = ({ input,
    label,
    mimeType,
    dataAllowedFileExtensions,
    meta: { touched, invalid, error },
  }, value) => {

    const onInputChange = (e) => {
      e.preventDefault();
      let imageFile = e.target.files[0];
      if (imageFile) {
        const localImageUrl = URL.createObjectURL(imageFile);
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
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} sm={label === "Add Logo Here" ? 3 : 7}>
          <FormControl error={touched && invalid} className={classes.formControl}>
            <input
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="firstWrapper">
          <div className="secondaryWrapper">
            <div>
              <Field
                variant="outlined"
                name="name"
                type="text"
                component={SelectField}
                validate={Validators.emptyValidator}
                className={classes.text}
              >
                <option aria-label="None" value="Company Number">
                  Company Number{" "}
                </option>
                <option value="Registration Number">Registration Number</option>
                <option value="Pan Number">Pan Number</option>
                <option value="VAT Number">VAT Number</option>
                <option value="JST">JST</option>
              </Field>
            </div>
            <div>
              <Field
                variant="outlined"
                name="document_number"
                type="text"
                placeholder="Enter Number"
                component={TextField}
                validate={Validators.emptyValidator}
                className={classes.text}
              />
            </div>
            <div>
              <Field
                name="document"
                type="file"
                component={ImageField}
                dataAllowedFileExtensions="jpg png bmp"
              />
            </div>
          </div>
        </div>
        <div className="buttn">
          <Button variant="contained" className={classes.button} type="submit">
            {button}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ fields: ["text"] })(FormDocument);
