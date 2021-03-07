import React from 'react';
import commonComponentPropTypes from '../../../propTypes/CommonComponents';
import './TitleStyle.css';

export default function Title({ text, color, font }) {
  return (
    <div>
      <h1 className={`${color} ${font}`}>{text}</h1>
    </div>
  );
}

Title.propTypes = commonComponentPropTypes;
