import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgContainer: {
        '& img': {
            height: 100,
            width: 100,
            objectFit: "contain"
        }
    }
});

export default useStyles;