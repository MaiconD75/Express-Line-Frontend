import React from 'react';
import { useModal } from '../../hooks/ModalContext';
import Button from '../Button';

import { Container, MainContainer, ButtonContainer } from './styles';

interface ModalProps {
  confirmButtonTag: string;
}

const Modal: React.FC<ModalProps> = ({ confirmButtonTag, children }) => {
  const { toggleModalState, isClosed } = useModal();

  return (
    <Container isClosed={isClosed}>
      {isClosed ? (
        <></>
      ) : (
        <MainContainer>
          {children}

          <ButtonContainer>
            <Button onClick={() => toggleModalState()}>Cancelar</Button>
            <Button type="submit" form="hook-form">
              {confirmButtonTag}
            </Button>
          </ButtonContainer>
        </MainContainer>
      )}
    </Container>
  );
};

export default Modal;
