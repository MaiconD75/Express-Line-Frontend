import React from 'react';

import { Container } from './styles';

const TableItem: React.FC = ({ children }) => {
  return (
    <Container>
      <tr>{children}</tr>
    </Container>
  );
};

export default TableItem;
