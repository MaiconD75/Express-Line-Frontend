import React, { useCallback, useRef } from 'react';
import { FormHandles, FormProps } from '@unform/core';
import * as Yup from 'yup';

import axios from 'axios';
import toast from 'react-hot-toast';
import { Container, Unform } from './styles';

interface NewFormProps extends Omit<FormProps, 'onSubmit'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(data: any): Promise<void>;
}

const Form: React.FC<NewFormProps> = ({
  children,
  onSubmit,
  initialData,
  id,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (data: any): Promise<void> => {
      try {
        await onSubmit(data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          toast.error(err.response?.data.message);
        }

        if (err instanceof Yup.ValidationError) {
          const errorMessages = {} as Record<string, string>;

          err.inner.forEach(error => {
            errorMessages[`${error.path}`] = error.message;
          });

          formRef.current?.setErrors(errorMessages);
        }
      }
    },
    [onSubmit],
  );

  return (
    <Container>
      <Unform
        ref={formRef}
        id={id}
        initialData={initialData}
        onSubmit={data => handleSubmit(data)}
      >
        {children}
      </Unform>
    </Container>
  );
};

export default Form;
