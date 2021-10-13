import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgContainer: {
        '& img': {
            height: 150,
            width: 150,
            objectFit: "contain"
        }
    },
    imgCont: {
        '& img': {
            textAlign: 'center',
            height: 150,
            width: 150,
            objectFit: "contain"
        }
    },
    table: {
        width: '100%', 
      },
      bool: {
        width: '100%',    
        textAlign: 'center',
      },
      reason: {
        textAlign: 'center',
      },    
});

export default useStyles;