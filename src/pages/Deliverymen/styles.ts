import { desaturate, transparentize, saturate } from 'polished';
import styled from 'styled-components';
import Input from '../../components/Input';

interface ImageContainerProps {
  nameColor: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const PageContainer = styled.div`
  width: calc(100% - 128px);
  margin-left: 128px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HeadContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 24px 0;
  padding: 0 70px;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;

  th:nth-child(1),
  td:nth-child(1) {
    max-width: 72px;
    margin-left: -20px;
  }

  th:nth-child(6),
  td:nth-child(6) {
    max-width: 128px;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: content-box;

  background-color: ${props =>
    transparentize(0.8, saturate(0.5, desaturate(0.5, props.nameColor)))};

  p {
    width: 56px;
    height: 56px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    text-justify: center;

    font: 400 32px Poppins, sans-serif;

    color: ${props => props.nameColor};
  }

  img {
    object-fit: cover;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const AddImageButton = styled.button`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;

  img {
    margin: auto;
  }

  p {
    height: 64px;
    width: 100%;

    padding: 0 64px;

    text-align: center;

    color: #fefefe;
    font-size: 20px;
    word-wrap: break-word;

    background-color: #072ac8;
  }
`;
