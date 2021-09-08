import React, { useEffect, useState, useCallback } from 'react';

import { MenuItem } from '@material-ui/core';

import api from '../../services/api';
import FormatAddres from '../../utils/FormatAddres';
import { DeliverymanData } from '../Deliverymen';
import { RecipientData } from '../Recipients';
import { OriginData } from '../Origins';

import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
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
  OptionsSelectContainer,
  OptionsSelect,
  InfoContainer,
} from './styles';
import { useModal } from '../../hooks/ModalContext';

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

  const { toggleModalState } = useModal();

  useEffect(() => {
    api.get('/deliveries').then(response => setDeliveries(response.data));
  }, []);

  const handleOpenModal = useCallback(
    (buttonTag: string) => {
      toggleModalState(buttonTag);
    },
    [toggleModalState],
  );

  return (
    <Container>
      <Modal>
        <h1>Adicionando Entrega...</h1>

        <Form id="hook-form" onSubmit={() => alert('ola')}>
          <Input name="product" placeholder="Produto" />
          <div>
            <Input hidden name="deliveryman_id" />
            <OptionsSelectContainer>
              <OptionsSelect value="Item">
                <MenuItem value="Item">Item</MenuItem>
              </OptionsSelect>
              <InfoContainer>
                <div>
                  <span>Email:</span>
                  <span>VPeixoto@gmail.com</span>
                </div>
                <div>
                  <span>Entregas Concluidas:</span>
                  <span>191</span>
                </div>
                <div>
                  <span>Entregas Canceladas:</span>
                  <span>12</span>
                </div>
              </InfoContainer>
            </OptionsSelectContainer>
            <Input hidden name="origin_id" />
            <OptionsSelectContainer>
              <OptionsSelect value="Item">
                <MenuItem value="Item">Item</MenuItem>
              </OptionsSelect>
              <InfoContainer>
                <div>
                  <span>Número:</span>
                  <span>753</span>
                </div>
                <div>
                  <span>Cidade:</span>
                  <span>Mossoró</span>
                </div>
                <div>
                  <span>Estado:</span>
                  <span>RN</span>
                </div>
                <div>
                  <span>Complemento:</span>
                  <span>Apt: 205</span>
                </div>
                <div>
                  <span>CEP:</span>
                  <span>12345-678</span>
                </div>
              </InfoContainer>
            </OptionsSelectContainer>
            <Input hidden name="recipient_id" />
            <OptionsSelectContainer>
              <OptionsSelect value="Item">
                <MenuItem value="Item">Item</MenuItem>
              </OptionsSelect>
              <InfoContainer>
                <div>
                  <span>Rua:</span>
                  <span>Rua Gerivaldo Golveia</span>
                </div>
                <div>
                  <span>Número::</span>
                  <span>753</span>
                </div>
                <div>
                  <span>Cidade:</span>
                  <span>Mossoró</span>
                </div>
                <div>
                  <span>Estado:</span>
                  <span>RN</span>
                </div>
                <div>
                  <span>Complemento:</span>
                  <span>Apt: 205</span>
                </div>
                <div>
                  <span>CEP:</span>
                  <span>12345-678</span>
                </div>
              </InfoContainer>
            </OptionsSelectContainer>
          </div>
        </Form>
      </Modal>
      <SideBar selectedTab="delivery" />
      <PageContainer>
        <HeadContainer>
          <Button
            style={{ width: '16vw' }}
            onClick={() => handleOpenModal('Adicionar')}
          >
            Adicionar entrega
          </Button>
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
