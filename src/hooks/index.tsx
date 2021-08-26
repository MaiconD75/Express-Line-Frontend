import React from 'react';
import { AuthProvider } from './AuthContext';
import { DeliveriesProvider } from './DeliveriesContextx';
import { DeliverymenProvider } from './DeliverymenContextx';
import { OriginsProvider } from './OriginsContextx';
import { RecipientsProvider } from './RecipientContextx';
import { SideBarProvider } from './SideBarContext';
import { ModalProvider } from './ModalContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeliveriesProvider>
        <DeliverymenProvider>
          <OriginsProvider>
            <RecipientsProvider>
              <ModalProvider>
                <SideBarProvider>{children}</SideBarProvider>
              </ModalProvider>
            </RecipientsProvider>
          </OriginsProvider>
        </DeliverymenProvider>
      </DeliveriesProvider>
    </AuthProvider>
  );
};

export default AppProvider;
