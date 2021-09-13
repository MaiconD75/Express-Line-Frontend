import styled from 'styled-components';
import Select from '.';

export const NormalSelect = styled(Select)`
  height: 48px;
  min-width: 96px;
  border-radius: 10px;
  box-sizing: border-box;

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

  &:focus-within {
    &:after {
      transition: transform 0s !important;
      content: '' !important;
      display: flex;

      height: 44px;
      width: 96px;
      border-radius: 10px;
      border: 2px solid #072ac8;

      position: absolute;
      top: 0;
      left: 0;
    }
  }

  select:focus {
    background-color: #fefefe;
  }
`;
