import { React, useState } from 'react';
import { Card, BlockInfoUser } from './StyleCardUser';
import StyledCheckbox from './Checkbox';
import Avatar from '../Avatar/ImageAvatars';
import StarBar from '../StarsBar/StarsBar';

export default function CardUser() {
  const [selected, setSelected] = useState(false);

  return (
    <Card onClick={() => setSelected(!selected)} selected={selected}>
      <Avatar sizeavatar="small" sizebadge="small" />
      <BlockInfoUser>
        <div>Name User</div>
        <div>Activity User</div>
        <StarBar format="ReadOnly" value="3.4" />
      </BlockInfoUser>
      <StyledCheckbox selected={selected} />
    </Card>
  );
}
