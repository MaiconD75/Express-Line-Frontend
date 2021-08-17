import React from 'react';

import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
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
  Statuscontainer,
  ActionButton,
} from './styles';

const Deliveries: React.FC = () => {
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
                  <option value="" selected>
                    Status
                  </option>
                  <option value="delivered">Entregue</option>
                  <option value="forwarded">Encaminhado</option>
                  <option value="pending">Pendente</option>
                  <option value="canceled">Cancelado</option>
                </select>
              </th>
            </TitleContainer>

            <ItemContainer>
              <td>Nintendo Switch</td>
              <td>Valdir Peixoto</td>
              <td>Felipe Romoaldo</td>
              <td>Rua Gerivaldo Golveia, 753, Mossoró-RN</td>

              <Statuscontainer>
                <div>
                  <canvas />
                  <span>Encaminhado</span>
                </div>

                <ActionButton color="#ffc600" disabled>
                  <img src={editImg} alt="Editar" />
                </ActionButton>
                <ActionButton color="#bd1111" disabled>
                  <img src={trashImg} alt="Excluir" />
                </ActionButton>
              </Statuscontainer>
            </ItemContainer>
          </table>
        </MainContainer>
      </PageContainer>
    </Container>
  );
};

export default Deliveries;
