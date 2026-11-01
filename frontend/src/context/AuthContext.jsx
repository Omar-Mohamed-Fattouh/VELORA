import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import apiRequest from '../services/api.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const result = await apiRequest('/auth/me', { timeout: 2500 });
        setUser(result.data?.user || null);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (payload) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    setUser(data.data.user);
    return data;
  };

  const register = async (payload) => {
    const data = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    setUser(data.data.user);
    return data;
  };

  const logout = async () => {
    await apiRequest('/auth/logout', { method: 'POST' });
    setUser(null);
  };

  const value = useMemo(() => ({ user, loading, login, register, logout, setUser }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
