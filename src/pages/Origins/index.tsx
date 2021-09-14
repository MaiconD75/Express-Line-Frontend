import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { Form } from '@unform/web';
import api from '../../services/api';
import statesList from '../../utils/statesList';
import { createOrUpdateEntity } from '../../services/apiMethods';
import { useModal } from '../../hooks/ModalContext';

import ActionButton from '../../components/ActionButton';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import SearchBar from '../../components/SearchBar';
import { NormalSelect } from '../../components/Select/NormalSelect';
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
import { Option } from '../../components/Select/styles';

export interface OriginData {
  id: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
}

const Origins: React.FC = () => {
  const [origins, setOrigins] = useState<OriginData[]>([]);
  const [filteredOrigins, setFilteredOrigins] = useState<OriginData[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [initialData, setInitialData] = useState<{
    id?: string;
    state?: string;
  }>({});

  const { toggleModalState } = useModal();

  useEffect(() => {
    api.get('/origins').then(response => setOrigins(response.data));
  }, []);

  useEffect(() => {
    setSelectedState('');
  }, [toggleModalState]);

  const handleOpenForm = useCallback(
    (buttonTag: string, data?: OriginData): void => {
      setInitialData(data || {});
      toggleModalState(buttonTag);
    },
    [toggleModalState],
  );

  const handleSubmit = useCallback(
    async (newData: OriginData) => {
      const newOrigin = await createOrUpdateEntity<OriginData>(
        initialData as OriginData,
        newData,
        'origins',
      );

      setOrigins(allOrigins => {
        if (initialData.id) {
          return allOrigins.map(origin =>
            origin.id === newOrigin.id ? newOrigin : origin,
          );
        }
        return [...allOrigins, newOrigin];
      });

      toggleModalState();
    },
    [initialData, toggleModalState],
  );

  const handleDeleteItem = useCallback(
    async (id: string) => {
      await api.delete(`/origins/${id}`);

      setOrigins(origins.filter(origin => origin.id !== id));
    },
    [origins],
  );

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.value === '') {
        setFilteredOrigins([]);
      }
      setFilteredOrigins(
        origins.filter(origin =>
          origin.street.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      );
    },
    [origins],
  );

  return (
    <Container>
      <Modal>
        <h1>Registrando estoque...</h1>

        <Form id="hook-form" onSubmit={handleSubmit} initialData={initialData}>
          <div>
            <Input name="street" placeholder="Rua/Avenida" />
            <Input name="number" placeholder="Número" type="number" />
          </div>
          <div>
            <Input name="city" placeholder="Cidade" />
            <Input
              name="state"
              placeholder="Estado"
              defaultValue={selectedState || initialData.state}
              readOnly
            />
            <NormalSelect placeholder="UF" name="state">
              {statesList.map(state => (
                <Option key={state} value={state}>
                  {state}
                </Option>
              ))}
            </NormalSelect>
            <Input name="zip_code" placeholder="CEP" />
          </div>
          <div>
            <Input name="complement" placeholder="Complemento" />
          </div>
        </Form>
      </Modal>
      <SideBar selectedTab="origin" />
      <PageContainer>
        <HeadContainer>
          <Button
            style={{ width: '16vw' }}
            onClick={() => handleOpenForm('Registrar')}
          >
            Registrar estoque
          </Button>
          <SearchBar onChange={handleSearch} />
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
            {(filteredOrigins[0] ? filteredOrigins : origins).map(origin => {
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
                  <td>{origin.complement || 'Sem complemento'}</td>
                  <td>
                    <p>{origin.zip_code}</p>
                  </td>
                  <td>
                    <ActionButton
                      color="#ffc600"
                      onClick={() => handleOpenForm('Atualizar', origin)}
                    >
                      <img src={editImg} alt="Editar" />
                    </ActionButton>
                    <ActionButton
                      color="#bd1111"
                      onClick={() => handleDeleteItem(origin.id)}
                    >
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
