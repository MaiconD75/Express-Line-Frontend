import React from 'react';

import Link from '../../components/Link';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/png/logo.png';
import truckImg from '../../assets/png/truck.png';
import emailImg from '../../assets/png/email.png';
import passwordImg from '../../assets/png/password.png';

import { useAuth } from '../../hooks/AuthContext';

import {
  Info,
  Container,
  MainContainer,
  LogoContainer,
  LoginContainer,
  SignUpContainer,
} from './styles';

interface loginCredentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();

  async function handleSubmit({
    email,
    password,
  }: loginCredentials): Promise<void> {
    login({ email, password });
  }

  return (
    <Container>
      <Info>
        <img src={truckImg} alt="Caminhão" />

        <div>
          <p>Entregue organizadamente.</p>
          <span>
            Gerencie e organize suas entregas e entragadores dinamicamente em um
            único local.
          </span>
        </div>
      </Info>

      <MainContainer>
        <LogoContainer>
          <img src={logoImg} alt="Logo" />
          <h1>Express Line</h1>
        </LogoContainer>

        <LoginContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              name="email"
              label="Email"
              icon={emailImg}
              placeholder="Seu email"
            />
            <Input
              name="password"
              label="Senha"
              icon={passwordImg}
              placeholder="Sua senha"
              type="password"
            />

            <Link to="/send-email">Esqueci minha senha</Link>

            <Button type="submit">Entrar</Button>
          </Form>

          <SignUpContainer>
            <div />
            <Link to="/sign-up">Criar conta</Link>
            <div />
          </SignUpContainer>
        </LoginContainer>
      </MainContainer>
    </Container>
  );
};

export default Login;
