import React, { useEffect, useState } from 'react';

import { createOrUpdateEntity } from '../../services/apiMethods';
import getInitials from '../../utils/getInitials';
import { getFilesUrl } from '../../utils/getFilesUrl';
import { useModal } from '../../hooks/ModalContext';

import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import TableHead from '../../components/Table/TableHead';
import TableItem from '../../components/Table/TableItem';

import emailImg from '../../assets/png/email.png';
import editImg from '../../assets/png/edit.png';
import fireImg from '../../assets/png/fire.png';
import userImg from '../../assets/png/user.png';

import {
  Container,
  PageContainer,
  HeadContainer,
  MainContainer,
  ImageContainer,
  AvatarContainer,
} from './styles';
import api from '../../services/api';

export interface DeliverymanData {
  avatar: string;
  name: string;
  email: string;
  id: string;
}

const Deliverymen: React.FC = () => {
  const { toggleModalState } = useModal();

  const [deliverymen, setDeliverymen] = useState<DeliverymanData[]>([]);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    api.get('/deliverymen').then(response => setDeliverymen(response.data));
  }, []);

  function handleOpenModal(data?: DeliverymanData): void {
    setInitialData(data || {});
    toggleModalState();
  }

  async function handleSubmit(newDeliveryman: DeliverymanData): Promise<void> {
    createOrUpdateEntity<DeliverymanData>(
      initialData as DeliverymanData,
      newDeliveryman,
      'deliverymen',
    ).then(() => {
      setDeliverymen(allDeliverymen =>
        initialData
          ? allDeliverymen.map(deliveryman =>
              deliveryman.id === newDeliveryman.id
                ? newDeliveryman
                : deliveryman,
            )
          : { ...allDeliverymen, newDeliveryman },
      );
    });

    toggleModalState();
  }

  return (
    <Container>
      <Modal confirmButtonTag="Contratar">
        <div>
          <h1>Contratando...</h1>
          <Form
            id="hook-form"
            onSubmit={handleSubmit}
            initialData={initialData}
          >
            <AvatarContainer htmlFor="avatar">
              <img src={userImg} alt="Adicionar foto" />
              <p>Adcionar foto</p>
              <input type="file" id="avatar" />
            </AvatarContainer>
            <Input
              name="name"
              label="Nome"
              icon={userImg}
              placeholder="Nome do funcionário"
            />
            <Input
              name="email"
              label="Email"
              icon={emailImg}
              placeholder="Email do funcionário"
            />
          </Form>
        </div>
      </Modal>
      <SideBar selectedTab="deliveryman" />
      <PageContainer>
        <HeadContainer>
          <Button onClick={() => handleOpenModal()} style={{ width: '16vw' }}>
            Contratar
          </Button>
          <SearchBar />
        </HeadContainer>

        <MainContainer>
          <Table>
            <TableHead>
              <th aria-label="image" />
              <th>Nome</th>
              <th>Email</th>
              <th>
                <p>Entregas</p>
              </th>
              <th>
                <p>Entregas Canceladas</p>
              </th>
              <th aria-label="buttons" />
            </TableHead>
            {deliverymen.map(deliveryman => {
              return (
                <TableItem key={deliveryman.id}>
                  <td>
                    <ImageContainer
                      nameColor={`#${(
                        (getInitials(deliveryman.name).charCodeAt(0) +
                          getInitials(deliveryman.name).charCodeAt(1)) *
                        11
                      ).toString(16)}`}
                    >
                      {deliveryman.avatar ? (
                        <img
                          src={getFilesUrl(deliveryman.avatar)}
                          alt={deliveryman.name}
                        />
                      ) : (
                        <p>{getInitials(deliveryman.name)}</p>
                      )}
                    </ImageContainer>
                  </td>
                  <td>{deliveryman.name}</td>
                  <td>{deliveryman.email}</td>
                  <td>
                    <p>83</p>
                  </td>
                  <td>
                    <p>5</p>
                  </td>
                  <td>
                    <ActionButton
                      color="#ffc600"
                      onClick={() => {
                        handleOpenModal(deliveryman);
                      }}
                    >
                      <img src={editImg} alt="Editar" />
                    </ActionButton>
                    <ActionButton color="#bd1111">
                      <img src={fireImg} alt="Excluir" />
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

export default Deliverymen;
