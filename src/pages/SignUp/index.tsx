import React from 'react';

import { useAuth } from '../../hooks/AuthContext';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/png/logo.png';
import userImg from '../../assets/png/user.png';
import passwordImg from '../../assets/png/password.png';
import emailImg from '../../assets/png/email.png';
import arrowImg from '../../assets/png/arrow.png';

import { Container, LogoContainer } from './styles';
import Link from '../../components/Link';
import api from '../../services/api';

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { login } = useAuth();

  async function handleSubmit({
    name,
    email,
    password,
  }: SignUpCredentials): Promise<void> {
    await api.post('/users', {
      name,
      email,
      password,
    });

    login({ email, password });
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
            name="name"
            placeholder="Seu nome"
            label="Nome"
            icon={userImg}
          />
          <Input
            name="email"
            placeholder="Seu email"
            label="Email"
            icon={emailImg}
          />
          <Input
            name="password"
            placeholder="Sua senha"
            label="Senha"
            icon={passwordImg}
            type="password"
          />

          <Button type="submit">Cadastrar-se</Button>

          <Link to="/">
            <img src={arrowImg} alt="Voltar" />
            Já possuo uma conta
          </Link>
        </Form>
      </div>
    </Container>
  );
};

export default SignUp;
