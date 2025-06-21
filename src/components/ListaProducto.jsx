import React from 'react';
import ProductoCarrito from './ProductoCarrito';

const ListaProducto = ({ products, onAddToCart }) => {
  return (
    <div className="col-lg-8">
      <div className="card shadow-sm h-100">
        <div className="card-header bg-white">
          <h2 className="card-title h4 mb-0 text-secondary">
            <i className="bi bi-bag me-2"></i>Productos Disponibles
          </h2>
        </div>
        <div className="card-body">
          <div className="row g-3">
            {products.map(product => (
              <ProductoCarrito 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaProducto;