import React from 'react';

import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import StarsBarPropType from '../../../propTypes/StarsBarPropType';
import styleStarsBar from './styleStarsBar';

const style = makeStyles(styleStarsBar);

function StarsBar(props) {
  const { name, value, onChange, format } = props;
  const classes = style();
  return (
    <Rating
      className={classes.Rating}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={format === 'readOnly'}
      disabled={format === 'disabled'}
    />
  );
}

StarsBar.propTypes = StarsBarPropType;

export default StarsBar;
