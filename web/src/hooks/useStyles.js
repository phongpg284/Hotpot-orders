import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgContainer: {
        '& img': {
            height: 150,
            width: 150,
            objectFit: "contain"
        }
    }
});

export default useStyles;