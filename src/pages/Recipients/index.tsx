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
import sortComparation from '../../utils/sortComparation';
import { SortIcon } from '../../components/Table/TableHead/styles';

export interface RecipientData {
  id: string;
  name: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
  created_at: Date;
}

const Recipients: React.FC = () => {
  const [recipients, setRecipients] = useState<RecipientData[]>([]);
  const [filteredRecipients, setFilteredRecipients] = useState<RecipientData[]>(
    [],
  );
  const [sortedRecipients, setSortedRecipients] = useState<RecipientData[]>([]);
  const [sort, setSort] = useState(0);

  const [selectedState, setSelectedState] = useState('');
  const [initialData, setInitialData] = useState<{
    id?: string;
    state?: string;
  }>({});

  const { toggleModalState } = useModal();

  useEffect(() => {
    api.get('/recipients').then(response => setRecipients(response.data));
  }, []);

  useEffect(() => {
    setSelectedState('');
  }, [toggleModalState]);

  const handleOpenForm = useCallback(
    (buttonTag: string, data?: RecipientData): void => {
      setInitialData(data || {});
      toggleModalState(buttonTag);
    },
    [toggleModalState],
  );

  const handleSubmit = useCallback(
    async (newData: RecipientData) => {
      const newRecipient = await createOrUpdateEntity(
        initialData as RecipientData,
        newData,
        'recipients',
      );

      setRecipients(allRecipients => {
        if (initialData.id) {
          return allRecipients.map(recipient =>
            recipient.id === newRecipient.id ? newRecipient : recipient,
          );
        }

        return [...allRecipients, newRecipient];
      });

      toggleModalState();
    },
    [initialData, toggleModalState],
  );

  const handleDeleteItem = useCallback(
    async (id: string) => {
      await api.delete(`/recipients/${id}`);

      setRecipients(recipients.filter(recipient => recipient.id !== id));
    },
    [recipients],
  );

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.value === '') {
        setFilteredRecipients([]);
      }
      setFilteredRecipients(
        recipients.filter(recipient =>
          recipient.name.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      );
    },
    [recipients],
  );

  const handleSort = useCallback(
    (toSort = true) => {
      let sortType = sort;
      if (toSort) {
        sortType === 2 ? (sortType = 0) : (sortType += 1);
      }

      const recipientsToSort = filteredRecipients[0]
        ? filteredRecipients
        : recipients;

      sortType === 0 &&
        setSortedRecipients(
          recipientsToSort.sort((a, b) =>
            sortComparation<Date>(a.created_at, b.created_at),
          ),
        );
      sortType === 1 &&
        setSortedRecipients(
          recipientsToSort.sort((a, b) =>
            sortComparation<string>(a.name.toLowerCase(), b.name.toLowerCase()),
          ),
        );
      sortType === 2 &&
        setSortedRecipients(
          recipientsToSort.sort((a, b) =>
            sortComparation<string>(b.name.toLowerCase(), a.name.toLowerCase()),
          ),
        );

      setSort(sortType);
    },
    [sort, filteredRecipients, recipients],
  );

  useEffect(() => {
    handleSort(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredRecipients, recipients]);

  return (
    <Container>
      <Modal>
        <h1>Adicionar destinatário...</h1>

        <Form id="hook-form" onSubmit={handleSubmit} initialData={initialData}>
          <div>
            <Input name="name" placeholder="Nome" />
          </div>
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
      <SideBar selectedTab="recipient" />
      <PageContainer>
        <HeadContainer>
          <Button
            style={{ width: '16vw' }}
            onClick={() => handleOpenForm('Adicionar')}
          >
            Adicionar destinatário
          </Button>
          <SearchBar onChange={handleSearch} />
        </HeadContainer>

        <MainContainer>
          <Table>
            <TableHead>
              <th>
                <button type="button" onClick={handleSort}>
                  Nome
                  <SortIcon name="Ordenar" sortType={sort} />
                </button>
              </th>
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
            {sortedRecipients.map(recipient => {
              return (
                <TableItem key={recipient.id}>
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
                    <ActionButton
                      color="#ffc600"
                      onClick={() => handleOpenForm('Atualizar', recipient)}
                    >
                      <img src={editImg} alt="Editar" />
                    </ActionButton>
                    <ActionButton
                      color="#bd1111"
                      onClick={() => handleDeleteItem(recipient.id)}
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

export default Recipients;
