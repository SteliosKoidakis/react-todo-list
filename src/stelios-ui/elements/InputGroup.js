import styled from 'styled-components';

import Input from './Input';
import Button from './Button';
import textStyle from '../text-styles';

const InputGroup = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

InputGroup.Input = styled(Input)`
  flex-grow: 1;
  width: inherit;
`;

InputGroup.Button = styled(Button)`
  font-size: ${textStyle.smallerText};
`;

export default InputGroup;
