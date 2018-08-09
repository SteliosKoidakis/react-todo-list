import styled from 'styled-components';

const Column = styled.div`
  flex: ${({ desktop }) => desktop / 12};
  padding: 0 20px;
`;
export default Column;
