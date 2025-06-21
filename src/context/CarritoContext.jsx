// CarritoContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Definir tipos de acciones
const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INCREASE_QUANTITY: 'INCREASE_QUANTITY',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

// Estado inicial del carrito
const initialState = {
  items: [],
  total: 0
};

// Reducer para manejar las acciones del carrito
const carritoReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      } else {
        const updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems)
        };
      }
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case CART_ACTIONS.INCREASE_QUANTITY: {
      const updatedItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case CART_ACTIONS.DECREASE_QUANTITY: {
      const updatedItems = state.items.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0);
      
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems)
      };
    }

    case CART_ACTIONS.CLEAR_CART: {
      return initialState;
    }

    default:
      return state;
  }
};

// Función helper para calcular el total
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

// Crear el contexto
const CarritoContext = createContext();

// Provider del contexto
export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  // Acciones del carrito
  const agregarAlCarrito = (producto) => {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: producto });
  };

  const eliminarDelCarrito = (productoId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: productoId });
  };

  const aumentarCantidad = (productoId) => {
    dispatch({ type: CART_ACTIONS.INCREASE_QUANTITY, payload: productoId });
  };

  const disminuirCantidad = (productoId) => {
    dispatch({ type: CART_ACTIONS.DECREASE_QUANTITY, payload: productoId });
  };

  const vaciarCarrito = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      dispatch({ type: CART_ACTIONS.CLEAR_CART });
    }
  };

  const manejarPago = () => {
    alert('¡Gracias por tu compra! (Funcionalidad de pago no implementada)');
    // Aquí podrías implementar la lógica de pago real
    // dispatch({ type: CART_ACTIONS.CLEAR_CART }); // Vaciar después del pago
  };

  // Valores que se pasarán a los componentes
  const value = {
    // Estado
    cartItems: state.items,
    total: state.total.toFixed(2),
    cartCount: state.items.length,
    
    // Acciones
    agregarAlCarrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    vaciarCarrito,
    manejarPago
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context){
    throw new Error('useCarrito debe ser usado dentro de un CarritoProvider');
  }
  return context;
};
