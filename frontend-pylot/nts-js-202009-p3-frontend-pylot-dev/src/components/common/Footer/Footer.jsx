import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import useStyles from './styleFooter';
import LogoMessage from '../../../images/logos/LogoMessage';
import LogoTrajets from '../../../images/logos/LogoTrajets';
import LogoRenter from '../../../images/logos/LogoRentrer';
import LogoProfil from '../../../images/logos/LogoProfil';

function Footer() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      <Link to="/message">
        <section className={classes.section}>
          <LogoMessage />
          <p>Message</p>
        </section>
      </Link>
      <Link to="/trajets">
        <section className={classes.section}>
          <LogoTrajets />

          <p>Trajets</p>
        </section>
      </Link>
      <Link to="/map">
        <section className={classes.section}>
          <LogoRenter />
          <p>Rentrer</p>
        </section>
      </Link>
      <Link to="/profil">
        <section className={classes.section}>
          <LogoProfil />
          <p>Profil</p>
        </section>
      </Link>
    </Toolbar>
  );
}

export default Footer;
