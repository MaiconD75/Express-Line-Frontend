import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface AuthState {
  token: string;
  user: Record<string, string>;
}

interface loginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: Record<string, string>;
  login(credetials: loginCredentials): Promise<void>;
  logoff(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ExpressLine:token');
    const user = localStorage.getItem('@ExpressLine:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(
    async ({ email, password }) => {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@ExpressLine:token', token);
      localStorage.setItem('@ExpressLine:user', JSON.stringify(user));

      setData({ token, user });

      history.push('/deliveries');
    },
    [history],
  );

  const logoff = useCallback(() => {
    localStorage.removeItem('@ExpressLine:token');
    localStorage.removeItem('@ExpressLine:user');

    setData({} as AuthState);

    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logoff }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth must be used within and= AuthProvider');
  }

  return context;
}
