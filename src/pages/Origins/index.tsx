import React from 'react';

import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import TableHead from '../../components/Table/TableHead';
import TableItem from '../../components/Table/TableItem';

import editImg from '../../assets/png/edit.png';
import trashImg from '../../assets/png/trash.png';

import {
  Container,
  PageContainer,
  HeadContainer,
  MainContainer,
} from './styles';

const Origins: React.FC = () => {
  return (
    <Container>
      <SideBar selectedTab="origin" />
      <PageContainer>
        <HeadContainer>
          <Button style={{ width: '16vw' }}>Registrar estoque</Button>
          <SearchBar />
        </HeadContainer>

        <MainContainer>
          <Table>
            <TableHead>
              <th>Rua</th>
              <th>Cidade</th>
              <th>
                <p>Estado</p>
              </th>
              <th>
                <p>Número</p>
              </th>
              <th>Complemento</th>
              <th>
                <p>CEP</p>
              </th>
              <th aria-label="buttons" />
            </TableHead>
            <TableItem>
              <td>Rua Brigadeiro Fulano</td>
              <td>Mossoró</td>
              <td>
                <p>RN</p>
              </td>
              <td>
                <p>753</p>
              </td>
              <td>Torre: 01</td>
              <td>
                <p>12345-678</p>
              </td>
              <td>
                <ActionButton color="#ffc600">
                  <img src={editImg} alt="Editar" />
                </ActionButton>
                <ActionButton color="#bd1111">
                  <img src={trashImg} alt="Excluir" />
                </ActionButton>
              </td>
            </TableItem>
          </Table>
        </MainContainer>
      </PageContainer>
    </Container>
  );
};

export default Origins;
