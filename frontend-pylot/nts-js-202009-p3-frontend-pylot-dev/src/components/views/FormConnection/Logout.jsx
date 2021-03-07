import React from 'react';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../common/Buttons/Button';
import useStyles from './styleLogout';

const Logout = () => {
  const history = useHistory();

  const handleSubmit = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('id');
    history.push('/connexion');
  };

  const classes = useStyles();

  return (
    <div className={classes.logoutButton}>
      <CustomButton
        color="outlined"
        text="Déconnexion"
        size="small"
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Logout;
