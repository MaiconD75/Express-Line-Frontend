import React, { useEffect } from 'react';

import { useDeliverymen } from '../../hooks/DeliverymenContextx';
import { getFilesUrl } from '../../services/getFilesUrl';

import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';
import TableHead from '../../components/Table/TableHead';
import TableItem from '../../components/Table/TableItem';

import editImg from '../../assets/png/edit.png';
import fireImg from '../../assets/png/fire.png';

import {
  Container,
  PageContainer,
  HeadContainer,
  MainContainer,
  ImageContainer,
  ActionButton,
} from './styles';
import getInitials from '../../services/getInitials';

const Deliverymen: React.FC = () => {
  const { getAllDeliverymen, deliverymen } = useDeliverymen();

  useEffect(() => {
    getAllDeliverymen();
  }, [getAllDeliverymen]);

  return (
    <Container>
      <SideBar selectedTab="deliveryman" />
      <PageContainer>
        <HeadContainer>
          <Button style={{ width: '16vw' }}>Contratar</Button>
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
                    <ActionButton color="#ffc600">
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