import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import palette from '../palette';
import textStyle from '../text-styles';

const Button = styled.button`
  font-size: ${({ remove }) => remove ? textStyle.smallerText : textStyle.smallText};
  font-weight: ${textStyle.lightWeight};
  line-height: ${({ remove, status }) => (remove || status ? '20px' : '40px')};
  display: inline-block;
  padding: ${({ remove, status }) => (remove || status ? '0 10px' : '0 20px')};
  margin-left: 10px;
  background: ${({ remove, status, complete }) => {
    switch (true) {
      case remove:
        return palette.danger;
      case complete:
        return palette.success;
      case status:
        return palette.alert;
      default:
        return palette.secondary;
    }
  }};
  border-radius: 4px;
  color: ${palette.white};
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    border: 2px solid ${palette.white};
  }
  &:disabled {
    color: ${palette.mainLight};
    background: ${palette.secondaryLight};
  }
`;

Button.propTypes = {
  remove: PropTypes.bool,
  status: PropTypes.bool
};

export default Button;
