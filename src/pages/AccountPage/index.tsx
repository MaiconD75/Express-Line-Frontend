import React from 'react';

import { Container, LogoContainer } from './styles';

import logoImg from '../../assets/png/logo.png';

const AccountPageLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={logoImg} alt="Logo" />
          <h1>Express Line</h1>
        </LogoContainer>

        {children}
      </div>
    </Container>
  );
};

export default AccountPageLayout;
