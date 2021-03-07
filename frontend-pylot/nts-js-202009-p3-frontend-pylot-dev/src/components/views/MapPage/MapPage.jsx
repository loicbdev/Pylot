/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { makeStyles } from '@material-ui/styles';
import { TileLayer, Map } from 'react-leaflet';
import styleMapPage from './styleMapPage';
import HeaderRoad from './HeaderRoad/HeaderRoad';
import Footer from '../../common/Footer/Footer';

import LocationMarker from './LocationMarker/LocationMarker';
import Routing from './Routing';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [20, +40],
});

L.Marker.prototype.options.icon = DefaultIcon;

const favorite = [
  {
    label: 'Ma position',
  },
];

const style = makeStyles(styleMapPage);
let map = null;

function MapPage() {
  const [startAddressed, setStartAdressed] = React.useState(null);
  const [startLocation, setStartLocation] = React.useState('');
  const [endAddressed, setEndAdressed] = React.useState(null);
  const [endLocation, setEndLocation] = React.useState('');
  const [position, setPosition] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [validation, setValidation] = useState(false);
  const [favoriteAddress] = React.useState(favorite);
  const [myPositionAddress, setMyPositionAddress] = React.useState(null);

  const classes = style();

  function maPosition(pos) {
    const long = pos.coords.longitude;
    const lat = pos.coords.latitude;
    setPosition([lat, long]);
  }

  function noPosition(err) {
    setError(err.message);
  }

  function updateMap(mapUpdated) {
    map = mapUpdated;
  }

  function getPosition() {
    navigator.geolocation.watchPosition(maPosition, noPosition, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 600000,
    });
  }
  function getMyPositionAdress(latitude, longitude) {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`
      )
      .then((res) => setMyPositionAddress(res.data.features[0]));
  }

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if (startLocation === 'Ma position') {
      getMyPositionAdress(position[0], position[1]);
    }
  }, [startLocation]);
  return (
    <>
      <div className={classes.MapPage}>
        <HeaderRoad
          setMyPositionAddress={setMyPositionAddress}
          myPositionAddress={myPositionAddress}
          position={position}
          setPosition={setPosition}
          validation={validation}
          setValidation={setValidation}
          startAddressed={startAddressed}
          setStartAdressed={setStartAdressed}
          startLocation={startLocation}
          setStartLocation={setStartLocation}
          endAddressed={endAddressed}
          setEndAdressed={setEndAdressed}
          endLocation={endLocation}
          setEndLocation={setEndLocation}
          favoriteAddress={favoriteAddress}
        />
        {!error ? null : <div>{error}</div>}

        {!position ? (
          <div className={classes.loading}>loading</div>
        ) : (
          <Map
            ref={updateMap}
            className={classes.MapContainer}
            center={
              validation && startLocation !== 'Ma position'
                ? [
                    startAddressed[0].geometry.coordinates[1],
                    startAddressed[0].geometry.coordinates[0],
                  ]
                : [position[0], position[1]]
            }
            zoom={14}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.openstreetmap.fr/openriverboatmap/{z}/{x}/{y}.png"
            />
            {!validation && <LocationMarker position={position} />}
            {validation && (
              <Routing
                startAddressed={startAddressed}
                endAddressed={endAddressed}
                map={map}
                position={position}
                startLocation={startLocation}
              />
            )}
          </Map>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MapPage;
