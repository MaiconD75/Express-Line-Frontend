import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  form {
    width: 24vw;
    height: 48px;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;

    & > div {
      width: 100%;
    }

    div {
      margin: 0;
      border-radius: 12px 0 0 12px;
      height: 100%;
    }
  }
`;

export const SearchButton = styled(Button)`
  min-width: 48px;
  height: 48px;
  margin: 0 !important;
  border-radius: 0 12px 12px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    object-fit: contain;
  }
`;
