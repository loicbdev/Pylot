import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import cloud from '../../../images/clouds/cloud.png';
import cloud2 from '../../../images/clouds/cloud2.png';
import { UserContext } from '../../../contexts/UserContextProvider';

import Footer from '../../common/Footer/Footer';
import RoadtripCard from '../../common/RoadtripCard/RoadtripCard';

import useStyle from './styleRoadTripPage';

function RoadTripPage() {
  const [roadtrips, setRoadtrips] = useState([]);
  const [error, setError] = useState();
  const { user } = useContext(UserContext);
  const classes = useStyle();

  const fetchRoadtrips = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}users/${user.id}/roadtrips`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
          },
        }
      );
      setRoadtrips(result.data.roadtrips);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  useEffect(() => {
    fetchRoadtrips();
  }, []);

  return (
    <>
      {roadtrips.length > 0 ? (
        <div className={classes.cardsContainer}>
          <h1 className={classes.title}>Trajets</h1>
          {roadtrips.map((roadtrip) => {
            return (
              <RoadtripCard key={roadtrip.id} roadtrip={roadtrip} user={user} />
            );
          })}
        </div>
      ) : (
        <div className={classes.cloudsContainer}>
          <img src={cloud} alt="nuage" className={classes.cloudBottom1} />
          <img src={cloud2} alt="nuage" className={classes.cloudBottom2} />
          <img src={cloud2} alt="nuage" className={classes.cloudBottom3} />

          <div className={classes.noRoadtrips}>
            <h2>
              Aucun trajet prévu
              <br />
              pour le moment
            </h2>
          </div>
        </div>
      )}

      {error && <p style={{ textAlign: 'center' }}>{error}</p>}
      <div className={classes.positionning} />
      <Footer />
    </>
  );
}

export default RoadTripPage;
