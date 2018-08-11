import styled from 'styled-components';

import Input from './Input';
import Button from './Button';

const InputGroup = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

InputGroup.Input = styled(Input)`
  flex-grow: 1;
`;

InputGroup.Button = styled(Button)`
  font-size: 15px;
`;

export default InputGroup;
