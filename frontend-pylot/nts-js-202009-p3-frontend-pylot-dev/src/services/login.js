import axios from 'axios';

const login = (history, state, setResult, setState) => {
  const url = process.env.REACT_APP_BACKEND_URL;

  return axios
    .post(`${url}auth/login`, state)
    .then(({ data }) => {
      setState(data);
      localStorage.setItem('TOKEN', data.token);
      localStorage.setItem('id', data.user[0].id);
      history.push('/map');
    })
    .catch((err) => {
      setResult({
        message: err.response.data.message,
      });
      setState({
        email: '',
        password: '',
      });
    });
};

export default login;
