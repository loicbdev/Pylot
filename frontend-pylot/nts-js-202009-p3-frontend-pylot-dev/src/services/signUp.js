import axios from 'axios';

const register = (history, state, setResult, setState) => {
  const url = process.env.REACT_APP_BACKEND_URL;

  return axios
    .post(`${url}auth/sign-up`, state)
    .then(({ data }) => {
      setState(data);
      setResult({
        message: data.message,
      });
      setTimeout(() => {
        history.push('/connexion');
      }, 1500);
    })
    .catch((err) => {
      setResult({
        message: err.response.data.message[0].msg,
      });
      setState({
        ...state,
        [err.response.data.message[0].param]: '',
      });
    });
};

export default register;
