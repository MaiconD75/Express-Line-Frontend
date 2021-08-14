import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container, InputContainer, IconContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ icon, name, label, ...rest }) => {
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
    <Container>
      <p>{label}</p>
      {error && <p>error</p>}
      <InputContainer>
        <IconContainer>
          <img src={icon} alt={label} />
        </IconContainer>
        <input defaultValue={defaultValue} {...rest} ref={inputRef} />
      </InputContainer>
    </Container>
  );
};

export default Input;
