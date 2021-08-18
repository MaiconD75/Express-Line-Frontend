import React, { useEffect } from 'react';

import { useDeliveries } from '../../hooks/DeliveriesContextx';
import { FormatAddres } from '../../services/FormatAddres';

import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';
import StatusTag from '../../components/StatusTag';
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
  StatusContainer,
  ActionButton,
} from './styles';

const Deliveries: React.FC = () => {
  const { getAllDeliveires, deliveries } = useDeliveries();

  useEffect(() => {
    getAllDeliveires();
  }, [getAllDeliveires]);

  return (
    <Container>
      <SideBar />
      <PageContainer>
        <HeadContainer>
          <Button style={{ width: '16vw' }}>Adicionar entrega</Button>
          <SearchBar />
        </HeadContainer>

        <MainContainer>
          <Table>
            <TableHead>
              <th>Produto</th>
              <th>Entregador</th>
              <th>Destinatário</th>
              <th>Endereço de estoque</th>
              <th>
                <canvas />
                <select name="status" id="status">
                  <option value="none">Status</option>
                  <option value="delivered">Entregue</option>
                  <option value="forwarded">Encaminhado</option>
                  <option value="pending">Pendente</option>
                  <option value="canceled">Cancelado</option>
                </select>
              </th>
            </TableHead>
            {deliveries.map(deliverie => {
              return (
                <TableItem>
                  <td>{deliverie.product}</td>
                  <td>{deliverie.deliveryman.name}</td>
                  <td>{deliverie.recipient.name}</td>
                  <td>
                    <p>{FormatAddres(deliverie.origin)}</p>
                  </td>

                  <StatusContainer>
                    <StatusTag deliverie={deliverie} />

                    <ActionButton
                      color="#ffc600"
                      disabled={!!deliverie.start_date}
                    >
                      <img src={editImg} alt="Editar" />
                    </ActionButton>
                    <ActionButton
                      color="#bd1111"
                      disabled={!!deliverie.start_date}
                    >
                      <img src={trashImg} alt="Excluir" />
                    </ActionButton>
                  </StatusContainer>
                </TableItem>
              );
            })}
          </Table>
        </MainContainer>
      </PageContainer>
    </Container>
  );
};

export default Deliveries;
