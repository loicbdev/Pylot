import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  someInput: {
    textAlign: 'left',
    backgroundColor: theme.palette.common.white,
    paddingBottom: '1rem',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    padding: '2rem',
  },
  picker: {
    color: theme.palette.blue.main,
  },
}));

export default useStyles;
