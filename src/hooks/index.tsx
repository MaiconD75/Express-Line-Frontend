import React from 'react';
import { AuthProvider } from './AuthContext';
import { DeliveriesProvider } from './DeliveriesContextx';
import { DeliverymenProvider } from './DeliverymenContextx';
import { SideBarProvider } from './SideBarContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeliverymenProvider>
        <DeliveriesProvider>
          <SideBarProvider>{children}</SideBarProvider>
        </DeliveriesProvider>
      </DeliverymenProvider>
    </AuthProvider>
  );
};

export default AppProvider;
