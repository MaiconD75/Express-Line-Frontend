import styled from 'styled-components';

export const Container = styled.thead`
  height: 40px;
  padding-bottom: auto;
  border-bottom: 2px solid #eee;
  margin-bottom: 32px;

  tr {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  select {
    width: fit-content;
    display: flex;
    margin-left: 8px;
    align-items: flex-start;
    border: none;
    background-color: #f5f5f5;
    font: 600 16px Poppins, sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
  }
`;
