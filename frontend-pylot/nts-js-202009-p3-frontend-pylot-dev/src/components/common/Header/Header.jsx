import React from 'react';
import { useHistory } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import headerPropTypes from '../../../propTypes/HeaderPropType';
import styleHeader from './styleHeader';

function Header(props) {
  const { content } = props;
  const history = useHistory();

  const classes = styleHeader(props);
  return (
    <Toolbar className={classes.toolbar}>
      <Typography className={classes.head} variant="h6">
        <ArrowBackRoundedIcon
          className={classes.arrow}
          onClick={() => history.goBack()}
        />
        <div>{content}</div>
      </Typography>
    </Toolbar>
  );
}

Header.propTypes = headerPropTypes;

export default Header;
