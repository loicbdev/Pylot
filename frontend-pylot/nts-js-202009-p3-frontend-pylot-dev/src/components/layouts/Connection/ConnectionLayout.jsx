import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/Header/Header';
import childrenPropType from '../../../propTypes/ChildrenPropType';

const useStyles = makeStyles({
  FormPosition: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
  },
});

function ConnectionLayout(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div>
      <Header content="Connexion" salmon />
      <div className={classes.FormPosition}>{children}</div>
    </div>
  );
}

ConnectionLayout.propTypes = childrenPropType;

export default ConnectionLayout;
