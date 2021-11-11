const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0 0 60px 0",
        borderRadius: "8px",
        boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.07)",
        color: "#7ea0b4",
    },
    table: {
        "& .MuiTableCell-head": {
            backgroundColor: "#2a363a",
            color: "#fff",
            padding: "10px 30px",
            position: "relative",
            fontWeight: "700",
            "&:last-child":{
                "& .MuiSvgIcon-root":{
                    display: "none"
                }
            }
        },
        "& .MuiSvgIcon-root": {
            position: "absolute",
            fontSize: "16px",
            top: "15px",
        },
        "& .MuiTableCell-body": {
            padding: "20px 30px",
            color: "#7ea0b4",
            fontWeight: "700",
        },
        "& .MuiTableCell-root": {
            borderBottom: "transparent",
        },
    },
    padding: {
        padding: `${theme.spacing(5)}px ${theme.spacing(3)}px `,
    },
    total: {
        width: "30%",
        float: "right",
    },
    totalText: {
        color: "#3a5869",
        fontWeight: "700",
    },
    select: {
        color: "#999",
        padding: theme.spacing(1.2),
        borderRadius: "5px",
        backgroundColor: "#fff",
        outline: "none",
        margin: `${theme.spacing(2.5)}px 0px`,
        border: "1px solid #3a5869",
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

    paginatingNumbers: {
        fontWeight: "600",
        margin: theme.spacing(0.6),
        padding: theme.spacing(1.2),
        border: "1px solid #3a5869",
        color: "#1b3e52",
        cursor: "pointer",
        fontSize: "12px",
    },
    paginatingNumbersActive: {
        color: "#fff",
        fontWeight: "600",
        margin: theme.spacing(0.6),
        padding: theme.spacing(1.2),
        border: "1px solid #3a5869",
        backgroundColor: "#1b3e52",
    },

    myPagination: {
        marginTop: theme.spacing(2),
        color: "#999",
        display: "flex",
        alignItems: "center",
        fontSize: "14px",
        "& .MuiSvgIcon-root": {
            color: "#1b3e52",
            fontSize: "12px",
        },
        "& .MuiPaginationItem-rounded": {
            borderRadius: "0",
        },
        "& .MuiPaginationItem-outlined": {
            border: "1px solid #3a5869",
            color: "#1b3e52",
            fontWeight: "600",
        },
        "& .MuiPaginationItem-page.Mui-selected": {
            backgroundColor: "#1b3e52",
            color: "#fff",
        },
        "& .MuiTablePagination-actions": {
            display: "none",
        },
    },
    pageNow: {
        border: "1px solid #3a5869",
        padding: "1px 6px",
        color: "#3a5869",
        borderRadius: "5px",
    },
}));
