import styled from 'styled-components';

export const Container = styled.div`
  p {
    font: 20px 'Roboto', sans-serif;
    color: #333;
    margin-top: 32px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  margin: 12px 0 0;

  background: #fefefe;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;

  position: relative;

  &:focus-within:after {
    content: '';
    width: 100%;
    height: 48px;
    position: absolute;
    top: -2px;
    left: -2px;

    background-color: transparent;
    border: 2px solid #072ac8;
    border-radius: 10px;
  }

  input {
    border: none;
    background-color: transparent;
    height: 100%;
    width: 100%;
    padding: 0 24px;
    outline: none;
    font: 20px 'Roboto', sans-serif;
    color: #333;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const IconContainer = styled.div`
  height: calc(100% - 16px);
  width: 48px;
  border-right: 2px solid #ccc;
  padding: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: contain;
    max-width: 40%;
    height: auto;
  }
`;
