// components/CarritoVacio.js
import React from 'react'

const CarritoVacio = () => {
  return (
    <div className="text-center py-5">
      <i className="bi bi-cart-x display-1 text-muted mb-3"></i>
      <p className="text-muted fs-5">El carrito está vacío</p>
      <p className="text-muted">¡Agrega algunos productos deliciosos!</p>
    </div>
  );
};

export default CarritoVacio;