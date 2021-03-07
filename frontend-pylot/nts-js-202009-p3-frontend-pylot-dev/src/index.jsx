import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './contexts/theme/MuiTheme';
import './global.css';
import App from './App';
import * as serviceWorker from './service-worker/serviceWorkerRegistration';
// import subscribeUser from './service-worker/subscription';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// If you want to ask the user to subscribe to push notifications uncomment next line
// subscribeUser();
