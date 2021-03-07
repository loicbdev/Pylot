import React, { useContext } from 'react';
import axios from 'axios';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { UserContext } from '../../../contexts/UserContextProvider';

import Header from '../../common/Header/Header';
import Button from '../../common/Buttons/Button';

import useStyles from './styleProfilePreferences';

function ProfilPreferences() {
  const classes = useStyles();
  const [distance, setDistance] = React.useState('');
  const [nbCoPylot, setNbCoPylot] = React.useState('');
  const [message, setMessage] = React.useState();
  const { user } = useContext(UserContext);

  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
  };

  const handleChangeNbCoPylot = (event) => {
    setNbCoPylot(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const iduser = localStorage.getItem('id');
    axios
      .all([
        axios.put(
          `${process.env.REACT_APP_BACKEND_URL}users/${iduser}/preferences/co-pylot`,
          {
            preferenceNbPylot:
              nbCoPylot === ''
                ? user.preferenceNbPylot
                : parseInt(nbCoPylot, 10),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
            },
          }
        ),
        axios.put(
          `${process.env.REACT_APP_BACKEND_URL}users/${iduser}/preferences/distance`,
          {
            preferenceDistance:
              distance === ''
                ? user.preferenceDistance
                : parseInt(distance, 10),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
            },
          }
        ),
      ])
      .then((res) => {
        setMessage(res[0].data.message);
      })
      .catch((err) => setMessage(err.response.data.message[0].msg));
  };

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.prefRoadTrip}>
        <h2>Preferences</h2>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Nombre de co-Pylot(s) maximum?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={nbCoPylot}
            onChange={handleChangeNbCoPylot}
            className={classes.input}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Distance que tu es prêt à parcourir?
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={distance}
            onChange={handleChangeDistance}
            className={classes.input}
          >
            <MenuItem value={500}>500m</MenuItem>
            <MenuItem value={1000}>1km</MenuItem>
            <MenuItem value={1500}>1,5km</MenuItem>
          </Select>
          <Button text="Enregistrer" color="primary" onClick={submit} />
        </FormControl>

        {message && <p style={{ textAlign: 'center' }}>{message}</p>}
      </div>
    </div>
  );
}

export default ProfilPreferences;
