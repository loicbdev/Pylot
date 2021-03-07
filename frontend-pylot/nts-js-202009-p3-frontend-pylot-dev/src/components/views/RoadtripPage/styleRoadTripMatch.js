import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '2em',
    textAlign: 'left',
  },
  [theme.breakpoints.up('md')]: {
    center: {
      width: '90vw',
      textAlign: 'center',
    },
  },
  comment: {
    fontFamily: 'inherit',
    outline: 'none',
    width: '90vw',
    backgroundColor: '#EBEBEB',
    borderRadius: '18px',
    fontSize: '16px',
    color: '#6E7781',
    textAlign: 'center',
    border: 'none',
  },
}));

export default useStyles;
