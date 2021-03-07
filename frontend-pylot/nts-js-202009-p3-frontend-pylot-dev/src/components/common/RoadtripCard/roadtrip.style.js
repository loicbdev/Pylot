import styled from 'styled-components';
import theme from '../../../contexts/theme/MuiTheme';

const Card = styled.div`
  background-color: #ebebeb;
  border-radius: 11px;
  border: solid 3px
    ${({ selected }) => (selected ? `${theme.palette.blue.main}` : '#EBEBEB')};
  width: 320px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`;

const Time = styled.div`
  heigth: 10%;
  width: 100%;
  margin-left: 10px;
`;

const CoPylots = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export { Card, Time, CoPylots };
