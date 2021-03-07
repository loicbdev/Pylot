import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '108vh',
    backgroundColor: theme.palette.blue.main,
  },
  pic: {
    height: '18vh',
    width: '18vh',
    marginTop: '3em',
    borderRadius: '80px',
    border: `2px solid ${theme.palette.common.white}`,
  },
  exemple: {
    color: theme.palette.common.white,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    listStyle: 'none',
    textAlign: 'left',
    width: '80%',
    padding: '0',
  },
  listItem: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0.5em',
    color: theme.palette.common.white,
    '& > img': {
      marginRight: '1em',
    },
  },
  error: {
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  [theme.breakpoints.up('md')]: {
    list: {
      width: '30vw',
    },
  },
}));

export default style;
