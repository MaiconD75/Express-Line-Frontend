import React from 'react';
import { AuthProvider } from './AuthContext';
import { DeliveriesProvider } from './DeliveriesContextx';
import { SideBarProvider } from './SideBarContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeliveriesProvider>
        <SideBarProvider>{children}</SideBarProvider>
      </DeliveriesProvider>
    </AuthProvider>
  );
};

export default AppProvider;
