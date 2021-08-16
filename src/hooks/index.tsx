import React from 'react';
import { AuthProvider } from './AuthContext';
import { SideBarProvider } from './SidebarContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <SideBarProvider>{children}</SideBarProvider>
    </AuthProvider>
  );
};

export default AppProvider;
