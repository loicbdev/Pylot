import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FormControl, TextField } from '@material-ui/core';

import SubscribeLayout from '../../layouts/Subscribe/SubscribeLayout';
import CustomButton from '../../common/Buttons/Button';

import years from '../../../utils/register_form/yearsList';
import genders from '../../../utils/register_form/genderOptions';
import signUp from '../../../services/signUp';

import useStyles from './styleFormSubscribe';

function FormSubscribe() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    birthYear: '',
    gender: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const [result, setResult] = useState({ message: '' });
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
    signUp(history, state, setResult, setState);
  };

  const classes = useStyles();

  return (
    <SubscribeLayout>
      <FormControl className={classes.form}>
        <TextField
          id="firstname"
          name="firstName"
          label="Prénom"
          className={classes.someInput}
          value={state.firstName}
          onChange={handleChange}
          multiline
        />
        <TextField
          id="lastname"
          name="lastName"
          label="Nom"
          className={classes.someInput}
          value={state.lastName}
          onChange={handleChange}
          multiline
        />
        <TextField
          id="birthyear"
          name="birthYear"
          label="Année de naissance"
          placeholder="année"
          select
          className={classes.someInput}
          value={state.birthyear}
          onChange={handleChange}
        >
          {years().map((year) => (
            <p className={classes.list} key={year} value={year}>
              {year}
            </p>
          ))}
        </TextField>

        <TextField
          id="gender"
          name="gender"
          label="Genre"
          select
          className={classes.someInput}
          value={state.gender}
          onChange={handleChange}
        >
          {genders.map((option) => (
            <p className={classes.list} key={option.value} value={option.value}>
              {option.text}
            </p>
          ))}
        </TextField>

        <TextField
          id="email"
          name="email"
          label="Email"
          className={classes.someInput}
          value={state.email}
          onChange={handleChange}
          multiline
        />

        <TextField
          id="password"
          name="password"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          className={classes.someInput}
          value={state.password}
          onChange={handleChange}
        />

        <TextField
          id="passwordVerification"
          name="passwordConfirmation"
          label="Confirmer le mot de passe"
          type="password"
          autoComplete="current-password"
          className={classes.someInput}
          value={state.passwordConfirmation}
          onChange={handleChange}
        />
      </FormControl>
      <div className={classes.submit}>
        <CustomButton
          text="S'inscrire"
          color="primary"
          size="big"
          onClick={handleSubmit}
        />
      </div>
      {result && <p style={{ textAlign: 'center' }}>{result.message}</p>}
      <div className={classes.cgu}>
        <p>
          En vous inscrivant, vous acceptez nos
          <Link to="/cgu" className={classes.cguLink}>
            {' CGU. '}
          </Link>
        </p>
      </div>
    </SubscribeLayout>
  );
}

export default FormSubscribe;
