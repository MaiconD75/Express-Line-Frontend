import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

interface DeliverymenData {
  avatar: string;
  name: string;
  email: string;
  id: string;
}

interface OriginsData {
  id: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
}

interface RecipientsData {
  id: string;
  name: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
}

export interface DeliveriesData {
  id: string;
  product: string;
  signature: string;
  start_date: string;
  end_date: string;
  canceled_at: string;
  deliveryman: DeliverymenData;
  recipient: RecipientsData;
  origin: OriginsData;
}

interface DeliveriesContextData {
  deliveries: DeliveriesData[];
  getAllDeliveires(): Promise<void>;
}

export const DeliveriesContext = createContext<DeliveriesContextData>(
  {} as DeliveriesContextData,
);

export const DeliveriesProvider: React.FC = ({ children }) => {
  const [deliveries, setDeliveries] = useState([] as DeliveriesData[]);
  const { user } = useAuth();

  const getAllDeliveires = useCallback(async () => {
    const response = await api.get('/deliveries', {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    setDeliveries(response.data);
  }, [setDeliveries, user.token]);

  return (
    <DeliveriesContext.Provider value={{ getAllDeliveires, deliveries }}>
      {children}
    </DeliveriesContext.Provider>
  );
};

export function useDeliveries(): DeliveriesContextData {
  const context = useContext(DeliveriesContext);

  if (!context) {
    throw new Error(
      'UseDeliveries must be used within and= DeliveriesProvider',
    );
  }

  return context;
}
