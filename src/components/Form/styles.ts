import styled from 'styled-components';
import { Form } from '@unform/web';
import { darken } from 'polished';

export const Container = styled.div``;

export const Unform = styled(Form)`
  display: flex;
  flex-direction: column;

  a {
    margin: 12px 0 32px;
  }

  button {
    height: 64px;

    border: none;
    border-radius: 10px;
    background: #072ac8;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

    color: #fefefe;
    font: 700 36px 'Roboto', sans-serif;
    transition: 0.2s linear;

    &:hover {
      background-color: ${darken(0.06, '#072ac8')};
      cursor: pointer;
    }
  }
`;
