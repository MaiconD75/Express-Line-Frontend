import { FiChevronDown } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import styled, { css } from 'styled-components';

interface sortIconProps extends IconType {
  sortType: number;
}

export const Container = styled.thead`
  height: 40px;
  padding-bottom: auto;
  border-bottom: 2px solid #eee;
  margin-bottom: 32px;
  color: #7f7f7f;

  tr {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  th {
    button {
      display: flex;
      align-items: center;
      font: 700 16px 'Poppins', sans-serif;
      color: #7f7f7f;

      background: none;
      border: none;

      cursor: pointer;
    }
  }

  p {
    font-weight: 700;
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
    color: #7f7f7f;
    outline: none;
  }
`;

export const SortIcon = styled(FiChevronDown)<sortIconProps>`
  color: #7f7f7f;
  font-size: 20px;

  ${props =>
    props.sortType === 0 &&
    css`
      display: none;
    `}
  ${props =>
    props.sortType === 2 &&
    css`
      transform: rotate(180deg);
    `};
`;
