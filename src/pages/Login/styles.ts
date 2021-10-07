import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Info = styled.div`
  background-color: #072ac8;
  width: 58vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  overflow: hidden;

  & > img {
    width: 75%;
    align-self: center;
  }

  div {
    width: 780px;
    margin: -64px auto 0 80px;

    p {
      font-size: 40px;
      color: #fff;
    }

    span {
      font-size: 24px;
      color: #ededed;
    }
  }
`;

export const MainContainer = styled.div`
  overflow-y: auto;
  width: 42vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;

  & > img {
    width: 10vw;
  }

  h1 {
    width: 12.5vw;
    margin-left: 12px;

    font-size: 3vw;
    font-weight: 600;
    letter-spacing: 8px;

    color: #072ac8;
  }
`;

export const LoginContainer = styled.div`
  margin-top: 100px;
  width: 60%;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;

  align-items: center;
  justify-content: space-between;

  & > div {
    height: 2px;
    width: 172px;
    background-color: #ffc600;
  }

  a {
    margin-top: 0;
  }
`;
