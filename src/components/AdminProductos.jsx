// components/AdminProductos.jsx
import React, { useState } from 'react';
import FormularioProducto from './FormularioProducto';
import { useAuth } from '../context/AuthContext';

const AdminProductos = ({ productos, onAgregarProducto }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const { user } = useAuth();

  const handleAgregarProducto = (nuevoProducto) => {
    onAgregarProducto(nuevoProducto);
    setMostrarFormulario(false);
    setMensaje({
      tipo: 'success',
      texto: `¡Producto "${nuevoProducto.name}" agregado exitosamente!`
    });

    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      setMensaje(null);
    }, 5000);
  };

  const handleCancelar = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="container mt-4">
      {/* Header de administración */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h2 text-secondary">
            <i className="bi bi-gear-fill me-2"></i>
            Panel de Administración
          </h1>
          <p className="text-muted mb-0">
            Gestiona los productos de tu tienda, {user?.name}
          </p>
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          <i className={`bi ${mostrarFormulario ? 'bi-x-circle' : 'bi-plus-circle'} me-2`}></i>
          {mostrarFormulario ? 'Cerrar Formulario' : 'Nuevo Producto'}
        </button>
      </div>

      {/* Mensaje de confirmación */}
      {mensaje && (
        <div className={`alert alert-${mensaje.tipo} alert-dismissible fade show`} role="alert">
          <i className={`bi ${mensaje.tipo === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle'} me-2`}></i>
          {mensaje.texto}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setMensaje(null)}
          ></button>
        </div>
      )}

      {/* Formulario de agregar producto */}
      {mostrarFormulario && (
        <div className="mb-4">
          <FormularioProducto
            onAgregarProducto={handleAgregarProducto}
            onCancelar={handleCancelar}
          />
        </div>
      )}

      {/* Lista de productos existentes */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h3 className="card-title h4 mb-0 text-secondary">
            <i className="bi bi-list-ul me-2"></i>
            Productos Existentes ({productos.length})
          </h3>
        </div>
        <div className="card-body">
          {productos.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-inbox display-1 text-muted mb-3"></i>
              <p className="text-muted fs-5">No hay productos registrados</p>
              <p className="text-muted">¡Agrega tu primer producto!</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th scope="col">
                      <i className="bi bi-image me-1"></i>
                      Imagen
                    </th>
                    <th scope="col">
                      <i className="bi bi-tag me-1"></i>
                      Nombre
                    </th>
                    <th scope="col">
                      <i className="bi bi-currency-dollar me-1"></i>
                      Precio
                    </th>
                    <th scope="col">
                      <i className="bi bi-card-text me-1"></i>
                      Descripción
                    </th>
                    <th scope="col">
                      <i className="bi bi-calendar me-1"></i>
                      ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map(producto => (
                    <tr key={producto.id}>
                      <td>
                        <img 
                          src={producto.img} 
                          alt={producto.name}
                          className="img-thumbnail"
                          style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/60x60?text=Sin+Imagen';
                          }}
                        />
                      </td>
                      <td>
                        <strong>{producto.name}</strong>
                      </td>
                      <td>
                        <span className="badge bg-success fs-6">
                          ${producto.price.toFixed(2)}
                        </span>
                      </td>
                      <td>
                        <small className="text-muted">
                          {producto.description ? 
                            (producto.description.length > 50 ? 
                              producto.description.substring(0, 50) + '...' : 
                              producto.description
                            ) : 
                            'Sin descripción'
                          }
                        </small>
                      </td>
                      <td>
                        <code>{producto.id}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Estadísticas rápidas */}
      <div className="row g-3 mt-4">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="card-title">Total Productos</h4>
                  <h2 className="mb-0">{productos.length}</h2>
                </div>
                <div className="align-self-center">
                  <i className="bi bi-box-seam display-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="card-title">Precio Promedio</h4>
                  <h2 className="mb-0">
                    ${productos.length > 0 ? 
                      (productos.reduce((sum, p) => sum + p.price, 0) / productos.length).toFixed(2) : 
                      '0.00'
                    }
                  </h2>
                </div>
                <div className="align-self-center">
                  <i className="bi bi-currency-dollar display-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4 className="card-title">Producto Más Caro</h4>
                  <h2 className="mb-0">
                    ${productos.length > 0 ? 
                      Math.max(...productos.map(p => p.price)).toFixed(2) : 
                      '0.00'
                    }
                  </h2>
                </div>
                <div className="align-self-center">
                  <i className="bi bi-star-fill display-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductos;