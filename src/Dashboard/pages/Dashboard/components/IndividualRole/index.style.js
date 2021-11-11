const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(3)}px 10px`,
        borderRadius: "8px",
        boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.07)",
        color: "#9db5c9",
        height: '140px'
    },
    avatar: {
        width: "75px",
        height: "75px",
        margin: "0 auto",
    },
    dark: {
        color: "#648ca5",
    },
    center: {
        textAlign: "center",
    },
    position: {
        padding: "3px 18px",
        backgroundColor: "#203a53",
        color: "#fff",
        borderRadius: "5px",
        fontSize: "12px",
        marginTop: "10px",
        display: "inline-block",
    },
}));