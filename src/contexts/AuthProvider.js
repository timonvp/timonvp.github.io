import { createContext, useMemo, useState, useCallback, useEffect, useContext } from 'react';
import * as userApi from '../api/user';
import config from '../config.json';

const JWT_TOKEN_KEY = config.token_key;
const AuthContext = createContext();

function parseJwt(token) {
  if (!token) return {};
  const base64Url = token.split('.')[1];
  const payload = Buffer.from(base64Url, 'base64');
  const jsonPayload = payload.toString('ascii');
  return JSON.parse(jsonPayload);
}

function parseExp(exp) {
  if (!exp) return null;
  if (typeof exp !== 'number') exp = Number(exp);
  if (isNaN(exp)) return null;
  return new Date(exp * 1000);
}

const useAuth = () => useContext(AuthContext);

export const useSession = () => {
  const { token, user, ready, loading, error, hasRole } = useAuth();
  return {
    token,
    user,
    ready,
    error,
    loading,
    isAuthed: Boolean(token),
    hasRole,
  };
};

export const useLogin = () => {
  const { login } = useAuth();
  return login;
};

export const useLogout = () => {
  const { logout } = useAuth();
  return logout;
};

export const useRegister = () => {
  const { register } = useAuth();
  return register;
};

export const AuthProvider = ({
  children,
}) => {
  // will be false until the token is set
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem(JWT_TOKEN_KEY));
  const [user, setUser] = useState(null);

  const setSession = useCallback(async (token, user) => {
    const { exp, userId } = parseJwt(token);
    const expiry = parseExp(exp);
    const stillValid = expiry >= new Date();

    if (stillValid) {
      localStorage.setItem(JWT_TOKEN_KEY, token);
    } else {
      localStorage.removeItem(JWT_TOKEN_KEY);
      token = null;
    }

    //api.setAuthToken(token);
    setToken(token);
    setReady(token && stillValid);

    if (!user && stillValid) {
      //user = await userApi.getUserById(userId);
    }
    setUser(user);
  }, []);

  useEffect(() => {
    setSession(token);
  }, [token, setSession]);

  const login = useCallback(async (username, password) => {
    try {
      setLoading(true);
      setError(null);
      const { token, user } = await userApi.login(username, password);
      await setSession(token, user);
      return true;
    } catch (error) {
      console.error(error);
      setError('Login failed, try again');
      return false;
    } finally {
      setLoading(false);
    }
  }, [setSession]);

  const register = useCallback(async (data) => {
    try {
      setLoading(true);
      setError(null);
      //const { token, user } = await userApi.register(data);
      //await setSession(token, user);
      return true;
    } catch (error) {
      setError(error);
      return false;
    } finally {
      setLoading(false);
    }
  }, [setSession]);

  const logout = useCallback(() => {
    setSession(null, null);
  }, [setSession]);

  const hasRole = useCallback((role) => {
    if (!user) return false;
    return user.roles.includes(role);
  }, [user]);

  const value = useMemo(() => ({
    token,
    user,
    ready,
    loading,
    error,
    login,
    logout,
    register,
    hasRole,
  }), [token, user, ready, loading, error, login, logout, register, hasRole]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};