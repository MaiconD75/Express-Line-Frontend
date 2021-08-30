import React from 'react';

import { SelectProps } from '@material-ui/core';

import { StyledSelect } from './styles';

const Select: React.FC<SelectProps> = ({ children, ...rest }) => {
  return <StyledSelect {...rest}>{children}</StyledSelect>;
};

export default Select;
