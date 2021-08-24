import { darken, lighten } from 'polished';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

export const Button = styled.button<ButtonProps>`
  width: 48px;
  height: 48px;

  border-radius: 8px;
  border: none;
  margin-left: 12px;

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
