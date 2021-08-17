import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { ButtonHTMLAttributes } from 'react';

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
}

interface ContainerProps {
  isExtended: boolean;
}

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

export const ExtensionButton = styled.button`
  width: 48px !important;
  height: 48px;

  background-color: #ffc600;
  border-radius: 50% !important;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  top: calc(12.5vh - 24px);
  right: -24px;

  img {
    margin-right: -5px;
    height: 20px;
    transition: 0.2s linear;
  }

  &:hover {
    background-color: ${darken(0.04, '#ffc600')};
  }
`;

export const TabContainer = styled.div`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
`;

export const TabButton = styled.button<TabButtonProps>`
  width: 48px;
  height: 48px;
  margin-top: 24px;

  background-color: #1360e2;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 28px;
    margin-left: 10px;
  }

  &:hover {
    background-color: ${darken(0.04, '#1360e2')};
  }

  ${props =>
    props.isSelected &&
    css`
      box-sizing: border-box;
      background-color: #f5f5f5;
      width: 88px;
      margin-left: 40px;
      border-radius: 12px 0 0 12px;

      img {
        filter: brightness(5%);
      }

      p {
        color: #333 !important;
      }

      &:hover {
        background-color: #f5f5f5;
      }
    `}
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
    justify-content: flex-start;

    display: flex;
    align-items: center;

    img {
      width: 26px;
      margin-left: 18px;
    }

    p {
      font-weight: 600;
      font-size: 24px;
    }

    &:hover {
      background-color: ${darken(0.04, '#bd1111')};
    }
  }
`;

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  width: 128px;

  z-index: 100;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  background-color: #072ac8;

  transition: 0.2s linear;

  img {
    object-fit: contain;
  }

  button {
    border: none;
    cursor: pointer;

    transition: 0.2s linear;
  }

  p {
    width: 0;
    overflow: hidden;
    color: #ffffff;

    transition: 0.2s linear;
  }

  ${props =>
    props.isExtended &&
    css`
      width: 256px;

      button {
        width: 176px;
        border-radius: 12px;
        margin-left: 0px;
      }

      p {
        width: 100%;
        letter-spacing: 0.08em;
      }

      ${LogoContainer} {
        img {
          height: 80px;
        }
      }

      ${ExtensionButton} {
        img {
          transform: rotate(180deg);
          margin-left: -5px;
        }
      }

      ${ExitContainer} {
        width: 100%;

        button {
          width: 192px;
        }
      }
    `}
`;
