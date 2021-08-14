import { darken } from 'polished';
import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 64px;

  border: none;
  border-radius: 10px;
  background: #072ac8;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

  color: #fefefe;
  font: 600 32px 'Roboto', sans-serif;
  transition: 0.2s linear;

  &:hover {
    background-color: ${darken(0.06, '#072ac8')};
    cursor: pointer;
  }
`;
