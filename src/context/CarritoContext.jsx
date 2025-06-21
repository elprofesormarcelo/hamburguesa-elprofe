// context/CarritoContext.jsx (Actualizado con verificación de autenticación)
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CarritoContext = createContext();

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de CarritoProvider');
  }
  return context;
};

export const CarritoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user, isAuthenticated } = useAuth();

  // Cargar carrito del localStorage cuando el usuario se autentica
  useEffect(() => {
    if (isAuthenticated() && user) {
      const savedCart = localStorage.getItem(`cart_${user.id}`);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } else {
      // Si no está autenticado, limpiar el carrito
      setCartItems([]);
    }
  }, [user, isAuthenticated]);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (isAuthenticated() && user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user, isAuthenticated]);

  const agregarAlCarrito = (product) => {
    if (!isAuthenticated()) {
      alert('Debes iniciar sesión para agregar productos al carrito');
      return;
    }

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const aumentarCantidad = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const vaciarCarrito = () => {
    setCartItems([]);
  };

  const manejarPago = () => {
    if (cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    
    alert(`¡Gracias por tu compra, ${user?.name}! Total: $${total}`);
    vaciarCarrito();
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  const value = {
    cartItems,
    agregarAlCarrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito,
    manejarPago,
    cartCount,
    total
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};