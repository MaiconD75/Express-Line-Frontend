import React from 'react';
import { AuthProvider } from './AuthContext';
import { DeliveriesProvider } from './DeliveriesContextx';
import { DeliverymenProvider } from './DeliverymenContextx';
import { OriginsProvider } from './OriginsContextx';
import { RecipientsProvider } from './RecipientContextx';
import { SideBarProvider } from './SideBarContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeliveriesProvider>
        <DeliverymenProvider>
          <OriginsProvider>
            <RecipientsProvider>
              <SideBarProvider>{children}</SideBarProvider>
            </RecipientsProvider>
          </OriginsProvider>
        </DeliverymenProvider>
      </DeliveriesProvider>
    </AuthProvider>
  );
};

export default AppProvider;
