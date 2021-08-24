import React, { useEffect } from 'react';

import { useRecipients } from '../../hooks/RecipientContextx';

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

const Recipients: React.FC = () => {
  const { getAllRecipients, recipients } = useRecipients();

  useEffect(() => {
    getAllRecipients();
  }, [getAllRecipients]);

  return (
    <Container>
      <SideBar selectedTab="recipient" />
      <PageContainer>
        <HeadContainer>
          <Button style={{ width: '16vw' }}>Registrar estoque</Button>
          <SearchBar />
        </HeadContainer>

        <MainContainer>
          <Table>
            <TableHead>
              <th>Nome</th>
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
            {recipients.map(recipient => {
              return (
                <TableItem>
                  <td>{recipient.name}</td>
                  <td>{recipient.street}</td>
                  <td>{recipient.city}</td>
                  <td>
                    <p>{recipient.state}</p>
                  </td>
                  <td>
                    <p>{recipient.number}</p>
                  </td>
                  <td>{recipient.complement || 'Sem complemento'}</td>
                  <td>
                    <p>{recipient.zip_code}</p>
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
              );
            })}
          </Table>
        </MainContainer>
      </PageContainer>
    </Container>
  );
};

export default Recipients;
