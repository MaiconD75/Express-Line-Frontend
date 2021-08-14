import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 128px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;

  position: relative;

  background-color: #072ac8;

  img {
    object-fit: contain;
  }

  button {
    border: none;
    cursor: pointer;

    transition: 0.2s linear;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 12.5vh;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid #ccc;

  img {
    height: 60px;
  }
`;

export const BackButton = styled.button`
  width: 48px;
  height: 48px;

  background-color: #ffc600;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  top: calc(12.5vh - 24px);
  right: -24px;

  img {
    margin-right: -5px;
    height: 20px;
  }

  &:hover {
    background-color: ${darken(0.04, '#ffc600')};
  }
`;

export const TabContainer = styled.button`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
`;

export const TabButton = styled.button`
  width: 48px;
  height: 48px;
  margin-top: 24px;

  background-color: #1360e2;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
  }

  &:hover {
    background-color: ${darken(0.04, '#1360e2')};
  }
`;

export const ExitContainer = styled.div`
  height: 12.5vh;
  width: 100%;

  background-color: #072ac8;

  border-top: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 64px;
    height: 64px;

    background-color: #bd1111;
    border-radius: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 28px;
    }

    &:hover {
      background-color: ${darken(0.04, '#bd1111')};
    }
  }
`;
