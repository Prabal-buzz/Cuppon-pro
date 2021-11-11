const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles({
    head: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '30px',
    },
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
    view: {
        width: '119px',
        height: '40px',
        backgroundColor: '#46BE8A',
        color: 'white',
        fontSize: '12px',
    },
    disable: {
        width: '119px',
        height: '40px',
        backgroundColor: '#a62a22',
        color: 'white',
        fontSize: '12px',
        marginLeft: '40px',
    },
    search_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    filter: {
        backgroundColor: '#fff',
        padding: 0,
        margin: 0,
    },
    search_field: {
        padding: 0,
        margin: 0,
        backgroundColor: "#fff",
    },
    topbar: {
        display: "flex",
        marginBottom: '10px'
    },
    active: {
        color: '#fff',
        backgroundColor: "#203A53",
    },
    history: {
        color: '#808C95',
        backgroundColor: "#E4EAEC",
    },
    field: {
        border: '1px solid #D0D3D5',
        width: '100%',
        '& .MuiOutlinedInput-input': {
            padding: '10px 14px'
        }
    },
});