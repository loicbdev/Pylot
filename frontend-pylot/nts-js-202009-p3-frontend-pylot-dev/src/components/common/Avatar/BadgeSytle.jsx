import styled from 'styled-components';
import logoBadge from '../../../images/logos/logoBadge.svg';

const Badge = styled.div`
  background: url(${logoBadge}) no-repeat center/cover;
  width: ${({ sizebadge }) => (sizebadge === 'small' ? '17.5px' : '30.5px')};
  height: ${({ sizebadge }) => (sizebadge === 'small' ? '20px' : '34.86px')};
  position: absolute;
  top: ${({ sizebadge }) => (sizebadge === 'small' ? '63px' : '125px')};
  right: ${({ sizebadge }) => (sizebadge === 'small' ? '4px' : '-45px')};
  display: ${({ verify }) => (verify === 1 ? 'block' : 'none')};
`;

export default Badge;
