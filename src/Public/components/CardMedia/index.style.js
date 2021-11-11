import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    cardMedia: {
        background: '#F3ECEC',
        borderRadius: '40px 0 0 40px',
        padding: '0 10px',
        height: '100%'
    },
    vc: {
        fontSize: '37px',
        lineHeight: '43px',
        color: '#A62A22',
        margin: '0 0 20px 0',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500'
    },
    h5: {
        background: '#fff',
        width: '100%',
        textAlign: 'center',
        padding: '2px 0',
    },
    featureImg: {
        transform: 'scale(0.8)',
        height: '71px',
        width: '92px',
        margin: '0 auto'
    },
    featureText: {
        margin: 0,
        fontSize: '15px',
        fontWeight: 700,
        lineHeight: '25px'
    },
}));