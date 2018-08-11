import styled from 'styled-components';

import palette from '../palette';

const Button = styled.button`
  background: ${({ remove }) => (remove ? palette.danger : palette.secondary)};
  border: none;
  border-radius: 4px;
  color: ${({ remove }) => remove ? palette.dangerLight : palette.secondaryLight};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: ${({ remove }) => (remove ? '20px' : '40px')};
  font-weight: 200;
  padding: ${({ remove }) => (remove ? '0 10px' : '0 20px')};
  border-radius: ${({ remove }) => (remove ? '15px' : '')};
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    color: ${({ remove }) => (remove ? palette.danger : palette.secondary)};
    background: ${({ remove }) => remove ? palette.dangerLight : palette.secondaryLight};
  }
  &:disabled {
    color: ${palette.mainLight};
    background: ${palette.secondaryLight};
  }
`;
export default Button;
