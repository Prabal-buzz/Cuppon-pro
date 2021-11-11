const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 355,
    background: 'transparent linear- gradient(138deg, #f1f1f1 0%, #ffffff 100%) 0% 0% no -repeat padding-box',
    boxShadow: '3px 3px 6px #00000029',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  help: {
    fontSize: '28px',
    color: '#203a53',
    textAlign: 'left',
  },
  visit: {
    fontSize: '18px',
    color: '#203a53',
    textAlign: 'left',
  },
  img: {
    width: 234,
    height: 180
  }
}));