import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh',
    width: '10vh',
    margin: '2em',
    backgroundColor: theme.palette.blue.main,
    border: '2px solid white',
    borderRadius: '50px',
    '&:focus': {
      outline: 'none',
    },
  },
}));

export default styles;
