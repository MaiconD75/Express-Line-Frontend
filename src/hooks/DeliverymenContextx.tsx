import React, { createContext, useCallback, useState, useContext } from 'react';

export interface DeliverymanData {
  avatar: string;
  name: string;
  email: string;
  id: string;
}

interface DeliverymenContextData {
  deliverymen: DeliverymanData[];
  setAllDeliverymen(allDeliverymen: DeliverymanData[]): void;
}

export const DeliverymenContext = createContext<DeliverymenContextData>(
  {} as DeliverymenContextData,
);

export const DeliverymenProvider: React.FC = ({ children }) => {
  const [deliverymen, setDeliverymen] = useState([] as DeliverymanData[]);

  const setAllDeliverymen = useCallback(
    allDeliverymen => {
      setDeliverymen(allDeliverymen);
    },
    [setDeliverymen],
  );

  return (
    <DeliverymenContext.Provider value={{ setAllDeliverymen, deliverymen }}>
      {children}
    </DeliverymenContext.Provider>
  );
};

export function useDeliverymen(): DeliverymenContextData {
  const context = useContext(DeliverymenContext);

  if (!context) {
    throw new Error(
      'UseDeliverymen must be used within an DeliverymenProvider',
    );
  }

  return context;
}
