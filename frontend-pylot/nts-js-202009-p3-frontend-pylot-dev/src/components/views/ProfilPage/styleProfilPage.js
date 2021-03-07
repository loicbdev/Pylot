import { makeStyles } from '@material-ui/core/styles';

const styleProfilPage = makeStyles((theme) => ({
  ProfilPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.palette.blue.main,
  },
  shutter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    backgroundColor: theme.palette.blue.main,
    margin: 0,
  },
  title: {
    alignSelf: 'center',
    backgroundColor: theme.palette.blue.main,
  },
  icon: {
    margin: '10px 0 0 0px',
    height: '25px',
    width: '25px',
  },
  bioSave: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '20px',
    padding: '15px',
    maxWidth: '415px',
    width: '80vw',
  },
  headingSelected: {
    padding: '15px',
    display: 'flex',
  },
  positionning: {
    margin: '0 0 120px  0',
  },
  bioInput: {
    borderStyle: 'none',
    width: '100%',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: 'white',
    outline: 'none',
    textAlign: 'center',
  },
}));

export default styleProfilPage;
