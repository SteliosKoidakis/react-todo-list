import styled from 'styled-components';

const Column = styled.div`
  flex: ${({ mobile }) => mobile / 12};
  padding: 0 20px;
  @media (min-width: 768px) {
    flex: ${({ desktop }) => desktop / 12};
  }
`;

Column.defaultProps = {
  mobile: 12,
  desktop: 12
};

export default Column;
