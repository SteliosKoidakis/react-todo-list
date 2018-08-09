import styled from 'styled-components';

const Input = styled.input`
  background: grey;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  padding: 0 30px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:focus {
    background: white;
  }
`;
export default Input;
