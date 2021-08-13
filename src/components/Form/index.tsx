/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from 'react';

import { Container, Unform } from './styles';

interface FormProps {
  children?: ReactNode;
  submitFunction(data: Object): Promise<void>;
}

const Form: React.FC<FormProps> = ({ children, submitFunction }) => {
  function handleSubmit(data: Object): void {
    submitFunction(data);
  }

  return (
    <Container>
      <Unform onSubmit={handleSubmit}>{children}</Unform>
    </Container>
  );
};

export default Form;
