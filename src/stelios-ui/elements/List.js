import styled from 'styled-components';

import palette from '../palette';

const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;

List.Item = styled.li`
  background: ${palette.secondaryLight};
  color: ${palette.secondary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  line-height: 40px;
  font-weight: 900;
  padding: 0 30px;
  transition: all 300ms ease;
  box-sizing: border-box;
  margin-bottom: 10px;
  display: flex;
`;

List.ItemAside = styled.div`
  float: right;
  display: inline-block;
`;

List.ItemInput = styled.input`
  font-size: 16px;
  background: ${palette.secondaryLight};
  color: ${palette.secondary};
  border-top: none;
  border-right: none;
  border-left: none;
  width: 50%;
  flex-grow: 1;
`;

List.ItemText = styled.div`
  flex-grow: 1;
`;

export default List;
