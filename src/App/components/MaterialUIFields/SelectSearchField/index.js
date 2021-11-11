import React, {Fragment, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import Api from '../../../services/api';

const useStyles = makeStyles({
  root: {
    margin: '8px 0',
  },
  label: {
    height: '100%',
    verticalAlign: 'middle',
    padding: '12px 0',
    textAlign: 'center',
  },
});

const SelectSearch = ({
  url,
  label,
  input,
  customClass,
  meta: {touched, invalid, error},
  defaultValue,
  onAppyOnChange,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    if (!loading) {
      return undefined;
    }

    const api = new Api();
    api.get(url).then((res) => {
      setOptions(res.data);
    });
  }, [loading, url]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12} sm={4}>
        <Typography className={classes.label}>{label}</Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Autocomplete
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(cur, sel) => cur && sel && cur.id === sel.id}
          getOptionLabel={(option) => option.name || ''}
          options={options}
          loading={loading}
          value={defaultValue ? defaultValue : null}
          onChange={onAppyOnChange}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={label}
              variant="outlined"
              error={touched && invalid}
              helperText={touched && error}
              {...input}
              {...rest}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default SelectSearch;
