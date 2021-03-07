import React from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import avatarStyle from './AvatarStyle';
import Badge from './BadgeSytle';
import commonComponentPropTypes from '../../../propTypes/CommonComponents';

import useStyles from './NoProfilPicYet.style';

export default function ImageAvatars({ sizebadge, sizeavatar, user }) {
  const history = useHistory();
  const classes = avatarStyle();
  const style = useStyles();

  const verify = user.profilVerified;

  return (
    <div className={classes.root}>
      <button
        type="button"
        className={style.input}
        onClick={() => history.push('/profil-photo')}
      >
        <Avatar
          verify={verify}
          alt={user.firstName}
          src={`${process.env.REACT_APP_BACKEND_STATIC_URL}${user.profilPicture}`}
          className={`${classes[sizeavatar]} ${
            verify ? classes.verify : classes.default
          }`}
        />
      </button>
      <Badge verify={verify} sizebadge={sizebadge} />
    </div>
  );
}

ImageAvatars.propTypes = commonComponentPropTypes;
