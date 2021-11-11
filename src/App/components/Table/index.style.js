const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles({
    tableWrapper: {
        boxShadow: '0px 0px 30px #00000017',
        borderRadius: '10px 10px 0px 0px',
    },
    tableCell: {
        width: '15rem',
    },
    table: {
        minWidth: 700,
        background: '#273238 0% 0% noRepeat paddingBox',
        borderRadius: '10px 10px 0px 0px',
    },
    actionsColumn: {
        width: 200
    },
    viewEditBtn: {
        backgroundColor: '#46BE8A',
        color: 'white',
        marginLeft: 8,
    },
    disableBtn: {
        backgroundColor: '#a62a22',
        color: 'white',
        marginLeft: 8,
    },
    svg: {
        marginBottom: '-7px',
    },
});