import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    color: theme.palette.blue.main,
    fontWeight: 'bold',
  },
}));

export default useStyle;
