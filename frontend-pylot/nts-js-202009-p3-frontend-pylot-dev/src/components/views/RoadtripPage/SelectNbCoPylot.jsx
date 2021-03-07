import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Header from '../../common/Header/Header';

import useStyles from './selectNbCopylot.style';
import { RoadTripContext } from '../../../contexts/RoadTripContextProvider';

function SelectDate() {
  const [nbCoPylot, setNbCoPylot] = useState(2);
  const history = useHistory();
  const classes = useStyles();
  const { roadTrip, setRoadTrip } = useContext(RoadTripContext);
  const decrement = () => {
    if (nbCoPylot > 2) {
      setNbCoPylot(nbCoPylot - 1);
    }
  };

  const increment = () => {
    if (nbCoPylot < 5) {
      setNbCoPylot(nbCoPylot + 1);
    }
  };

  const handleCoPylot = (e) => {
    e.preventDefault();
    setRoadTrip({
      ...roadTrip,
      coPylotMax: nbCoPylot,
    });
    history.push('/trajet-comment');
  };

  return (
    <>
      <Header />
      <main className={classes.container}>
        <h1 className={classes.title}>
          Avec combien de personnes minimum veux-tu rentrer?
        </h1>
        <div className={classes.wrapper}>
          <button type="button" className={classes.button} onClick={decrement}>
            <RemoveIcon />
          </button>
          <h1 className={classes.number}>{nbCoPylot}</h1>
          <button type="button" className={classes.button} onClick={increment}>
            <AddIcon />
          </button>
        </div>
        <Tooltip title="Add" aria-label="add">
          <Fab onClick={handleCoPylot} className={classes.next}>
            <ArrowForwardIcon className={classes.arrow} />
          </Fab>
        </Tooltip>
      </main>
    </>
  );
}
export default SelectDate;
