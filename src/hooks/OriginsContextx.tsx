import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

export interface OriginData {
  id: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
}

interface OriginsContextData {
  origins: OriginData[];
  getAllOrigins(): Promise<void>;
}

export const OriginsContext = createContext<OriginsContextData>(
  {} as OriginsContextData,
);

export const OriginsProvider: React.FC = ({ children }) => {
  const [origins, setOrigins] = useState([] as OriginData[]);
  const { user } = useAuth();

  const getAllOrigins = useCallback(async () => {
    const response = await api.get('/Origins', {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    setOrigins(response.data);
  }, [setOrigins, user.token]);

  return (
    <OriginsContext.Provider value={{ getAllOrigins, origins }}>
      {children}
    </OriginsContext.Provider>
  );
};

export function useOrigins(): OriginsContextData {
  const context = useContext(OriginsContext);

  if (!context) {
    throw new Error('Use Origins must be used within an OriginsProvider');
  }

  return context;
}
