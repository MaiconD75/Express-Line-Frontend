import styled from 'styled-components';

export const Container = styled.tbody`
  height: 72px;
  width: 100%;

  tr {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  background-color: #fefefe;
  display: flex;
  align-items: center;
  margin-top: 16px;

  border-radius: 16px;

  td {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
