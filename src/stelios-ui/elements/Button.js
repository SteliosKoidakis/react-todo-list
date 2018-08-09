import styled from 'styled-components';

const Button = styled.button`
  background: red;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  padding: 0 20px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: #8b0000;
  }
`;
export default Button;
