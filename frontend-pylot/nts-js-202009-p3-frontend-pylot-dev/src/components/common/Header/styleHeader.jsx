import { makeStyles } from '@material-ui/core/styles';

const styleHeader = makeStyles((theme) => ({
  toolbar: {
    padding: 0,
    minHeight: 0,
  },
  head: (props) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: props.salmon
      ? theme.palette.blue.main
      : theme.palette.common.white,
    color: props.salmon ? theme.palette.common.white : theme.palette.blue.main,
    width: '100%',
    padding: '0.5rem',
    paddingLeft: '1.5rem',
  }),
  arrow: (props) => ({
    color: props.salmon ? theme.palette.common.white : theme.palette.blue.main,
    backgroundColor: props.salmon
      ? theme.palette.blue.main
      : theme.palette.common.white,
    paddingRight: '1.5rem',
  }),
}));

export default styleHeader;
