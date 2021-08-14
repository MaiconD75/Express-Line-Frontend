import { darken } from 'polished';
import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div``;

export const Unform = styled(Form)`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 32px;
  }

  a {
    margin-top: 12px;

    text-decoration: none;
    font-size: 16px;
    color: #072ac8;
    transition: 0.2s linear;

    &:hover {
      color: ${darken(0.1, '#072ac8')};
    }
  }
`;
