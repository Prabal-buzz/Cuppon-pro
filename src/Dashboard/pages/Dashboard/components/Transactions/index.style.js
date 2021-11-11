const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        borderRadius: "8px",
        boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.07)",
        color: "#9db5c9",
        '& .MuiTableCell-head': {
            color: "#9db5c9",
        },
        '& .MuiTableCell-body': {
            color: '#648ca5'
        },
        '& .MuiTableCell-root': {
            borderBottom: '1px solid rgba(224, 224, 224, 0.4)'
        },
    },
    table: {
        minWidth: 650,
    },
    marginTop: {
        marginTop: '20px'
    },
}));