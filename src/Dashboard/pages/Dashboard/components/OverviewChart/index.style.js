export const useStyles = (theme) => ({
    root: {
        padding: theme.spacing(3),
        borderRadius: "8px",
        boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.07)",
        color: "#9db5c9",
        backgroundColor: '#fff',
    },
    header: {
        display: "flex",
    },
    mainHeader: {
        display: "flex",
        flex: "1",
    },
    selectMonth: {
        width: "120px",
        margin: '15px',
        padding: '5px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        '&:focus': {
            outline: 'none',
        },
        '&:active': {
            outline: 'none',
        },
    },
    profit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media(max-width:768px)": {
            marginRight: '10px',
        },
    },
    profitBtn: {
        height: '10px',
        width: '10px',
        backgroundColor: "#00b946",
        borderRadius: '50%',
        marginRight: '10px',
    },
    loss: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '0.2',
    },
    lossBtn: {
        height: '10px',
        width: '10px',
        backgroundColor: "#b22229",
        borderRadius: '50%',
        marginRight: '10px',
    },
});
