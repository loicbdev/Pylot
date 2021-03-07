import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100vw',
  },
  validate: {
    marginTop: '2em',
  },
  [theme.breakpoints.up('md')]: {
    buttons: {
      width: '30vw',
    },
  },
}));

export default useStyles;
