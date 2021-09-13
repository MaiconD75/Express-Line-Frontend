import { Select, FormControl } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const ControlledForm = styled(FormControl)`
  flex-direction: row !important;
  min-width: auto !important;
`;

export const InputSelect = styled(Select)`
  font: 20px 'Roboto', sans-serif;
  padding: 0 8px;
  color: #333 !important;
`;

export const Option = styled.option`
  color: #333;

  ${props =>
    props.disabled &&
    css`
      color: #ccc !important;
    `}
`;
