import React from 'react';
import { AuthProvider } from './AuthContext';
import { DeliveriesProvider } from './DeliveriesContextx';
import { DeliverymenProvider } from './DeliverymenContextx';
import { OriginsProvider } from './OriginsContextx';
import { SideBarProvider } from './SideBarContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeliveriesProvider>
        <DeliverymenProvider>
          <OriginsProvider>
            <SideBarProvider>{children}</SideBarProvider>
          </OriginsProvider>
        </DeliverymenProvider>
      </DeliveriesProvider>
    </AuthProvider>
  );
};

export default AppProvider;
