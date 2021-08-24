import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

import { useAuth } from './AuthContext';
import { DeliverymanData } from './DeliverymenContextx';
import { OriginData } from './OriginsContextx';

interface RecipientData {
  id: string;
  name: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
}

export interface DeliveryData {
  id: string;
  product: string;
  signature: string;
  start_date: string;
  end_date: string;
  canceled_at: string;
  deliveryman: DeliverymanData;
  recipient: RecipientData;
  origin: OriginData;
}

interface DeliveriesContextData {
  deliveries: DeliveryData[];
  getAllDeliveries(): Promise<void>;
}

export const DeliveriesContext = createContext<DeliveriesContextData>(
  {} as DeliveriesContextData,
);

export const DeliveriesProvider: React.FC = ({ children }) => {
  const [deliveries, setDeliveries] = useState([] as DeliveryData[]);
  const { user } = useAuth();

  const getAllDeliveries = useCallback(async () => {
    const response = await api.get('/deliveries', {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    setDeliveries(response.data);
  }, [setDeliveries, user.token]);

  return (
    <DeliveriesContext.Provider value={{ getAllDeliveries, deliveries }}>
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
