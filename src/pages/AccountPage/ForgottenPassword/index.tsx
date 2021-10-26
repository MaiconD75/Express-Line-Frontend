import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import AccountPageLayout from '..';

import Form from '../../../components/Form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import passwordImg from '../../../assets/png/password.png';
import arrowImg from '../../../assets/png/arrow.png';

import Link from '../../../components/Link';
import api from '../../../services/api';

interface forgottenPasswordCredentials {
  password: string;
}

const ForgottenPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const history = useHistory();

  async function handleSubmit({
    password,
  }: forgottenPasswordCredentials): Promise<void> {
    try {
      await api.patch(`/users/forgotten-password/${token}`, { password });

      history.push('/');
      toast.success('Sua senha foi alterada com sucesso', {
        duration: 5000,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <AccountPageLayout>
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
    </AccountPageLayout>
  );
};

export default ForgottenPassword;
