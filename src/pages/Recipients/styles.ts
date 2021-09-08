import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ImageContainerProps {
  nameColor: string;
}

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  form {
    > div {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & + div {
        margin-top: 24px;
      }

      > div + div {
        margin-left: 24px;
      }

      &:nth-child(1) > div:nth-child(1),
      &:nth-child(2) > div:nth-child(1),
      &:nth-child(3) > div:nth-child(1),
      &:nth-child(4) > div:nth-child(1) {
        width: 100%;
      }

      &:nth-child(3) > div:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const PageContainer = styled.div`
  width: calc(100% - 128px);
  margin-left: 128px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HeadContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 24px 0;
  padding: 0 70px;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  th:nth-child(2),
  td:nth-child(2) {
    min-width: 256px;
  }

  th:nth-child(3),
  td:nth-child(3) {
    min-width: 256px;
  }

  th:nth-child(6),
  td:nth-child(6) {
    min-width: 256px;
  }
`;
