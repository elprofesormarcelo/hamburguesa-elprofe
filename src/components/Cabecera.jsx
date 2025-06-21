// components/Cabecera.js
import React from 'react';
import { useCarrito } from '../context/CarritoContext';


const Cabecera = () => {
  const { cartCount } = useCarrito();

  return (
    <div className="bg-primary text-white text-center py-4 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="display-4 fw-bold mb-0">🍔 Tienda de Comida Rápida</h1>
        <div className="d-flex align-items-center">
          <i className="bi bi-cart3 fs-2 me-2"></i>
          <span className="badge bg-warning text-dark fs-5 rounded-pill">
            {cartCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cabecera;