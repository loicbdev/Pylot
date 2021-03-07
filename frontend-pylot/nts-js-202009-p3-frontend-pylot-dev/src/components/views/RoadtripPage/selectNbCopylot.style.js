import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.blue.main,
    fontWeight: 'bold',
    padding: '2rem',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: '10vh',
    width: '10vh',
    border: `2px solid ${theme.palette.blue.main}`,
    backgroundColor: theme.palette.common.white,
    borderRadius: '60px',
    color: theme.palette.blue.main,
    margin: '1em',
    outline: 'none',
  },
  number: {
    border: 'none',
    textAlign: 'center',
    marginTop: '1.2em',
    width: '10vh',
    height: '10vh',
  },
  next: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    backgroundColor: theme.palette.blue.main,
  },
  arrow: {
    color: theme.palette.common.white,
  },
  [theme.breakpoints.up('md')]: {
    title: {
      textAlign: 'center',
    },
  },
}));

export default useStyles;
