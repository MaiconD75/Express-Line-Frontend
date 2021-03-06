import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { Container, InputContainer, IconContainer, Errors } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  name,
  label,
  hidden,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container hidden={hidden}>
      {label && <p>{label}</p>}
      <InputContainer error={error}>
        {icon && (
          <IconContainer>
            <img src={icon} alt={label} />
          </IconContainer>
        )}
        <input defaultValue={defaultValue} {...rest} ref={inputRef} />
        {error && (
          <Errors title={error}>
            <FiAlertCircle color="#bd1111" />
          </Errors>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
