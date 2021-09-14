import styled from 'styled-components';

interface ContainerProps {
  isClosed: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;

  top: 0;
  left: 0;

  display: ${props => (props.isClosed ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const MainContainer = styled.div`
  width: 57vw;
  height: 87vh;
  padding: 56px;
  position: fixed;
  z-index: 4;

  background-color: #f5f5f5;
  align-items: center;

  overflow-y: scroll;

  border-radius: 12px;

  > div {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      align-self: flex-start;
      justify-content: flex-start;

      font: 600 48px Poppins, sans-serif;

      color: #072ac8;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 32px;

  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;

  button {
    width: 288px;

    &:nth-child(1) {
      background-color: #bd1111;
    }
  }
`;
