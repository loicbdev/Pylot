import React, { useState, useContext } from 'react';
import frLocale from 'date-fns/locale/fr';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';
import { RoadTripContext } from '../../../contexts/RoadTripContextProvider';

import Header from '../../common/Header/Header';
import Button from '../../common/Buttons/Button';

import useStyles from './selectTime.style';

function SelectTime() {
  const { roadTrip, setRoadTrip } = useContext(RoadTripContext);
  const [startTime, setStartTime] = useState();
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (time) => {
    setStartTime(time);
  };

  const submit = (e) => {
    e.preventDefault();
    setRoadTrip({
      ...roadTrip,
      startTime,
    });
    history.push('/trajets-matchs');
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
        <Header />
        <form className={classes.form} noValidate>
          <div className={classes.title}>Quand rentres-tu ?</div>
          <KeyboardTimePicker
            autoOk
            ampm={false}
            disablePast
            inputVariant="outlined"
            cancelLabel="Annuler"
            okLabel="OK"
            value={startTime}
            className={classes.picker}
            onChange={handleChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

          {startTime && (
            <Button
              size="big"
              color="primary"
              text="valider"
              onClick={submit}
            />
          )}
        </form>
      </MuiPickersUtilsProvider>
    </>
  );
}
export default SelectTime;
