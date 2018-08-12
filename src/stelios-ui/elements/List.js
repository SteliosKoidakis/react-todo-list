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
  padding: 0 30px;
  margin-bottom: 10px;
  background: ${palette.secondaryLight};
  color: ${palette.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease;
  box-sizing: border-box;
`;

List.ItemAside = styled.div`
  float: right;
  display: inline-block;
  text-align: right;
`;

List.ItemInput = styled.input`
  font-size: ${textStyle.smallText};
  background: ${palette.secondaryLight};
  color: ${palette.secondary};
  flex-grow: 1;
  width: 50%;
  border-top: none;
  border-right: none;
  border-left: none;
`;

List.ItemText = styled.div`
  flex-grow: 1;
`;

export default List;
