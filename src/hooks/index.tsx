import React from 'react';
import { AuthProvider } from './AuthContext';
import { DeliveriesProvider } from './DeliveriesContextx';
import { DeliverymenProvider } from './DeliverymenContextx';
import { OriginsProvider } from './OriginsContextx';
import { RecipientsProvider } from './RecipientContextx';
import { SideBarProvider } from './SideBarContext';
import { FormModalProvider } from './FormModalContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeliveriesProvider>
        <DeliverymenProvider>
          <OriginsProvider>
            <RecipientsProvider>
              <FormModalProvider>
                <SideBarProvider>{children}</SideBarProvider>
              </FormModalProvider>
            </RecipientsProvider>
          </OriginsProvider>
        </DeliverymenProvider>
      </DeliveriesProvider>
    </AuthProvider>
  );
};

export default AppProvider;
