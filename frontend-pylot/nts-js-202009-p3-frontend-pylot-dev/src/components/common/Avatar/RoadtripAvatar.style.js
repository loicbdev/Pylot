import { makeStyles } from '@material-ui/core/styles';

const AvatarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '10vh',
    '& > *': {
      margin: theme.spacing(1),
    },
    filter: 'drop-shadow(2px 2px 15px rgba(0, 0, 0, 0.25))',
  },
  default: {
    border: '1px solid white',
  },
  small: {
    width: '70px',
    height: '70px',
  },
  large: {
    width: '160px',
    height: '160px',
  },
  verify: {
    border: `3px solid ${theme.palette.blue.main}`,
  },
}));

export default AvatarStyle;
