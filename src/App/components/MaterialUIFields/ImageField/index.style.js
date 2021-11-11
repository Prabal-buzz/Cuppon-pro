const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles({
    root: {
        margin: "8px 0",
    },
    card: {
        maxHeight: 180,
        width: 320,
        marginRight: 10,
        marginBottom: 8
    },
    media: {
        height: 180,
        width: 320,
        objectFit: "contain",
    },
    label: {
        height: "100%",
        verticalAlign: "middle",
        padding: "12px 0",
    },
    formControl: {
        width: "100%",

        "& .MuiInput-underline, & .MuiInput-underline:hover:not(.Mui-disabled):before, & .MuiInput-underline:before, & .MuiInput-underline:after": {
            borderBottom: "unset"
        }
    },
});