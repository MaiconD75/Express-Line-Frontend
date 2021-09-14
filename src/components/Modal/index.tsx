import React, { MouseEvent, useCallback } from 'react';
import { useModal } from '../../hooks/ModalContext';
import Button from '../Button';

import { Container, MainContainer, ButtonContainer } from './styles';

const Modal: React.FC = ({ children }) => {
  const { toggleModalState, isClosed, confirmButtonTag } = useModal();

  const handleClickOutside = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.target === e.currentTarget && toggleModalState();
    },
    [toggleModalState],
  );

  return (
    <Container onClick={handleClickOutside} isClosed={isClosed}>
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
