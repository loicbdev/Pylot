import { makeStyles } from '@material-ui/core/styles';

const ButtonStyle = makeStyles((theme) => ({
  root: {
    fontSize: '18px',
    textTransform: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '1rem',
  },

  primary: {
    backgroundColor: theme.palette.blue.main,
    color: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.blue.main,
      boxShadow: 'none',
    },
  },

  outlined: {
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.common.white,
    },
    border: `1px solid ${theme.palette.blue.main}`,
    color: theme.palette.blue.main,
  },

  success: {
    backgroundColor: theme.palette.green.main,
    '&:hover': {
      background: theme.palette.green.main,
    },
  },

  danger: {
    backgroundColor: theme.palette.red.main,
    '&:hover': {
      background: theme.palette.green.main,
    },
  },

  rounded: {
    backgroundColor: theme.palette.blue.main,
    '&:hover': {
      background: theme.palette.green.main,
    },
    borderRadius: '20px',
  },

  big: {
    width: '315px',
  },

  medium: {
    width: '200px',
    fontSize: '16px',
  },

  small: {
    width: '130px',
  },

  tiny: {
    width: '90px',
  },
}));

export default ButtonStyle;
