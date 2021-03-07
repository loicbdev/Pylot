import styled from 'styled-components';
import theme from '../../../contexts/theme/MuiTheme';

const Card = styled.div`
  background-color: #ebebeb;
  border-radius: 11px;
  border: solid 3px
    ${({ selected }) => (selected ? `${theme.palette.blue.main}` : '#EBEBEB')};
  width: 320px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const BlockInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { Card, BlockInfoUser };
