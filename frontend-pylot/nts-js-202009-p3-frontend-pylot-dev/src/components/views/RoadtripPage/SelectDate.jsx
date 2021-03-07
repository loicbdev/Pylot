import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../common/Header/Header';
import Button from '../../common/Buttons/Button';
import { RoadTripContext } from '../../../contexts/RoadTripContextProvider';
import useStyles from './selectDate.style';

function SelectDate() {
  const { roadTrip, setRoadTrip } = useContext(RoadTripContext);

  const [date, setDate] = useState();
  const history = useHistory();
  const classes = useStyles();

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;

  let tomorrow = new Date();
  const tdd = String(tomorrow.getDate() + 1).padStart(2, '0');
  tomorrow = `${yyyy}-${mm}-${tdd}`;

  const submit = () => {
    setRoadTrip({
      ...roadTrip,
      startDate: date,
    });
    history.push('/trajet-time');
  };

  return (
    <>
      <Header />
      <main className={classes.container}>
        <h1>Quand pars-tu?</h1>
        <div className={classes.buttons}>
          <Button
            text="aujourd'hui"
            size="small"
            color={date === today ? 'success' : 'primary'}
            onClick={() => setDate(today)}
          />
          <Button
            text="demain"
            size="small"
            color={date === tomorrow ? 'success' : 'primary'}
            onClick={() => setDate(tomorrow)}
          />
        </div>
        <div className={classes.validate}>
          {date && (
            <Button
              size="big"
              color="primary"
              text="valider"
              onClick={submit}
            />
          )}
        </div>
      </main>
    </>
  );
}
export default SelectDate;
