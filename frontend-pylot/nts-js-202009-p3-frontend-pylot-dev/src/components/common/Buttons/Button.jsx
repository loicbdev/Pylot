import React from 'react';
import { Button } from '@material-ui/core';
import commonComponentPropTypes from '../../../propTypes/CommonComponents';
import buttonStyle from './ButtonStyle';

export default function CustomButton({ text, color, size, onClick }) {
  const classes = buttonStyle();
  return (
    <Button
      color="primary"
      className={`${classes.root} ${classes[color]} ${classes[size]}`}
      variant="contained"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

CustomButton.propTypes = commonComponentPropTypes;
