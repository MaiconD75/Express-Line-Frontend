import React from 'react';

import Login from './pages/Login';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
