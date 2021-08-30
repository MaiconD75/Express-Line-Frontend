import { Select } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSelect = styled(Select)`
  height: 48px;
  min-width: 96px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

  background-color: #fefefe;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

  > div {
    box-sizing: content-box;
    padding: 0 24px;
  }

  &,
  > input {
    font: 500 20px Roboto, sans-serif !important;
    color: #333 !important;
  }

  align-self: flex-end;

  &:before,
  &:after {
    display: none;
  }

  > div:focus {
    background-color: #fefefe;

    &:before {
      content: '';

      height: 44px;
      width: 96px;
      border-radius: 10px;
      border: 2px solid #072ac8;

      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
