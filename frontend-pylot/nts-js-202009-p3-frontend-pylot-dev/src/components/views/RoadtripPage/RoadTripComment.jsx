import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import Header from '../../common/Header/Header';
import Button from '../../common/Buttons/Button';

import { RoadTripContext } from '../../../contexts/RoadTripContextProvider';
import { UserContext } from '../../../contexts/UserContextProvider';

import useStyles from './styleRoadTripMatch';

function RoadTripComment() {
  const classes = useStyles();
  const [comment] = useState();
  const [error, setError] = useState();
  const history = useHistory();
  const { roadTrip, setRoadTrip } = useContext(RoadTripContext);
  const { user } = useContext(UserContext);

  const PublishRoadTrip = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}users/${user.id}/roadtrips`,
        roadTrip,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
          },
        }
      );
      history.push('/trajet-published');
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <Header />
      <div className={classes.center}>
        <h3>Quelque chose à ajouter sur ton trajet ?</h3>
        <textarea
          className={classes.comment}
          value={comment}
          placeholder="Vous pouvez m’appeler si besoin :)"
          onChange={(e) =>
            setRoadTrip({
              ...roadTrip,
              creationComment: e.target.value,
            })
          }
          name=""
          id=""
          cols="30"
          rows="10"
        />

        <Button
          text="Publier mon trajet"
          size="large"
          color="primary"
          onClick={PublishRoadTrip}
        />
      </div>

      {error && <p style={{ textAlign: 'center' }}>{error}</p>}
    </div>
  );
}

export default RoadTripComment;
