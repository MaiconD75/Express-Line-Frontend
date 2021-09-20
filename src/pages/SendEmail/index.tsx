import React from 'react';
import { toast } from 'react-hot-toast';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/png/logo.png';
import emailImg from '../../assets/png/email.png';
import arrowImg from '../../assets/png/arrow.png';

import { Container, LogoContainer } from './styles';
import Link from '../../components/Link';
import api from '../../services/api';

interface createTokenCredentials {
  email: string;
}

const SendEmail: React.FC = () => {
  async function handleSubmit({
    email,
  }: createTokenCredentials): Promise<void> {
    try {
      await api.post('/users/forgotten-password', { email });

      toast.success('Um email de troca de senha foi enviado para você', {
        duration: 5000,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={logoImg} alt="Logo" />
          <h1>Express Line</h1>
        </LogoContainer>

        <p>
          Insira o seu endereço de email e enviarémos um email para a troca de
          sua senha.
        </p>

        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            placeholder="Seu Email"
            label="Email"
            icon={emailImg}
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

export default SendEmail;
