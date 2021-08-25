import React, { createContext, useCallback, useState, useContext } from 'react';

interface ModalContextData {
  isClosed: boolean;
  toggleModalState(): void;
}

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData,
);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = useCallback(() => {
    setModalState(!modalState);
  }, [modalState]);

  return (
    <ModalContext.Provider
      value={{
        isClosed: modalState,
        toggleModalState,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('UseModal must be used within an UseModalProvider');
  }

  return context;
}
