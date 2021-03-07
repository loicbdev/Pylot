import React, { useEffect, useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import childrenPropType from '../propTypes/ChildrenPropType';

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [, setError] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const token = localStorage.getItem('TOKEN');
    const iduser = localStorage.getItem('id');
    axios
      .get(`${url}users/${iduser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setUser(data[0]);
      })
      .catch((err) => {
        let message;
        if (err.response.status === 401) {
          message = "You're not authorized to access these datas";
        } else {
          message = err.response.data.errorMessage;
        }
        setError(message);
        history.push('/connexion');
      });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = childrenPropType;
