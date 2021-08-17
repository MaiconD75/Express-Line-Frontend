import { darken, lighten } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PageContainer = styled.div`
  width: 100%;
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

  form {
    width: 24vw;
    height: 48px;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;

    & > div {
      width: 100%;
    }

    div {
      margin: 0;
      border-radius: 12px 0 0 12px;
      height: 100%;
    }
  }
`;

export const SearchButton = styled(Button)`
  min-width: 48px;
  height: 48px;
  margin: 0 !important;
  border-radius: 0 12px 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    object-fit: contain;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  table {
    width: 100%;
    padding: 0 70px;
    overflow-y: scroll;

    tr {
      display: flex;
      flex-direction: row;
      padding: 0 36px;
    }

    th,
    td {
      display: flex;
      justify-content: flex-start;
      width: 18%;
      display: flex;
      align-items: center;
      white-space: nowrap;

      &:nth-child(4) {
        width: 28%;
      }
    }

    canvas {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-left: 8px;

      background-color: #ffc600;
    }
  }
`;

export const TitleContainer = styled.tr`
  height: 40px;
  padding-bottom: auto;
  border-bottom: 2px solid #eee;
  margin-bottom: 32px;

  select {
    width: fit-content;
    display: flex;
    margin-left: 8px;
    align-items: flex-start;
    border: none;
    background-color: #f5f5f5;
    font: 600 16px Poppins, sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
  }
`;

export const ItemContainer = styled.tr`
  height: 72px;
  width: 100%;

  background-color: #fefefe;
  display: flex;
  align-items: center;
  margin-top: 16px;

  border-radius: 16px;

  td {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Statuscontainer = styled.td`
  display: flex;
  align-items: center;

  div {
    width: 55%;
    height: 32px;
    display: flex;
    align-items: center;
    background-color: #fef977;
    border-radius: 16px;

    canvas {
      margin-left: 8px;
    }

    span {
      font-size: 14px;
      font-weight: 600;
      color: #ffc600;
      overflow: hidden;
      text-overflow: ellipsis;

      margin: 0 auto;
    }
  }
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
