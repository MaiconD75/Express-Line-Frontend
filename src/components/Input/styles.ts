import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface InputContainerProps {
  error: string | undefined;
}

export const Container = styled.div`
  p {
    font: 20px 'Roboto', sans-serif;
    color: #333;
    margin-top: 32px;
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  height: 48px;
  margin: 12px 0 0;

  background: #fefefe;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;

  position: relative;

  ${props =>
    props.error &&
    css`
      &:after {
        content: '';
        width: 100%;
        height: 48px;
        position: absolute;
        top: -2px;
        left: -2px;

        pointer-events: none;
        background-color: none;
        border: 2px solid #bd1111;
        border-radius: 10px;
      }
    `}

  &:focus-within:after {
    content: '';
    width: 100%;
    height: 48px;
    position: absolute;
    top: -2px;
    left: -2px;

    pointer-events: none;
    background-color: none;
    border: 2px solid #072ac8;
    border-radius: 10px;
  }

  input {
    border: none;
    background-color: none;
    height: 100%;
    width: 100%;
    padding: 0 24px;
    outline: none;
    font: 20px 'Roboto', sans-serif;
    color: #333;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const IconContainer = styled.div`
  height: calc(100% - 16px);
  min-width: 48px;
  max-width: 48px;
  border-right: 2px solid #ccc;
  padding: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    max-width: 40%;
    height: auto;
  }
`;

export const Errors = styled(Tooltip)`
  svg {
    height: 24px;
    width: 48px;
  }

  span {
    background-color: #bd1111;
    color: #fefefe;

    &::after {
      border-color: #bd1111 transparent;
    }
  }
`;
