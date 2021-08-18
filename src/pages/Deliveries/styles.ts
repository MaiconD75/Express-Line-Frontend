import { darken, lighten } from 'polished';
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

export const ActionButton = styled.button<ActionButtonProps>`
  width: 48px;
  height: 48px;

  border-radius: 8px;
  border: none;

  margin: 0 auto;
  background-color: ${props => props.color};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: 0.2s linear;

  img {
    height: 24px;
    object-fit: content;
  }

  &:hover {
    background-color: ${props => darken(0.06, props.color)};
  }

  &:disabled {
    background-color: ${props => lighten(0.36, props.color)};
    cursor: default;
  }
`;
