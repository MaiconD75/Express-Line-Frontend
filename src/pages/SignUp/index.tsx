import React from 'react';
import * as Yup from 'yup';

import { toast } from 'react-hot-toast';

import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  async function handleSubmit(data: SignUpCredentials): Promise<void> {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório'),
      password: Yup.string()
        .min(6, 'A senha precisa conter pelo menos 6 caracteres')
        .required('A senha é obrigatório'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    await api.post('/users', data);

    toast.success('Um email de confirmação foi enviado para você', {
      duration: 5000,
    });

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
