import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface AuthState {
  token: string;
  data: Record<string, string>;
}

interface loginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: AuthState;
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
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return { token, data: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  useEffect(() => {
    const token = localStorage.getItem('@ExpressLine:token');
    const user = localStorage.getItem('@ExpressLine:user');

    if (token && user) {
      setData({ token, data: JSON.parse(user) });
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, []);

  const login = useCallback(
    async ({ email, password }) => {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem('@ExpressLine:token', token);
      localStorage.setItem('@ExpressLine:user', JSON.stringify(user));

      setData({ token, data: user });

      history.push('/Deliveries');
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
    <AuthContext.Provider value={{ user: data, login, logoff }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth must be used within an AuthProvider');
  }

  return context;
}
