import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

export interface DeliverymanData {
  avatar: string;
  name: string;
  email: string;
  id: string;
}

interface DeliverymenContextData {
  deliverymen: DeliverymanData[];
  getAllDeliverymen(): Promise<void>;
}

export const DeliverymenContext = createContext<DeliverymenContextData>(
  {} as DeliverymenContextData,
);

export const DeliverymenProvider: React.FC = ({ children }) => {
  const [deliverymen, setDeliverymen] = useState([] as DeliverymanData[]);
  const { user } = useAuth();

  const getAllDeliverymen = useCallback(async () => {
    const response = await api.get('/deliverymen', {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    setDeliverymen(response.data);
  }, [setDeliverymen, user.token]);

  return (
    <DeliverymenContext.Provider value={{ getAllDeliverymen, deliverymen }}>
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
