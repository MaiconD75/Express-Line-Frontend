import React from 'react';

import { Container } from './styles';

const TableItem: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default TableItem;
