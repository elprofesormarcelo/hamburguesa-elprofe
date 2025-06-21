// components/Cabecera.jsx (Actualizada)
import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';

const Cabecera = () => {
  const { cartCount } = useCarrito();
  const { user, logout } = useAuth();

  return (
    <div className="bg-primary text-white text-center py-4 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="display-4 fw-bold mb-0">🍔 Tienda de Comida Rápida</h1>
        
        <div className="d-flex align-items-center gap-3">
          {/* Información del usuario */}
          <div className="d-flex align-items-center me-3">
            <i className="bi bi-person-circle fs-4 me-2"></i>
            <div className="text-start">
              <small className="d-block">Bienvenido,</small>
              <span className="fw-bold">{user?.name || 'Usuario'}</span>
            </div>
          </div>

          {/* Carrito */}
          <div className="d-flex align-items-center me-3">
            <i className="bi bi-cart3 fs-2 me-2"></i>
            <span className="badge bg-warning text-dark fs-5 rounded-pill">
              {cartCount}
            </span>
          </div>

          {/* Botón de Salir */}
          <button
            onClick={logout}
            className="btn btn-outline-light btn-sm"
            title="Cerrar sesión"
          >
            <i className="bi bi-box-arrow-right me-1"></i>
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cabecera;