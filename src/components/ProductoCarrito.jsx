// components/ProductoCarrito.jsx
import React from 'react';
import { useCarrito } from '../context/CarritoContext';



const ProductoCarrito = ({ product }) => {
  const { agregarAlCarrito } = useCarrito();

  return (
    <div className="col-sm-6 col-lg-4">
      <div className="card h-100 border-light shadow-sm">
        <div className="card-body d-flex flex-column text-center">
          <img 
            src={product.img} 
            alt={product.name}
            className="img-fluid rounded mb-3"
            style={{ height: '150px', objectFit: 'cover' }}
          />
          <h5 className="card-title text-dark">{product.name}</h5>
          <p className="card-text fs-4 fw-bold text-success mb-3">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => agregarAlCarrito(product)}
            className="btn btn-primary btn-lg mt-auto fw-bold"
          >
            <i className="bi bi-cart-plus me-2"></i>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoCarrito;