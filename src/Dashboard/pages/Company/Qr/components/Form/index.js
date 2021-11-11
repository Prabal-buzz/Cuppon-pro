import { Input, Radio } from '../../../../../../App/components/MaterialUIFields';
import React, { useEffect } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { Button, Container, Grid, Paper } from '@material-ui/core';
import Validators from '../../../../../../App/utils/validators';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 16
  },
  saveBtn: {
    background: '#46BE8A',
  },
  cancelBtn: {
    backgroundColor: '#a62a22',
    color: 'white',
    marginLeft: 16
  },
  actionsContainer: {
    paddingBottom: 16,
    textAlign: 'right',
  }
}));

const QR_FORM = 'QRForm';

const QRForm = ({ initialData, initialize, handleSubmit, onCancel }) => {

  const classes = useStyles();

  useEffect(() => {
    if (initialData) {
      initialize(initialData);
    }
  }, [initialData, initialize]);

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={7}>
        <Paper>
          <Form className="headbox" onSubmit={handleSubmit}>
            <Grid container spacing={0} direction="column" className={classes.grid}>
              <Field
                label="Type"
                name="asset_type"
                options={[
                  {
                    label: "Room",
                    key: "room",
                    value: "Room"
                  },
                  {
                    label: "Table",
                    key: "table",
                    value: "Table"
                  }
                ]}
                component={Radio}
              />
              <Field
                variant="outlined"
                name="name"
                type="number"
                label="Number"
                placeholder="Enter Number"
                component={Input}
                validate={Validators.emptyValidator}
              />
              <Container className={classes.actionsContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  className={classes.saveBtn}
                >
                  Save
              </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={onCancel}
                  className={classes.cancelBtn}
                >
                  Cancel
                </Button>
              </Container>
            </Grid>
          </Form>
        </Paper>
      </Grid>
    </Grid>

  );
};

export default reduxForm({ form: QR_FORM })(QRForm);
