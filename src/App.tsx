import React from 'react';

import Login from './pages/Login';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignUp />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
