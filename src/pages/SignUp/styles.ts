import styled from 'styled-components';

export const Container = styled.div`
  background-color: #072ac8;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  & > div {
    width: 800px;
    height: 100vh;
    padding: 100px 192px 0;

    display: flex;
    flex-direction: column;

    background-color: #fefefe;
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.3);
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;

    img {
      height: 12px;
      margin-right: 8px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;

  img {
    object-fit: contain;
    width: 160px;
  }

  h1 {
    width: 224px;
    font-size: 48px;
    font-weight: 600;
    color: #072ac8;
  }
`;
