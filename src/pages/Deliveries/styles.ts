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

export const OptionsSelectContainer = styled.div`
  height: 520px;
  width: 300px;
  min-width: 96px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  background-color: #fefefe;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
`;

export const OptionsSelect = styled(Select).attrs(() => ({
  displayEmpty: true,
}))`
  height: 48px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;

  border-bottom: 2px solid #eee;

  > div {
    box-sizing: content-box;
    padding: 0 24px;
  }

  &,
  > input {
    font: 500 20px Roboto, sans-serif !important;
    color: #333 !important;
  }

  align-self: flex-end;

  &:before,
  &:after {
    display: none;
  }

  > div:focus {
    background-color: #fefefe;

    &:before {
      content: '';

      height: 516px;
      width: 296px;
      border-radius: 10px;
      border: 2px solid #072ac8;

      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    & + div {
      margin-top: 32px;
    }

    span {
      font: 400 20px Roboto, sans-serif;
      color: #7f7f7f;

      overflow-x: hidden;
      text-overflow: ellipsis;
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
  overflow-y: scroll;
  padding-bottom: 24px;

  th:nth-child(4),
  td:nth-child(4) {
    min-width: 400px;
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
