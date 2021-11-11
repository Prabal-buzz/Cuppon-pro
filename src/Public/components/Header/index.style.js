import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    colorRed: {
        color: '#A62A22'
    },
    header: {
        backgroundColor: '#fff',
        boxShadow: '0px 3px 30px #00000029',
        marginBottom: '20px',
        padding: '0 13px'
    },
    textCountry: {
        fontSize: '13px',
        lineHeight: '23px',
    },
    logoText: {
        fontFamily: 'Russo One, serif',
        color: '#273238',
        fontSize: '38px',
        lineHeight: '49px',
        margin: '0'
    },
}));