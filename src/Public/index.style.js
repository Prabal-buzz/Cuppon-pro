import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    pageContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    regPageContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll'
    },
    formContainer: {
        flex: '1 0 auto',
        width: '70%',
        margin: '0 auto',

        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    signUpFormContainer: {
        flex: '1 0 auto',
        width: '90%',
        margin: '0 auto',

        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    formHeader: {
        boxShadow: '0px 3px 6px #00000029',
        marginBottom: '10px',

        '& h2': {
            margin: '0',
            color: '#A62A22',
            textTransform: 'uppercase',
            padding: '12px 0',
            fontWeight: '700'
        }
    },
    cardBody: {
        borderRadius: '0 40px 40px 0',
        padding: '0 12px',
        height: '100%',

        [theme.breakpoints.down('sm')]: {
            borderRadius: '30px',
        }
    },
    signUpRoot: {
        borderRadius: '10px'
    },
    content: {
        display: 'flex',
        flexDirection: 'column'
    },
    h2: {
        fontSize: '32px',
        lineHeight: '40px',
        margin: '27px 0',
        color: '#A62A22',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center'
    },
    infoText: {
        color: '#A62A22',
        fontSize: '14px',
        textAlign: 'center',
        margin: '22px 0 40px'
    },
    inputRound: {
        border: '1px solid #D0D3D5',
        width: '100%',

        '& .MuiInputBase-formControl': {
            borderRadius: '25px',
            backgroundColor: '#F3F3F3'
        },
        '& .MuiInputBase-input': {
            padding: '10px 14px'
        }
    },
    btnRound: {
        fontSize: '17px',
        lineHeight: '23px',
        padding: '15px 100px',
        borderRadius: '25px'
    },
    normalText: {
        fontSize: '15px',
        lineHeight: '23px',
        color: '#434343',
        margin: '0',
        '& a': {
            color: '#434343',
        }
    },
    form: {
        width: '70%',

        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    fullWidthForm: {
        width: '100%'
    },
    btns: {
        margin: '32px 0'
    }
}));