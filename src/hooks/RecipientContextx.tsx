import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

export interface RecipientData {
  id: string;
  name: string;
  city: string;
  complement: string;
  number: number;
  state: string;
  street: string;
  zip_code: string;
}

interface RecipientsContextData {
  recipients: RecipientData[];
  getAllRecipients(): Promise<void>;
}

export const RecipientsContext = createContext<RecipientsContextData>(
  {} as RecipientsContextData,
);

export const RecipientsProvider: React.FC = ({ children }) => {
  const [recipients, setRecipients] = useState([] as RecipientData[]);
  const { user } = useAuth();

  const getAllRecipients = useCallback(async () => {
    const response = await api.get('/Recipients', {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    setRecipients(response.data);
  }, [setRecipients, user.token]);

  return (
    <RecipientsContext.Provider value={{ getAllRecipients, recipients }}>
      {children}
    </RecipientsContext.Provider>
  );
};

export function useRecipients(): RecipientsContextData {
  const context = useContext(RecipientsContext);

  if (!context) {
    throw new Error('UseRecipients must be used within an RecipientsProvider');
  }

  return context;
}
