import React from 'react';

import { useAuth } from '../../hooks/AuthContext';

import whiteLogoImg from '../../assets/png/whiteLogo.png';
import whiteArrowImg from '../../assets/png/whiteArrow.png';
import deliveryImg from '../../assets/png/delivery.png';
import deliverymanImg from '../../assets/png/deliveryman.png';
import recipientImg from '../../assets/png/recipient.png';
import stockImg from '../../assets/png/stock.png';
import logoffImg from '../../assets/png/logoff.png';

import {
  Container,
  LogoContainer,
  BackButton,
  TabButton,
  TabContainer,
  ExitContainer,
} from './styles';

const SideBar: React.FC = () => {
  const { logoff } = useAuth();

  function handleLogoff() {
    logoff();
  }

  return (
    <Container>
      <LogoContainer>
        <img src={whiteLogoImg} alt="Express Line" />
      </LogoContainer>

      <BackButton>
        <img src={whiteArrowImg} alt="Expandir menu" />
      </BackButton>

      <TabContainer>
        <TabButton>
          <img src={deliveryImg} alt="Entregas" />
        </TabButton>
        <TabButton>
          <img src={deliverymanImg} alt="Entregadores" />
        </TabButton>
        <TabButton>
          <img src={stockImg} alt="Estoques" />
        </TabButton>
        <TabButton>
          <img src={recipientImg} alt="Destinatários" />
        </TabButton>
      </TabContainer>

      <ExitContainer>
        <button type="button" onClick={handleLogoff}>
          <img src={logoffImg} alt="" />
        </button>
      </ExitContainer>
    </Container>
  );
};

export default SideBar;
