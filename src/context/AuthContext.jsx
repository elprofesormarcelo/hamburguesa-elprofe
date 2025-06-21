// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verifica si hay un usuario guardado al cargar la aplicación
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Login simulado - en producción esto sería una llamada a API
    const usuarios = [
      { id: 1, email: 'administrador@tienda.com', password: 'admin123', name: 'Administrador' },
      { id: 2, email: 'usuario@tienda.com', password: 'test123', name: 'Usuario Test' },
      { id: 3, email: 'demo@tienda.com', password: 'demo', name: 'Usuario Demo' }
    ];

    const usuario = usuarios.find(u => u.email === email && u.password === password);
    
    if (usuario) {
      const userData = { id: usuario.id, email: usuario.email, name: usuario.name };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true, user: userData };
    } else {
      return { success: false, error: 'Credenciales incorrectas' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};