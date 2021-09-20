import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/png/logo.png';
import passwordImg from '../../assets/png/password.png';
import arrowImg from '../../assets/png/arrow.png';

import { Container, LogoContainer } from './styles';
import Link from '../../components/Link';
import api from '../../services/api';

interface forgottenPasswordCredentials {
  password: string;
}

const ForgottenPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const history = useHistory();

  async function handleSubmit({
    password,
  }: forgottenPasswordCredentials): Promise<void> {
    await api.patch(`/users/forgotten-password/${token}`, { password });

    history.push('/');
  }

  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={logoImg} alt="Logo" />
          <h1>Express Line</h1>
        </LogoContainer>

        <Form onSubmit={handleSubmit}>
          <Input
            name="password"
            placeholder="Nova Senha"
            label="Senha"
            icon={passwordImg}
            type="password"
          />
          <Input
            name="confirmPassword"
            placeholder="Cofimar senha"
            label="Confirmar senha"
            icon={passwordImg}
            type="password"
          />

          <Button type="submit">Mudar Senha</Button>

          <Link to="/">
            <img src={arrowImg} alt="Voltar" />
            Lembrei minha senha
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default ForgottenPassword;
