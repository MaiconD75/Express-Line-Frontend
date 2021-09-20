import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import Button from '../../components/Button';

import logoImg from '../../assets/png/logo.png';

import { Container, LogoContainer } from './styles';
import api from '../../services/api';

const ConfirmEmail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  async function handleConfirmEmail(): Promise<void> {
    await api.patch(`/users/confirm-email/${id}`);

    history.push('/');
    toast.success('Sua conta foi criada com sucesso', {
      duration: 5000,
    });
  }

  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={logoImg} alt="Logo" />
          <h1>Express Line</h1>
        </LogoContainer>

        <p>
          Está quase tudo pronto, agora basta apertar o botão a seguir para
          concluir o seu cadastro
        </p>

        <Button onClick={handleConfirmEmail}>Confirmar Email</Button>
      </div>
    </Container>
  );
};

export default ConfirmEmail;
