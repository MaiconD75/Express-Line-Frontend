import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  color,
  children,
  ...rest
}) => {
  return (
    <Button color={color} {...rest}>
      {children}
    </Button>
  );
};

export default ActionButton;
