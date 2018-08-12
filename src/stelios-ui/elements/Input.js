import styled from 'styled-components';

import palette from '../palette';
import textStyle from '../text-styles';

const Input = styled.input`
  font-size: ${textStyle.smallText};
  font-weight: ${textStyle.lightWeight};
  background: ${palette.secondaryLight};
  color: ${palette.secondary};
  border-radius: 4px;
  cursor: pointer;
  line-height: 40px;
  padding: 0 30px;
  transition: all 300ms ease;
  box-sizing: border-box;
`;

export default Input;
