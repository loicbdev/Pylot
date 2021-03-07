import React from 'react';
import { useHistory } from 'react-router-dom';

import PhotoCameraOutlinedIcon from '@material-ui/icons/PhotoCameraOutlined';

import useStyles from './NoProfilPicYet.style';

function NoProfilPicYet() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <>
      <button
        type="button"
        className={classes.input}
        onClick={() => history.push('/profil-photo')}
      >
        <PhotoCameraOutlinedIcon
          style={{ color: 'white' }}
          fontSize="large"
          className={classes.icon}
        />
      </button>
    </>
  );
}

export default NoProfilPicYet;
