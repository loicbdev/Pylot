import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    blue: {
      main: '#FA8A82',
    },
    green: {
      main: '#0ACF83',
    },
    red: {
      main: '#ff5a5a',
    },
    yellow: {
      main: '#ffc90b',
    },
    grey: {
      main: '#9e9e9e',
      background: '#ebebeb',
      inputBackground: '#f0f0f0',
      coPylotCardActive: '#c7c7c7',
    },
    footer: {
      active: '#8a8a8a',
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: { backgroundColor: '#FA8A82' },
    },
    MuiPickersClock: {
      pin: { backgroundColor: '#FA8A82' },
    },
    MuiPickersClockPointer: {
      pointer: { backgroundColor: '#FA8A82' },
      thumb: { border: '14px solid #FA8A82' },
      noPoint: { backgroundColor: '#FA8A82' },
    },
    MuiButton: {
      textPrimary: { color: '#FA8A82' },
    },
  },
});

export default theme;
