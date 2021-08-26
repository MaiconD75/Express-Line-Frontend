import React from 'react';
import { AuthProvider } from './AuthContext';
import { DeliverymenProvider } from './DeliverymenContextx';
import { OriginsProvider } from './OriginsContextx';
import { RecipientsProvider } from './RecipientsContextx';
import { SideBarProvider } from './SideBarContext';
import { ModalProvider } from './ModalContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeliverymenProvider>
        <OriginsProvider>
          <RecipientsProvider>
            <ModalProvider>
              <SideBarProvider>{children}</SideBarProvider>
            </ModalProvider>
          </RecipientsProvider>
        </OriginsProvider>
      </DeliverymenProvider>
    </AuthProvider>
  );
};

export default AppProvider;
