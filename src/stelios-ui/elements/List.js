import styled from 'styled-components';

import palette from '../palette';
import textStyle from '../text-styles';

const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;

List.Item = styled.li`
  font-size: ${textStyle.smallText};
  line-height: 40px;
  font-weight: ${textStyle.boldWeight};
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin-bottom: 10px;
  background: ${palette.secondaryLight};
  color: ${palette.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease;
  box-sizing: border-box;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

List.ItemAside = styled.div`
  float: right;
  display: inline-block;
  text-align: right;
`;

List.ItemInput = styled.input`
  @media (max-width: 768px) {
    width: 100%;
  }
  line-height: 40px;
  font-size: ${textStyle.smallText};
  background: ${palette.secondaryLight};
  padding: 0;
  color: ${palette.secondary};
  flex-grow: 1;
  border: none;
  border-bottom: 1px solid ${palette.secondary};
`;

List.ItemText = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid transparent;
`;

export default List;
