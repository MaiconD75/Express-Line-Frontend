import React from 'react';
import { FormProps } from '@unform/core';

import { Container, Unform } from './styles';

const Form: React.FC<FormProps> = ({ children, onSubmit, initialData, id }) => {
  return (
    <Container>
      <Unform id={id} initialData={initialData} onSubmit={onSubmit}>
        {children}
      </Unform>
    </Container>
  );
};

export default Form;
