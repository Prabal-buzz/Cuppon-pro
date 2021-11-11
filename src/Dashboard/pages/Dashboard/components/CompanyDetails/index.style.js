const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        borderRadius: "8px",
        boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.07)",
        color: "#9db5c9",
    },
    avatar: {
        width: "4.5vw",
        height: "4.5vw",
        "@media(max-width: 768px)": {
            width: "90px",
            height: "90px",
        }
    },
    header: {
        color: "#648ca5",
        fontWeight: "700",
        margin: "0px",
        marginBottom: "5px",
        fontSize: "20px",
    },
    margin: {
        margin: "0px",
        marginBottom: "5px",
    },
    smallText: {
        fontSize: "12px",
        marginBottom: "0px",
    },
}));