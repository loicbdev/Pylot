import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '80%',
  },
  someInput: {
    margin: '7px 0',
    textAlign: 'left',
    backgroundColor: theme.palette.common.white,
  },
  list: {
    margin: '7px 0',
    textAlign: 'center',
    fontSize: '1rem',
  },
  submit: {
    marginTop: '2em',
  },
  cgu: {
    margin: '7px 0',
    textAlign: 'center',
    fontSize: '0.6rem',
    color: theme.palette.grey.main,
  },
  cguLink: {
    color: theme.palette.blue.main,
  },
  [theme.breakpoints.up('md')]: {
    form: {
      width: '30%',
    },
  },
}));

export default useStyles;
