import React from 'react';

import Avatar from '@material-ui/core/Avatar';

import useStyle from './RoadtripAvatar.style';
import Badge from './BadgeSytle';

import commonComponentPropTypes from '../../../propTypes/CommonComponents';

export default function ImageAvatars({ sizebadge, sizeavatar, user }) {
  const classes = useStyle();

  const verify = user.profilVerified;

  return (
    <div className={classes.root}>
      <Avatar
        verify={verify}
        alt={user.firstName}
        src={`${process.env.REACT_APP_BACKEND_STATIC_URL}${user.profilPicture}`}
        className={`${classes[sizeavatar]} ${
          verify ? classes.verify : classes.default
        }`}
      />
      <Badge verify={verify} sizebadge={sizebadge} />
    </div>
  );
}

ImageAvatars.propTypes = commonComponentPropTypes;
