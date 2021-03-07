import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1em',
  },
  title: {
    width: '80vw',
    height: '10vh',
    textAlign: 'left',
  },
  cloudsContainer: {
    paddingTop: '10vh',
  },
  cloudBottom1: {
    position: 'relative',
    zIndex: '3',
    marginTop: '-10vh',
  },
  cloudBottom2: {
    position: 'relative',
    zIndex: '1',
    marginLeft: '50%',
    marginTop: '15vh',
  },
  cloudBottom3: {
    display: 'none',
  },
  noRoadtrips: {
    position: 'fixed',
    zIndex: '2',
    marginTop: '-12vh',
    marginLeft: '18%',
    textAlign: 'center',
  },
  positionning: {
    padding: '0 0 120px  0',
  },
  [theme.breakpoints.up('md')]: {
    cloudBottom1: {
      display: 'none',
    },
    cloudBottom3: {
      display: 'block',
      position: 'relative',
      zIndex: '3',
      marginTop: '-10vh',
      marginLeft: '38vw',
    },
    noRoadtrips: {
      marginLeft: '42%',
    },
    cloudBottom2: {
      marginLeft: '55%',
    },
  },
}));

export default style;
