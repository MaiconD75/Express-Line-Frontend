import React from 'react';

import Form from '../Form';
import Input from '../Input';

import searchImg from '../../assets/png/search.png';

import { Container, SearchButton } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Form onSubmit={() => alert('pesquisando')}>
        <Input name="searchContent" placeholder="Buscar entrega..." />
        <SearchButton type="submit">
          <img src={searchImg} alt="Buscar" />
        </SearchButton>
      </Form>
    </Container>
  );
};

export default SearchBar;
