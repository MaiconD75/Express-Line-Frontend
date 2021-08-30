import React, { useEffect, useState, useCallback } from 'react';

import { MenuItem } from '@material-ui/core';
import FormatAddres from '../../utils/FormatAddres';

import { DeliverymanData } from '../../hooks/DeliverymenContextx';
import { RecipientData } from '../../hooks/RecipientsContextx';
import { OriginData } from '../../hooks/OriginsContextx';

import ActionButton from '../../components/ActionButton';
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
  StatusSelect,
} from './styles';
import api from '../../services/api';

export interface DeliveryData {
  id: string;
  product: string;
  signature: string;
  start_date: string;
  end_date: string;
  canceled_at: string;
  deliveryman: DeliverymanData;
  recipient: RecipientData;
  origin: OriginData;
}

const Deliveries: React.FC = () => {
  const [deliveries, setDeliveries] = useState<DeliveryData[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('none');

  useEffect(() => {
    api.get('/deliveries').then(response => setDeliveries(response.data));
  }, []);
  return (
    <Container>
      <SideBar selectedTab="delivery" />
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
                <StatusSelect
                  value={selectedStatus}
                  onChange={e => setSelectedStatus(e.target.value as string)}
                >
                  <MenuItem value="none">Status</MenuItem>
                  <MenuItem value="delivered">Entregue</MenuItem>
                  <MenuItem value="forwarded">Encaminhado</MenuItem>
                  <MenuItem value="pending">Pendente</MenuItem>
                  <MenuItem value="canceled">Cancelado</MenuItem>
                </StatusSelect>
              </th>
            </TableHead>
            {deliveries.map(delivery => {
              return (
                <TableItem key={delivery.id}>
                  <td>{delivery.product}</td>
                  <td>{delivery.deliveryman.name}</td>
                  <td>{delivery.recipient.name}</td>
                  <td>
                    <p>{FormatAddres(delivery.origin)}</p>
                  </td>

                  <StatusContainer>
                    <StatusTag delivery={delivery} />

                    <ActionButton
                      color="#ffc600"
                      disabled={!!delivery.start_date}
                    >
                      <img src={editImg} alt="Editar" />
                    </ActionButton>
                    <ActionButton
                      color="#bd1111"
                      disabled={!!delivery.start_date}
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
