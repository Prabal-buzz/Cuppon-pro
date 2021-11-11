import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from '../Form';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  addBtn: {
    backgroundColor: '#46BE8A',
    color: 'white',
    marginBottom: 16
  },
});

const CreateOrEdit = ({ handleSubmit, qr, onEditCancel }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return qr ? (
    <div>
      <Typography className={classes.title}>Edit QR</Typography>
      <Form
        initialData={qr}
        onSubmit={handleSubmit}
        onCancel={onEditCancel}
      />
    </div>
  ) : (
      <div>
        {!open && (
          <Button
            className={classes.addBtn}
            onClick={() => {
              setOpen(!open);
            }}
          >
            Add
          </Button>
        )}
        <Collapse in={open}>
          {open && (
            <>
              <Typography className={classes.title}>New QR</Typography>
              <Form onSubmit={handleSubmit} onCancel={() => setOpen(false)} />
            </>
          )}
        </Collapse>
      </div>
    );
};

export default CreateOrEdit;
