const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        borderRadius: "8px",
        boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.07)",
    },
    addImage: {
        border: "1px solid #D0D3D5",
        display: "flex",
        height: "70%",
        justifyContent: "center",
        alignItems: "center",
        color: "#999",
        flexDirection: "column",
        margin: `${theme.spacing(2)}px 0px`,
        cursor: "pointer",
    },
    imageIcon: {
        height: "100px",
        width: "auto",
        marginBottom: "20px",
    },
    buttonGreen: {
        marginTop: theme.spacing(2),
        float: "right",
        backgroundColor: "#00be8d",
        color: "#fff",
        margin: `0 ${theme.spacing(1)}px`,
        "& .MuiSvgIcon-root": {
            fontSize: "16px",
        },
        "&:hover": {
            backgroundColor: "#00be8d",
        },
    },
    buttonRed: {
        marginTop: theme.spacing(2),
        float: "right",
        backgroundColor: "#be001b",
        color: "#fff",
        margin: `0 ${theme.spacing(1)}px`,
        "& .MuiSvgIcon-root": {
            fontSize: "16px",
        },
        "&:hover": {
            backgroundColor: "#be001b",
        },
    },
}));
