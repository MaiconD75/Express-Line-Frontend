import React from 'react';

import { LinkProps } from 'react-router-dom';

import { StyledLink } from './styles';

const Link: React.FC<LinkProps> = ({ children, ...rest }) => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default Link;
