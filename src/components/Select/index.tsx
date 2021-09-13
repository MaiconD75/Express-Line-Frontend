import { SelectProps } from '@material-ui/core';
import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { ControlledForm, InputSelect, Option } from './styles';

interface EventData {
  name?: string | undefined;
  value: unknown;
}

interface SelectInputProps extends SelectProps {
  name: string;
  placeholder: string;
  handleOnChange?(e: React.ChangeEvent<EventData>): void;
}

const Select: React.FC<SelectInputProps> = ({
  name,
  children,
  placeholder,
  handleOnChange,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
      <input readOnly defaultValue={defaultValue} hidden ref={inputRef} />
      <InputSelect
        onChange={e => {
          if (inputRef.current) {
            inputRef.current.value = `${e.target.value}`;
          }

          handleOnChange && handleOnChange(e);
        }}
        defaultValue={defaultValue}
        {...rest}
      >
        <Option value="">
          <em>{placeholder}</em>
        </Option>
        {children}
      </InputSelect>
    </ControlledForm>
  );
};

export default Select;
