import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import login from '../../../services/login';
import CustomButton from '../../common/Buttons/Button';
import ConnectionLayout from '../../layouts/Connection/ConnectionLayout';
import useStyles from './styleFormConnection';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const [result, setResult] = useState({ error: '', message: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(history, state, setResult, setState);
  };

  const classes = useStyles();

  return (
    <ConnectionLayout>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              className={classes.someInput}
              name="email"
              autoComplete="email"
              autoFocus
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              className={classes.someInput}
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={handleChange}
            />
            <CustomButton
              text="Connexion"
              color="primary"
              size="big"
              onClick={handleSubmit}
            />
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing="5"
            >
              <Grid item>
                <Link
                  to="/inscription"
                  variant="body2"
                  className={classes.link}
                >
                  <p className={classes.linkContent}>
                    Pas encore membre? Inscription
                  </p>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      {result && <p style={{ textAlign: 'center' }}>{result.message}</p>}
    </ConnectionLayout>
  );
}
