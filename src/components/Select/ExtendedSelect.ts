import styled from 'styled-components';
import Select from '.';

export const OptionsSelectContainer = styled.div`
  height: 520px;
  width: 300px;
  min-width: 96px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  background-color: #fefefe;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);

  &:focus-within {
    &:before {
      content: '';
      z-index: 2;

      height: 516px;
      width: 296px;
      border-radius: 10px;
      border: 2px solid #072ac8;

      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const ExtendedSelect = styled(Select).attrs(() => ({
  displayEmpty: true,
}))`
  height: 48px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;

  border-bottom: 2px solid #eee;

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
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 8px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    & + div {
      margin-top: 32px;
    }

    span {
      font: 400 20px Roboto, sans-serif;
      color: #7f7f7f;

      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
`;
