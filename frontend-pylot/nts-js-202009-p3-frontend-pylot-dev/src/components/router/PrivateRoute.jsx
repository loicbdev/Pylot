import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import propType from '../../propTypes/PrivateRoutePropType';

const URL = process.env.REACT_APP_BACKEND_URL;

function PrivateRoute({ component: Component, ...rest }) {
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    axios
      .post(`${URL}auth/authenticate`, {
        token: localStorage.getItem('TOKEN'),
      })
      .then(({ data }) => {
        setIsValid(data);
      })
      .catch((err) => {
        setIsValid(err.response.data);
      });
  }, []);

  return (
    <>
      {isValid && (
        <Route
          {...rest}
          render={(props) =>
            isValid === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/connexion" />
            )
          }
        />
      )}
    </>
  );
}

PrivateRoute.propTypes = propType;

export default PrivateRoute;
