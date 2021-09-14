import React, { InputHTMLAttributes } from 'react';

import Form from '../Form';
import Input from '../Input';

import { Container } from './styles';

const SearchBar: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
    <Container>
      <Form onSubmit={e => e}>
        <Input
          name="searchContent"
          placeholder="Buscar entrega..."
          {...props}
        />
      </Form>
    </Container>
  );
};

export default SearchBar;
