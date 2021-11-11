import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, Form, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

import Validators from "../../../../../../App/utils/validators";
import SelectField from "../../../../../../App/components/MaterialUIFields/SelectField";

import "./style.scss";

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

const ChangeRole = ({ handleSubmit }) => {
  const classes = useStyles();
  const RoleList = useSelector((state) => state.roleGetList.response);

  return (
      <Form onSubmit={handleSubmit} className="wrapper-1">
        <Grid container spacing={3} direction="row" className="secondaryWrapper" alignItems="center">
          <Grid item xs={8}  >
              <Field
                variant="outlined"
                name="new_group"
                type="text"
                label="Role"
                component={SelectField}
                validate={Validators.emptyValidator}
                className={classes.text}
              >
                {RoleList?.data.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </Field>
          </Grid>
          <Grid item xs={4}  >
            <Button variant="contained" className={classes.button} type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </Form>
  );
};

export default reduxForm({ form: "CHANGE_ROLE_FORM" })(ChangeRole);
