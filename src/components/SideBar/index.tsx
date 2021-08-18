import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

import whiteLogoImg from '../../assets/png/whiteLogo.png';
import extendedWhiteLogoImg from '../../assets/png/extendedWhiteLogo.png';
import whiteArrowImg from '../../assets/png/whiteArrow.png';
import deliveryImg from '../../assets/png/delivery.png';
import deliverymanImg from '../../assets/png/deliveryman.png';
import recipientImg from '../../assets/png/recipient.png';
import stockImg from '../../assets/png/stock.png';
import logoffImg from '../../assets/png/logoff.png';

import { useSideBar } from '../../hooks/SideBarContext';

import {
  Container,
  LogoContainer,
  ExtensionButton,
  TabButton,
  TabContainer,
  ExitContainer,
} from './styles';

const SideBar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('delivery');
  const { toggleSideBarState, isExtended } = useSideBar();
  const { logoff } = useAuth();

  const history = useHistory();

  function handleLogoff() {
    logoff();
  }

  function handleSelectTab(page: string, selectedButton: string) {
    setSelectedTab(selectedButton);

    history.push(`/${page}`);
  }

  function handleToggleSideBarState() {
    toggleSideBarState();
  }

  return (
    <Container isExtended={isExtended}>
      <LogoContainer>
        <img
          src={isExtended ? extendedWhiteLogoImg : whiteLogoImg}
          alt="Express Line"
        />
      </LogoContainer>

      <ExtensionButton onClick={handleToggleSideBarState}>
        <img src={whiteArrowImg} alt="Expandir menu" />
      </ExtensionButton>

      <TabContainer>
        <TabButton
          isSelected={selectedTab === 'delivery'}
          disabled={selectedTab === 'delivery'}
          onClick={() => handleSelectTab('Deliveries', 'delivery')}
        >
          <img src={deliveryImg} alt="Entregas" />
          {isExtended && <p>Entregas</p>}
        </TabButton>
        <TabButton
          isSelected={selectedTab === 'deliveryman'}
          disabled={selectedTab === 'deliveryman'}
          onClick={() => handleSelectTab('Deliverymen', 'deliveryman')}
        >
          <img src={deliverymanImg} alt="Entregadores" />
          {isExtended && <p>Entregadores</p>}
        </TabButton>
        <TabButton
          isSelected={selectedTab === 'stock'}
          disabled={selectedTab === 'stock'}
          onClick={() => handleSelectTab('Origins', 'stock')}
        >
          <img src={stockImg} alt="Estoques" />
          {isExtended && <p>Estoques</p>}
        </TabButton>
        <TabButton
          isSelected={selectedTab === 'recipient'}
          disabled={selectedTab === 'recipient'}
          onClick={() => handleSelectTab('Recipients', 'recipient')}
        >
          <img src={recipientImg} alt="Destinatários" />
          {isExtended && <p>Destinatários</p>}
        </TabButton>
      </TabContainer>

      <ExitContainer>
        <button type="button" onClick={handleLogoff}>
          <img src={logoffImg} alt="" />
          {isExtended && <p>Sair</p>}
        </button>
      </ExitContainer>
    </Container>
  );
};

export default SideBar;
