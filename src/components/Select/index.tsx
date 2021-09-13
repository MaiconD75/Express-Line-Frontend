import { FormControl, SelectProps } from '@material-ui/core';
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { ControlledForm, InputSelect, Option } from './styles';

interface SelectInputProps extends SelectProps {
  name: string;
  placeholder: string;
}

const Select: React.FC<SelectInputProps> = ({
  name,
  children,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <ControlledForm>
      <InputSelect
        inputRef={inputRef}
        defaultValue={defaultValue}
        error={!!error}
        native
        {...rest}
      >
        <Option disabled value="">
          {placeholder}
        </Option>
        {children}
      </InputSelect>
    </ControlledForm>
  );
};

export default Select;
