import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import api from '../../services/api';
import getInitials from '../../utils/getInitials';

import { createOrUpdateEntity } from '../../services/apiMethods';

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

export interface DeliverymanData {
  avatar: string;
  name: string;
  email: string;
  id: string;
}

const Deliverymen: React.FC = () => {
  const { toggleModalState } = useModal();

  const [deliverymen, setDeliverymen] = useState<DeliverymanData[]>([]);
  const [initialData, setInitialData] = useState<{
    id?: string;
    avatar?: string;
  }>({});
  const [newAvatarData, setNewAvatarData] = useState<Blob>({} as Blob);
  const [newAvatarUrl, setNewAvatarUrl] = useState('');

  useEffect(() => {
    api.get('/deliverymen').then(response => setDeliverymen(response.data));
  }, []);

  useEffect(() => {
    setNewAvatarUrl('');
  }, [setNewAvatarUrl, toggleModalState]);

  const handleOpenForm = useCallback(
    (buttonTag: string, data?: DeliverymanData): void => {
      setInitialData(data || {});
      toggleModalState(buttonTag);
    },
    [toggleModalState],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files && e.target.files[0]) {
        setNewAvatarData(e.target.files[0]);

        setNewAvatarUrl(URL.createObjectURL(e.target.files[0]));
      }
    },
    [setNewAvatarData, setNewAvatarUrl],
  );

  const handleSubmit = useCallback(
    async (newData: DeliverymanData): Promise<void> => {
      const newDeliveryman = await createOrUpdateEntity<DeliverymanData>(
        initialData as DeliverymanData,
        newData,
        'deliverymen',
      );

      setDeliverymen(allDeliverymen => {
        if (initialData.id) {
          return allDeliverymen.map(deliveryman =>
            deliveryman.id === newDeliveryman.id ? newDeliveryman : deliveryman,
          );
        }

        return [...allDeliverymen, newDeliveryman];
      });

      const avatarData = new FormData();
      avatarData.append('avatar', newAvatarData);

      await api
        .patch(`/deliverymen/images/${newDeliveryman.id}`, avatarData)
        .then(response => {
          setDeliverymen(allDeliverymen =>
            allDeliverymen.map(deliveryman =>
              deliveryman.id === response.data.id ? response.data : deliveryman,
            ),
          );
        });

      toggleModalState();
    },
    [initialData, toggleModalState, newAvatarData],
  );

  const handleDeleteItem = useCallback(
    async (id: string): Promise<void> => {
      await api.delete(`/deliverymen/${id}`);

      setDeliverymen(deliverymen.filter(deliveryman => deliveryman.id !== id));
    },
    [deliverymen],
  );

  return (
    <Container>
      <Modal>
        <h1>Contratando...</h1>
        <Form id="hook-form" onSubmit={handleSubmit} initialData={initialData}>
          <AvatarContainer
            htmlFor="avatar"
            hasImage={!!newAvatarUrl || !!initialData.avatar}
          >
            <img
              src={
                newAvatarUrl ||
                (initialData.avatar ? getFilesUrl(initialData.avatar) : userImg)
              }
              alt="Adicionar foto"
            />
            <p>Adcionar foto</p>
            <input
              type="file"
              accept="image/*"
              id="avatar"
              onChange={handleAvatarChange}
            />
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
      </Modal>
      <SideBar selectedTab="deliveryman" />
      <PageContainer>
        <HeadContainer>
          <Button
            onClick={() => handleOpenForm('Contratar')}
            style={{ width: '16vw' }}
          >
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
                        handleOpenForm('Atualizar', deliveryman);
                      }}
                    >
                      <img src={editImg} alt="Editar" />
                    </ActionButton>
                    <ActionButton
                      color="#bd1111"
                      onClick={() => handleDeleteItem(deliveryman.id)}
                    >
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
