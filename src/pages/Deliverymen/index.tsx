import React, { useEffect } from 'react';

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

const Deliverymen: React.FC = () => {
  // const { getAllDeliveires, deliveries } = useDeliveries();

  // useEffect(() => {
  //   getAllDeliveires();
  // }, [getAllDeliveires]);

  return (
    <Container>
      <SideBar />
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
            {/* {deliveries.map(deliverie => { */}
            {/* return ( */}
            <TableItem>
              <td>
                <ImageContainer>
                  <p>VP</p>
                </ImageContainer>
              </td>
              <td>Valdir Peixoto</td>
              <td>vpeixoto@gmail.com</td>
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
            {/* ); */}
            {/* })} */}
          </Table>
        </MainContainer>
      </PageContainer>
    </Container>
  );
};

export default Deliverymen;
