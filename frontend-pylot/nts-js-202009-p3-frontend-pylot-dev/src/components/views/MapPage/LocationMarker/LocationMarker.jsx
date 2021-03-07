import React from 'react';
import 'leaflet/dist/leaflet.css';
import { makeStyles } from '@material-ui/styles';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MapPagePropType from '../../../../propTypes/HeaderMapPropType';
import meetUp from '../../../../images/markerNormal.png';

const meetUpRoad = new L.Icon({
  iconUrl: meetUp,
  iconSize: [40, 40],
  iconAnchor: [20, +40],
  popupAnchor: [20, +40],
});

const style = makeStyles();

function LocationMarker(props) {
  const { position } = props;

  const classes = style();
  return position === null ? null : (
    <Marker position={position} icon={meetUpRoad}>
      <Popup classeName={classes.popup}>You are here</Popup>
    </Marker>
  );
}

LocationMarker.propTypes = MapPagePropType;

export default LocationMarker;
