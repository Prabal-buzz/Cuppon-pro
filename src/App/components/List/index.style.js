import { default as customColors } from "../../theme/colors";
import { colors, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        color: customColors.textColor,
        opacity: 1,
        '& > svg:first-child': {
            marginRight: 18
        },
        '&:hover': {
            color: customColors.secondary.main,
            backgroundColor: colors.grey[100],
        }
    },
    selected: {
        '&.Mui-selected': {
            color: customColors.secondary.main,
            backgroundColor: colors.grey[100],
        },
    },
}));
