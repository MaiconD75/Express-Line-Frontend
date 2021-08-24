import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
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

  th:nth-child(4),
  td:nth-child(4) {
    min-width: 400px;
  }
`;

export const StatusContainer = styled.td`
  display: flex;
  align-items: center;
`;
