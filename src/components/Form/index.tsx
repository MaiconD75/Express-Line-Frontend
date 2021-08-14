import React from 'react';
import { FormProps } from '@unform/core';

import { Container, Unform } from './styles';

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <Container>
      <Unform onSubmit={onSubmit}>{children}</Unform>
    </Container>
  );
};

export default Form;
