import React from 'react';

import { Container } from './styles';

const TableHead: React.FC = ({ children }) => {
  return (
    <Container>
      <tr>{children}</tr>
    </Container>
  );
};

export default TableHead;
