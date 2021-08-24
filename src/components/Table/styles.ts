import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  height: 100%;
  padding: 0 70px;
  overflow-y: scroll;

  thead,
  tbody {
    display: flex;
    flex-direction: row;
    padding: 0 36px;
  }

  th,
  td {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;

    & > p {
      width: 95%;
      overflow-x: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }

    & > canvas {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-left: 8px;

      background-color: #ffc600;
    }
  }
`;