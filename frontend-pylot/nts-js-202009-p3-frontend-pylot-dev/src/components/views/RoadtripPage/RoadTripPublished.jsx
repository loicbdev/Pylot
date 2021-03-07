import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../common/Header/Header';

import useStyles from './styleRoadTripMatch';

function RoadTripPublished() {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/map');
    }, 3000);
  }, []);

  return (
    <>
      <Header />
      <div className={classes.center}>
        <h3>Ton trajet a été enregistré avec succès</h3>
        <h3> Tu seras notifié si des co-pylots veulent te rejoindre. ⏰</h3>
        <h3>En attendant, prend soin de toi. 😘</h3>
      </div>
    </>
  );
}

export default RoadTripPublished;
