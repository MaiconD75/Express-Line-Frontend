import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  color,
  children,
  ...rest
}) => {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default ActionButton;
