import { React } from 'react';
import Avatar from '../Avatar/RoadtripCardAvatar';

import { Card, CoPylots, Time } from './roadtrip.style';

import RoadtripCardPropType from '../../../propTypes/RoadtripCardPropType';
import formatTime from '../../../utils/register_form/formatTime';
import formatDate from '../../../utils/formatDate';

export default function CardUser({ roadtrip, user }) {
  const departureTime = formatTime(roadtrip.startTime);
  const date = formatDate(roadtrip.startDate);

  return (
    <Card>
      <Time>{`${date}, ${departureTime}`}</Time>

      <CoPylots>
        <Avatar sizeavatar="small" sizebadge="small" user={user} />
      </CoPylots>
    </Card>
  );
}

CardUser.propTypes = RoadtripCardPropType;
