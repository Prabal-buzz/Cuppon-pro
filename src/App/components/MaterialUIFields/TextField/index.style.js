const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles({
  root: {
    margin: '8px 0'
  },
  label: {
    fontFamily: 'Open Sans, Bold',
    height: '100%',
    verticalAlign: 'middle',
    padding: '12px 0',
    textAlign: 'center',
  },
  formControl: {
    width: '100%',
    '& > div': {
      border: 'none',
    }
  },
  field: {
    border: '1px solid #D0D3D5',
    width: '100%',

    '& .MuiInputBase-input': {
      padding: '10px 14px'
    }
  },
});
