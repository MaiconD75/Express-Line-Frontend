import React from 'react';
import { useModal } from '../../hooks/ModalContext';
import Button from '../Button';

import { Container, MainContainer, ButtonContainer } from './styles';

const Modal: React.FC = ({ children }) => {
  const { toggleModalState, isClosed, confirmButtonTag } = useModal();

  return (
    <Container isClosed={isClosed}>
      {isClosed ? (
        <></>
      ) : (
        <MainContainer>
          <div>
            {children}

            <ButtonContainer>
              <Button onClick={() => toggleModalState()}>Cancelar</Button>
              <Button type="submit" form="hook-form">
                {confirmButtonTag}
              </Button>
            </ButtonContainer>
          </div>
        </MainContainer>
      )}
    </Container>
  );
};

export default Modal;
