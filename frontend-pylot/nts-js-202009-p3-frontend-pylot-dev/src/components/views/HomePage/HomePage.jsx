import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import CustomButton from '../../common/Buttons/Button';
import styleHomePage from './styleHomePage';
import LogoPylot from '../../../images/logos/LogoPylot';

const style = makeStyles(styleHomePage);

function HomePage() {
  const classes = style();
  return (
    <div className={classes.HomePage}>
      <div className={classes.LogoPylot}>
        <LogoPylot />
      </div>
      <div className={classes.buttonWrap}>
        <Link to="/connexion">
          <CustomButton text="Connexion" color="primary" size="big" />
        </Link>
        <Link to="/inscription">
          <CustomButton text="S'inscrire" color="outlined" size="big" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
