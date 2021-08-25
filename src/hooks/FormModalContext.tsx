import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from './AuthContext';

interface FormModalContextData {
  isClosed: boolean;
  toEditData: Record<string, string>;
  toggleModalState<T>(initialData: T): void;
  setFunction<T>(
    initialData: Record<string, string>,
    newData: T,
    entity?: string,
  ): Promise<void>;
}

export const FormModalContext = createContext<FormModalContextData>(
  {} as FormModalContextData,
);

export const FormModalProvider: React.FC = ({ children }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [toEditData, setToEditData] = useState<Record<string, string>>({});
  const { user } = useAuth();
  const history = useHistory();

  const toggleModalState = useCallback(
    initialData => {
      setToEditData(initialData);
      setIsClosed(!isClosed);
    },
    [isClosed],
  );

  const setFunction = useCallback(
    async (initialData, newData, entity) => {
      initialData.id
        ? await api.put(`/${entity}/${initialData.id}`, newData, {
            headers: { Authorization: `Bearer ${user.token}` },
          })
        : await api.post(`/${entity}`, newData, {
            headers: { Authorization: `Bearer ${user.token}` },
          });

      toggleModalState({});
      history.go(0);
    },
    [user.token, toggleModalState, history],
  );

  return (
    <FormModalContext.Provider
      value={{
        isClosed,
        toEditData,
        toggleModalState,
        setFunction,
      }}
    >
      {children}
    </FormModalContext.Provider>
  );
};

export function useFormModal(): FormModalContextData {
  const context = useContext(FormModalContext);

  if (!context) {
    throw new Error('UseFormModal must be used within an UseFormModalProvider');
  }

  return context;
}
