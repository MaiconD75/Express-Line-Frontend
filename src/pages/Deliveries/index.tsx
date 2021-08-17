import React, { useEffect } from 'react';

import { useDeliveries } from '../../hooks/DeliveriesContextx';
import { FormatAddres } from '../../services/FormatAddres';

import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import StatusTag from '../../components/StatusTag';
import SideBar from '../../components/SideBar';

import searchImg from '../../assets/png/search.png';
import editImg from '../../assets/png/edit.png';
import trashImg from '../../assets/png/trash.png';

import {
  Container,
  PageContainer,
  HeadContainer,
  SearchButton,
  MainContainer,
  TitleContainer,
  ItemContainer,
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
          <Form onSubmit={() => alert('pesquisando')}>
            <Input name="searchContent" placeholder="Buscar entrega..." />
            <SearchButton type="submit">
              <img src={searchImg} alt="Buscar" />
            </SearchButton>
          </Form>
        </HeadContainer>

        <MainContainer>
          <table>
            <TitleContainer>
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
            </TitleContainer>
            {deliveries.map(deliverie => {
              return (
                <ItemContainer>
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
                </ItemContainer>
              );
            })}
          </table>
        </MainContainer>
      </PageContainer>
    </Container>
  );
};

export default Deliveries;
