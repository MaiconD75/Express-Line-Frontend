import styled from 'styled-components';
import { Select } from '@material-ui/core';
import { ButtonHTMLAttributes } from 'react';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  form {
    width: 100%;

    > div:nth-child(2),
    > div:nth-child(1) {
      width: calc(100% + 64px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
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
  padding-bottom: 24px;
  overflow: auto;

  td {
    p {
      text-align: start;
    }
  }

  th:nth-child(4),
  td:nth-child(4) {
    max-width: 400px;
    width: 100%;
  }
`;

export const StatusContainer = styled.td`
  display: flex;
  align-items: center;
`;

export const StatusSelect = styled(Select)`
  box-sizing: border-box;
  position: relative;

  > div {
    box-sizing: content-box;
    padding: 0 8px;
  }

  &,
  > input {
    font: 700 16px Poppins, sans-serif !important;
    color: #7f7f7f !important;
  }

  align-self: center;
  margin-right: auto;

  &:before,
  &:after {
    display: none;
  }

  > div:focus {
    background-color: transparent;
  }
`;
