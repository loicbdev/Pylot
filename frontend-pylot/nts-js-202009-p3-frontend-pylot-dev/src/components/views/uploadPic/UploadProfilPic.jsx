import React, { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from '../../common/Header/Header';
import Button from '../../common/Buttons/Button';
import examplePic from '../../../images/examplePic.png';
import bouclier from '../../../images/logos/Bouclier.png';

import { UserContext } from '../../../contexts/UserContextProvider';

import useStyles from './uploadProfilPic.style';

function UploadProfilPic() {
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const { user, setUser } = useContext(UserContext);
  const inputRef = useRef();
  const history = useHistory();
  const classes = useStyles();

  const selectFile = (e) => {
    setError();
    setFile(e.target.files[0]);
  };

  const upload = async () => {
    try {
      const fd = new FormData();
      fd.append('pic', file);
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}users/${user.id}/profil-pic`,
        fd,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
          },
        }
      );
      setFile();
      setUser({ ...user, profilPicture: result.data.user.profilPicture });
      history.push('/profil');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <Header content="Choisir une photo" />
      <main className={classes.container}>
        <img className={classes.pic} src={examplePic} alt="profil" />
        <p className={classes.exemple}>Exemple de bonne photo 😍</p>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            {' '}
            <img src={bouclier} alt="bouclier valide" />
            Photo de face
          </li>
          <li className={classes.listItem}>
            {' '}
            <img src={bouclier} alt="bouclier valide" />
            Photo claire et lumineuse
          </li>
          <li className={classes.listItem}>
            {' '}
            <img src={bouclier} alt="bouclier valide" />
            Il n&apos;y a que vous sur la photo
          </li>
          <li className={classes.listItem}>
            {' '}
            <img src={bouclier} alt="bouclier valide" />
            Pas de lunettes de soleil
          </li>
        </ul>

        {error && <p className={classes.error}>{error}</p>}

        <input
          style={{ display: 'none' }}
          type="file"
          onChange={selectFile}
          ref={inputRef}
        />

        <Button
          text="Choisir une photo"
          size="big"
          color="outlined"
          onClick={() => inputRef.current.click()}
        />

        {file && (
          <Button text="Valider" size="tiny" color="outlined" onClick={upload}>
            Valider
          </Button>
        )}
      </main>
    </>
  );
}

export default UploadProfilPic;
