import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import AccountPageLayout from '..';

import Button from '../../../components/Button';

import api from '../../../services/api';

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
    <AccountPageLayout>
      <p>
        Está quase tudo pronto, agora basta apertar o botão a seguir para
        concluir o seu cadastro
      </p>

      <Button onClick={handleConfirmEmail}>Confirmar Email</Button>
    </AccountPageLayout>
  );
};

export default ConfirmEmail;
