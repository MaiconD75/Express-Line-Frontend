import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  span {
    z-index: 2;
    width: 176px;
    padding: 4px 8px;
    background-color: #fefefe;
    border-radius: 4px;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
    text-align: center;
    justify-content: center;
    position: absolute;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    bottom: calc(100% + 16px);
    left: 50%;
    transform: translateX(-50%);

    &::after {
      content: '';
      border-style: solid;
      border-width: 8px 8px 0 8px;
      border-color: #fefefe transparent;

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      visibility: visible;

      opacity: 100%;
    }
  }
`;
