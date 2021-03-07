import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  someInput: {
    margin: '7px 0',
    textAlign: 'left',
    backgroundColor: theme.palette.common.white,
    paddingBottom: '1rem',
  },
  list: {
    margin: '7px 0',
    textAlign: 'center',
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none',
    fontSize: '0.8rem',
  },
  linkContent: {
    color: theme.palette.blue.main,
  },
}));

export default useStyles;
