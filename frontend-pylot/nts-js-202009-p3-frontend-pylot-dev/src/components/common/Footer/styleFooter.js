import { makeStyles } from '@material-ui/core/styles';

const styleFooter = makeStyles((theme) => ({
  toolbar: {
    minHeight: '85px',
    justifyContent: 'space-around',
    boxShadow: `0 -7px 10px -5px ${theme.palette.footer.active}`,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 0,
    zIndex: 9,
  },
  section: {
    padding: ' 1rem 0 0 0 ',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.footer.active,
  },
}));

export default styleFooter;
