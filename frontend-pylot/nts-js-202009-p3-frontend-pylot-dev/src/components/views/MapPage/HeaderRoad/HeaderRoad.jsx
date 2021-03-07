import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import styleHeaderRoad from './styleHeaderRoad';
import ButtonStyle from '../../../common/Buttons/Button';
import HeaderMapPropType from '../../../../propTypes/HeaderMapPropType';
import { RoadTripContext } from '../../../../contexts/RoadTripContextProvider';
import { UserContext } from '../../../../contexts/UserContextProvider';

const style = makeStyles(styleHeaderRoad);

const APIAdress = 'https://api-adresse.data.gouv.fr/search/';

function HeaderRoad(props) {
  const {
    myPositionAddress,
    startAddressed,
    setStartAdressed,
    startLocation,
    setStartLocation,
    endAddressed,
    setEndAdressed,
    endLocation,
    setEndLocation,
    validation,
    setValidation,
    favoriteAddress,
  } = props;
  const { roadTrip, setRoadTrip } = useContext(RoadTripContext);
  const { user } = useContext(UserContext);
  const classes = style();
  const history = useHistory();

  const handleClickValidateRouting = (e) => {
    e.preventDefault();
    if (
      startAddressed !== null &&
      startAddressed.length > 0 &&
      endAddressed !== null &&
      endAddressed.length > 0
    ) {
      setValidation(!validation);
    }
  };

  const handleClickReturn = (e) => {
    e.preventDefault();
    setStartAdressed(null);
    setEndAdressed(null);
    setStartLocation('');
    setEndLocation('');
    setValidation(!validation);
  };

  const handleValidationRoadtrip = (e) => {
    e.preventDefault();

    if (startLocation === 'Ma position') {
      setRoadTrip({
        ...roadTrip,
        startStreetNumber: myPositionAddress.properties.housenumber,
        startStreetType: myPositionAddress.properties.name.split(' ')[1],
        startStreetExt: '',
        startStreetName: myPositionAddress.properties.street,
        startPostalCode: myPositionAddress.properties.postcode,
        startCity: myPositionAddress.properties.city,
        startLat: myPositionAddress.geometry.coordinates[1],
        startLong: myPositionAddress.geometry.coordinates[0],

        endStreetNumber: endAddressed[0].properties.housenumber,
        endStreetType: endAddressed[0].properties.name.split(' ')[1],
        endStreetExt: '',
        endStreetName: endAddressed[0].properties.street,
        endPostalCode: endAddressed[0].properties.postcode,
        endCity: endAddressed[0].properties.city,
        endLat: endAddressed[0].geometry.coordinates[1],
        endLong: endAddressed[0].geometry.coordinates[0],
        status: true,
        userId: user.id,
      });
    } else {
      setRoadTrip({
        ...roadTrip,
        startStreetNumber: startAddressed[0].properties.housenumber,
        startStreetType: startAddressed[0].properties.name.split(' ')[1],
        startStreetExt: '',
        startStreetName: startAddressed[0].properties.street,
        startPostalCode: startAddressed[0].properties.postcode,
        startCity: startAddressed[0].properties.city,
        startLat: startAddressed[0].geometry.coordinates[1],
        startLong: startAddressed[0].geometry.coordinates[0],

        endStreetNumber: endAddressed[0].properties.housenumber,
        endStreetType: endAddressed[0].properties.name.split(' ')[1],
        endStreetExt: '',
        endStreetName: endAddressed[0].properties.street,
        endPostalCode: endAddressed[0].properties.postcode,
        endCity: endAddressed[0].properties.city,
        endLat: endAddressed[0].geometry.coordinates[1],
        endLong: endAddressed[0].geometry.coordinates[0],
        status: true,
        userId: user.id,
      });
    }

    history.push('/trajet-date');
  };

  useEffect(() => {
    axios
      .get(
        `${APIAdress}?q=${startLocation}&type=housenumber&autocomplete=1&limit=5`,
        {
          header: {
            'Access-Control-Allow-Origin': 'https://api-adresse.data.gouv.fr',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setStartAdressed(res.data.features);
      });
  }, [startLocation]);

  useEffect(() => {
    axios
      .get(
        `${APIAdress}?q=${endLocation}&type=housenumber&autocomplete=1&limit=5`,
        {
          header: {
            'Access-Control-Allow-Origin': 'https://api-adresse.data.gouv.fr',
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setEndAdressed(res.data.features);
      });
  }, [endLocation]);

  return (
    <div className={classes.Header}>
      <div className={classes.HeaderIn}>
        <form
          className={!validation ? classes.address : classes.adresseValidation}
        >
          <Autocomplete
            inputValue={startLocation}
            onInputChange={(event, newInputValue) => {
              setStartLocation(newInputValue);
            }}
            id="controllable-states-demo"
            forcePopupIcon={false}
            options={
              !startAddressed
                ? favoriteAddress.map((el) => el.label)
                : startAddressed.map((adresse) => adresse.properties.label)
            }
            style={{ width: 200 }}
            loadingText
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="D'où pars-tu?"
                className={classes.textfield}
              />
            )}
          />
          <Autocomplete
            inputValue={endLocation}
            onInputChange={(event, newInputValue) => {
              setEndLocation(newInputValue);
            }}
            id="controllable-states-demo"
            forcePopupIcon={false}
            options={
              !endAddressed
                ? favoriteAddress.map((el) => el.label)
                : endAddressed.map((adresse) => adresse.properties.label)
            }
            style={{ width: 200 }}
            loadingText
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Où rentres-tu?"
                className={classes.textfield}
              />
            )}
          />

          {startAddressed && endAddressed && (
            <ButtonStyle
              color="success"
              size="medium"
              onClick={handleClickValidateRouting}
              text="C'est parti !"
            />
          )}
        </form>
        <form
          className={!validation ? classes.validatorOut : classes.Validator}
        >
          <ButtonStyle
            text="Valider ce trajet"
            onClick={handleValidationRoadtrip}
            color="success"
            size="medium"
          />
          <ButtonStyle
            onClick={handleClickReturn}
            text="Retour"
            color="danger"
            size="medium"
          />
        </form>
      </div>
    </div>
  );
}

HeaderRoad.propTypes = HeaderMapPropType;

export default HeaderRoad;
