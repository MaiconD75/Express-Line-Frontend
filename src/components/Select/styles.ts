import { Select, FormControl, MenuItem } from '@material-ui/core';
import styled from 'styled-components';

export const ControlledForm = styled(FormControl)`
  flex-direction: row !important;
  min-width: auto !important;
`;

export const InputSelect = styled(Select)`
  font: 20px 'Roboto', sans-serif;
  color: #333 !important;
`;

export const Option = styled(MenuItem)`
  font: 20px 'Roboto', sans-serif !important;
`;
