import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            '-webkit-box-shadow': '0 4px 8px #ccc',
            '-moz-box-shadow': '0 4px 8px #ccc',
            'box-shadow': '0 4px 8px #ccc'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    toolbarContainer: {
        justifyContent: 'flex-end'
    },
    drawerPaper: {
        width: drawerWidth,
        '-webkit-box-shadow': '4px 0 8px #bbb',
        '-moz-box-shadow': '4px 0 8px #bbb',
        'box-shadow': '4px 0 8px #bbb'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));