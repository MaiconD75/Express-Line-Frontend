import React from 'react';

import Form from '../../components/Form';
import Input from '../../components/Input';

import logoImg from '../../assets/png/logo.png';
import truckImg from '../../assets/png/truck.png';
import userImg from '../../assets/png/user.png';
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
          <Form submitFunction={handleSubmit}>
            <Input name="email" icon={userImg} placeholder="Seu email" />
            <div>
              <Input
                name="password"
                icon={passwordImg}
                placeholder="Sua senha"
                type="password"
              />
            </div>

            <a href="/">Esqueci minha senha</a>

            <button type="submit">Entrar</button>
          </Form>

          <SignUpContainer>
            <div />
            <a href="/">Criar conta</a>
            <div />
          </SignUpContainer>
        </LoginContainer>
      </MainContainer>
    </Container>
  );
};

export default Login;
