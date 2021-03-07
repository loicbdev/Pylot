import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    maxWidth: '350px',
  },
  prefRoadTrip: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
  },
}));

export default useStyles;
