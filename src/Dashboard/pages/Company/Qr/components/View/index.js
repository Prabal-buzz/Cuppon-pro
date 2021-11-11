import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import QRCode from 'react-qr-code';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '260px',
    margin: '16px',
  },
  media: {
    maxWidth: '280px',
    objectFit: 'cover',
  },
  logo: {
    width: '100%',
  },
  grab: {
    fontSize: '24px',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#FFFFFF',
    outline: 'none',
    // border: '1px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    background: '#ffffff 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 6px #00000029',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    width: '119px',
    height: '40px',
    backgroundColor: '#46BE8A',
    color: 'white',
    fontSize: '12px',
  },
  pdf: {
    width: '119px',
    height: '40px',
    backgroundColor: '#273238',
    color: 'white',
    fontSize: '12px',
  },
  cancel: {
    width: '119px',
    height: '40px',
    backgroundColor: '#E4EAEC',
    color: '#808C95',
    fontSize: '12px',
  },
}));

export default function QRView(props) {
  const classes = useStyles();

  const downloadDocument = () => {
    const input = document.getElementById('qrPrint');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('download.pdf');
    });
  };

  const printDocument = () => {
    const content = document.getElementById('qrPrint');
    const pri = document.getElementById('receipt').contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <Grid container spacing={0} direction="column">
            <Grid item id="qrPrint">
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
              >
                <Grid item>
                  <img
                    className={classes.logo}
                    src="/logo.svg"
                    alt="Cuppon Pro"
                  />
                </Grid>
                <Grid item>
                  <Typography className={classes.grab}>
                    Grab deals on every purchase
                  </Typography>
                </Grid>
                <Grid item>
                  <Card className={classes.root}>
                    <QRCode value={props.data} fgColor="#A62A22" />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="space-between"
              >
                <Grid item>
                  <Button className={classes.pdf} onClick={downloadDocument}>
                    {' '}
                    PDF{' '}
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.pdf} onClick={printDocument}>
                    {' '}
                    Print{' '}
                  </Button>
                </Grid>
                <Grid item>
                  <Button className={classes.cancel} onClick={props.onClose}>
                    {' '}
                    Cancel{' '}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
