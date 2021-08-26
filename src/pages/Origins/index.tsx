import React, { useEffect, useState } from 'react';

import { OriginData } from '../../hooks/OriginsContextx';

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
import api from '../../services/api';

const Origins: React.FC = () => {
  const [origins, setOrigins] = useState<OriginData[]>([]);

  useEffect(() => {
    api.get('/origins').then(response => setOrigins(response.data));
  }, []);

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
            {origins.map(origin => {
              return (
                <TableItem key={origin.id}>
                  <td>{origin.street}</td>
                  <td>{origin.city}</td>
                  <td>
                    <p>{origin.state}</p>
                  </td>
                  <td>
                    <p>{origin.number}</p>
                  </td>
                  <td>{origin.complement}</td>
                  <td>
                    <p>{origin.zip_code}</p>
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

export default Origins;
