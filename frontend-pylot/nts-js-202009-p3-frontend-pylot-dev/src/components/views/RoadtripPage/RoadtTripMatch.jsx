import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../common/Header/Header';
import Button from '../../common/Buttons/Button';

import useStyles from './styleRoadTripMatch';

function RoadTripMatch() {
  const classes = useStyles();
  const history = useHistory();

  const PublishRoadTrip = (e) => {
    e.preventDefault();
    history.push('/trajet-co-pylot');
  };

  return (
    <div>
      <Header />
      <div className={classes.center}>
        <h3>Aucun trajet disponible</h3>
        <Button
          text="Publier mon trajet"
          size="large"
          color="primary"
          onClick={PublishRoadTrip}
        />
      </div>
    </div>
  );
}

export default RoadTripMatch;
