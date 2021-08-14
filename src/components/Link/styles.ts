import { darken } from 'polished';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  margin-top: 12px;

  text-decoration: none;
  font-size: 16px;
  color: #072ac8;
  transition: 0.2s linear;

  &:hover {
    color: ${darken(0.1, '#072ac8')};
  }
`;
