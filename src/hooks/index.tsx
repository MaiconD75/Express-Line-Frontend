import React from 'react';
import { AuthProvider } from './AuthContext';
import { SideBarProvider } from './SideBarContext';
import { ModalProvider } from './ModalContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <SideBarProvider>{children}</SideBarProvider>
      </ModalProvider>
    </AuthProvider>
  );
};

export default AppProvider;
