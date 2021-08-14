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
`;
