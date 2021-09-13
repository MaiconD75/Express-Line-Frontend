import React, { useEffect, useState, useCallback, ChangeEvent } from 'react';

import api from '../../services/api';
import { createOrUpdateEntity } from '../../services/apiMethods';
import { DeliverymanData } from '../Deliverymen';
import FormatAddres from '../../utils/FormatAddres';
import { OriginData } from '../Origins';
import { RecipientData } from '../Recipients';
import { useModal } from '../../hooks/ModalContext';

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
} from './styles';
import {
  ExtendedSelect,
  InfoContainer,
  OptionsSelectContainer,
} from '../../components/Select/ExtendedSelect';
import { Option } from '../../components/Select/styles';

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

interface EventData {
  name?: string | undefined;
  value: unknown;
}

const Deliveries: React.FC = () => {
  const { toggleModalState } = useModal();

  const [deliveries, setDeliveries] = useState<DeliveryData[]>([]);
  const [selectedStatus, setSelectedStatus] = useState('none');

  const [deliverymenList, setDeliverymenList] = useState<DeliverymanData[]>([]);
  const [originsList, setOriginsList] = useState<OriginData[]>([]);
  const [recipientsList, setRecipientsList] = useState<RecipientData[]>([]);

  const [selectedDeliveryman, setSelectedDeliveryman] =
    useState<DeliverymanData>({} as DeliverymanData);
  const [selectedOrigin, setSelectedOrigin] = useState<OriginData>(
    {} as OriginData,
  );
  const [selectedRecipient, setSelectedRecipient] = useState<RecipientData>(
    {} as RecipientData,
  );

  const [initialData, setInitialData] = useState<{
    id?: string;
    deliveryman_id?: string;
    origin_id?: string;
    recipient_id?: string;
  }>({});

  const handleChangeSelectedDeliveryman = useCallback(
    (e: ChangeEvent<EventData>) => {
      setSelectedDeliveryman(
        deliverymenList.find(deliveryman => {
          return deliveryman.id === (e.target.value as string);
        }) || ({} as DeliverymanData),
      );
    },
    [deliverymenList],
  );

  const handleChangeSelectedOrigin = useCallback(
    (e: ChangeEvent<EventData>) => {
      setSelectedOrigin(
        originsList.find(origin => {
          return origin.id === (e.target.value as string);
        }) || ({} as OriginData),
      );
    },
    [originsList],
  );

  const handleChangeSelectedRecipient = useCallback(
    (e: ChangeEvent<EventData>) => {
      setSelectedRecipient(
        recipientsList.find(recipient => {
          return recipient.id === (e.target.value as string);
        }) || ({} as RecipientData),
      );
    },
    [recipientsList],
  );

  useEffect(() => {
    api.get('/deliveries').then(response => setDeliveries(response.data));
  }, []);

  const handleOpenModal = useCallback(
    async (buttonTag: string, data?: DeliveryData) => {
      await api
        .get('/deliverymen')
        .then(response => setDeliverymenList(response.data));
      await api.get('/origins').then(response => setOriginsList(response.data));
      await api
        .get('/recipients')
        .then(response => setRecipientsList(response.data));

      setSelectedDeliveryman(data?.deliveryman || ({} as DeliverymanData));
      setSelectedOrigin(data?.origin || ({} as OriginData));
      setSelectedRecipient(data?.recipient || ({} as RecipientData));

      setInitialData(data || {});
      toggleModalState(buttonTag);
    },
    [toggleModalState],
  );

  const handleSubmit = useCallback(
    async (newData: DeliveryData) => {
      const newDelivery = await createOrUpdateEntity<DeliveryData>(
        initialData as DeliveryData,
        newData,
        'deliveries',
      );

      setDeliveries(allDeliveries => {
        if (initialData.id) {
          return allDeliveries.map(delivery =>
            delivery.id === newDelivery.id ? newDelivery : delivery,
          );
        }

        return [...allDeliveries, newDelivery];
      });

      toggleModalState();
    },
    [initialData, toggleModalState],
  );

  const handleDeleteItem = useCallback(
    async (id: string) => {
      await api.delete(`/deliveries/${id}`);

      setDeliveries(deliveries.filter(delivery => delivery.id !== id));
    },
    [deliveries],
  );

  return (
    <Container>
      <Modal>
        <h1>Adicionando Entrega...</h1>

        <Form id="hook-form" initialData={initialData} onSubmit={handleSubmit}>
          <Input name="product" placeholder="Produto" />
          <div>
            <OptionsSelectContainer>
              <ExtendedSelect
                handleOnChange={handleChangeSelectedDeliveryman}
                placeholder="Entregador"
                name="deliveryman_id"
              >
                {deliverymenList.map(deliveryman => (
                  <Option key={deliveryman.id} value={deliveryman.id}>
                    {deliveryman.name}
                  </Option>
                ))}
              </ExtendedSelect>
              <InfoContainer>
                <div>
                  <span>Email:</span>
                  <span>{selectedDeliveryman.email}</span>
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

            <OptionsSelectContainer>
              <ExtendedSelect
                handleOnChange={handleChangeSelectedOrigin}
                placeholder="Estoque"
                name="origin_id"
              >
                {originsList.map(origin => (
                  <Option key={origin.id} value={origin.id}>
                    {origin.street}
                  </Option>
                ))}
              </ExtendedSelect>
              <InfoContainer>
                <div>
                  <span>Número:</span>
                  <span>{selectedOrigin.number}</span>
                </div>
                <div>
                  <span>Cidade:</span>
                  <span>{selectedOrigin.city}</span>
                </div>
                <div>
                  <span>Estado:</span>
                  <span>{selectedOrigin.state}</span>
                </div>
                <div>
                  <span>Complemento:</span>
                  <span>{selectedOrigin.complement}</span>
                </div>
                <div>
                  <span>CEP:</span>
                  <span>{selectedOrigin.zip_code}</span>
                </div>
              </InfoContainer>
            </OptionsSelectContainer>

            <OptionsSelectContainer>
              <ExtendedSelect
                handleOnChange={handleChangeSelectedRecipient}
                placeholder="Destinatário"
                name="recipient_id"
              >
                {recipientsList.map(recipient => (
                  <Option key={recipient.id} value={recipient.id}>
                    {recipient.name}
                  </Option>
                ))}
              </ExtendedSelect>
              <InfoContainer>
                <div>
                  <span>Rua:</span>
                  <span>{selectedRecipient.street}</span>
                </div>
                <div>
                  <span>Número:</span>
                  <span>{selectedRecipient.number}</span>
                </div>
                <div>
                  <span>Cidade:</span>
                  <span>{selectedRecipient.city}</span>
                </div>
                <div>
                  <span>Estado:</span>
                  <span>{selectedRecipient.state}</span>
                </div>
                <div>
                  <span>Complemento:</span>
                  <span>{selectedRecipient.complement}</span>
                </div>
                <div>
                  <span>CEP:</span>
                  <span>{selectedRecipient.zip_code}</span>
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
                  <Option value="none">Status</Option>
                  <Option value="delivered">Entregue</Option>
                  <Option value="forwarded">Encaminhado</Option>
                  <Option value="pending">Pendente</Option>
                  <Option value="canceled">Cancelado</Option>
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
                      onClick={() => handleOpenModal('Atualizar', delivery)}
                    >
                      <img src={editImg} alt="Editar" />
                    </ActionButton>
                    <ActionButton
                      color="#bd1111"
                      disabled={!!delivery.start_date}
                      onClick={() => handleDeleteItem(delivery.id)}
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
