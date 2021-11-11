import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";

import Validators from "../../../../../../../App/utils/validators";
import TextField from "../../../../../../../App/components/MaterialUIFields/TextField";
import SelectField from "../../../../../../../App/components/MaterialUIFields/SelectField";

import "../style.scss";

const useStyles = makeStyles((theme) => ({
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
    width: "85px",
    height: "36px",
    color: "white",
    display: "flex",
  },
}));

const FormInput = ({ handleSubmit, name, button }) => {
  const classes = useStyles();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="wrapper-1">
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
                <option aria-label="None" value="website">
                  Website{" "}
                </option>
                <option value="facebook">FaceBook</option>
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
                <option value="linkedIn">LinkedIn</option>
              </Field>
            </div>
            <div>
              <Field
                variant="outlined"
                name="url"
                type="text"
                placeholder={`Enter URL`}
                component={TextField}
                validate={Validators.emptyValidator}
                className={classes.vat}
              />
            </div>
          </div>
          <div className="buttn">
          <Button variant="contained" className={classes.button} type="submit">
            {button}
          </Button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({ fields: ["text"] })(FormInput);

// const form = `s_FORM`;
// const selector = formValueSelector(form);

// export default compose(
//   connect((state) => {
//     const { name } = selector(state, "name");
//     return name;
//   }),
//   reduxForm({ form })
// )(FormInput);
