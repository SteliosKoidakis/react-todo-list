import styled from 'styled-components';

import palette from '../palette';

const Input = styled.input`
  background: ${palette.secondaryLight};
  color: ${palette.secondary};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  padding: 0 30px;
  transition: all 300ms ease;
  box-sizing: border-box;
`;

export default Input;
