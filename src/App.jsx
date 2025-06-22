// App.jsx (Implementación completa con CRUD de productos)
import { useState, useEffect } from 'react';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Cabecera from './components/Cabecera';
import ListaProducto from './components/ListaProducto';
import CarritoCompra from './components/CarritoCompra';
import AdminProductos from './components/AdminProductos';

function App() {
  // Estado para manejar la vista actual
  const [vistaActual, setVistaActual] = useState('tienda');
  
  // Estados para el manejo de productos
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Productos iniciales
  const productosIniciales = [
    { 
      id: 1, 
      name: 'Hamburguesa Clásica', 
      price: 10.99, 
      description: 'Deliciosa hamburguesa con carne jugosa, lechuga fresca, tomate y nuestra salsa especial.',
      img: 'https://viejodave.com.ar/wp-content/uploads/2024/02/hamburguesa-cheddar-panceta-lechuga-tomate-confitado-y-cebolla-crocante-carne-01.jpg' 
    },
    { 
      id: 2, 
      name: 'Papas Fritas Grandes', 
      price: 3.49, 
      description: 'Papas fritas doradas y crujientes, perfectas para acompañar tu comida favorita.',
      img: 'https://i.pinimg.com/736x/7b/cd/b9/7bcdb9cae057a91797aa580b4799d822.jpg' 
    },
    { 
      id: 3, 
      name: 'Refresco Cola', 
      price: 2.00, 
      description: 'Refrescante bebida cola bien fría, ideal para acompañar cualquier comida.',
      img: 'https://elrancherito.com.co/wp-content/uploads/2020/06/Gaseosa.png'
    },
    { 
      id: 4, 
      name: 'Ensalada César', 
      price: 8.50, 
      description: 'Ensalada fresca con lechuga, crutones, queso parmesano y aderezo césar tradicional.',
      img: 'https://elfornet.com/media/catalog/product/cache/728587fcd73f36684dd4a1c3c4b36cfb/e/n/ensalada_cesar_frontal.jpg' 
    },
  ];

  // Simular carga inicial de productos
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simular llamada a API
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simular posible error (descomenta para probar manejo de errores)
        // if (Math.random() > 0.8) {
        //   throw new Error('Error de conexión con el servidor');
        // }
        
        setProductos(productosIniciales);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError(err.message || 'Error al cargar los productos');
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  // Función para agregar nuevo producto
  const agregarProducto = async (nuevoProducto) => {
    try {
      setError(null);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simular posible error
      if (Math.random() > 0.9) {
        throw new Error('Error al guardar el producto en el servidor');
      }
      
      setProductos(prev => [...prev, nuevoProducto]);
      
      return { success: true };
    } catch (err) {
      console.error('Error al agregar producto:', err);
      setError(err.message || 'Error al agregar el producto');
      throw err; // Re-lanzar para que el componente pueda manejarlo
    }
  };

  // Función para editar producto existente
  const editarProducto = async (productoActualizado) => {
    try {
      setError(null);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simular posible error
      if (Math.random() > 0.9) {
        throw new Error('Error al actualizar el producto en el servidor');
      }
      
      setProductos(prev => 
        prev.map(producto => 
          producto.id === productoActualizado.id 
            ? productoActualizado 
            : producto
        )
      );
      
      return { success: true };
    } catch (err) {
      console.error('Error al editar producto:', err);
      setError(err.message || 'Error al actualizar el producto');
      throw err;
    }
  };

  // Función para eliminar producto
  const eliminarProducto = async (productoId) => {
    try {
      setError(null);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Simular posible error
      if (Math.random() > 0.95) {
        throw new Error('Error al eliminar el producto del servidor');
      }
      
      setProductos(prev => prev.filter(producto => producto.id !== productoId));
      
      return { success: true };
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      setError(err.message || 'Error al eliminar el producto');
      throw err;
    }
  };

  // Función para limpiar errores
  const limpiarError = () => {
    setError(null);
  };

  // Función para recargar datos
  const recargarDatos = async () => {
    setProductos([]);
    setError(null);
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProductos(productosIniciales);
    } catch (err) {
      setError('Error al recargar los datos');
    } finally {
      setLoading(false);
    }
  };

  // Componente de navegación con indicador de errores
  const Navegacion = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
      <div className="container">
        <span className="navbar-brand">
          <i className="bi bi-shop me-2"></i>
          Mi Tienda Online
          {error && (
            <span className="badge bg-danger ms-2" title="Hay errores en la aplicación">
              <i className="bi bi-exclamation-triangle"></i>
            </span>
          )}
        </span>
        <div className="navbar-nav ms-auto">
          <button
            className={`btn ${vistaActual === 'tienda' ? 'btn-primary' : 'btn-outline-light'} me-2`}
            onClick={() => setVistaActual('tienda')}
            disabled={loading}
          >
            <i className="bi bi-shop me-2"></i>
            Tienda
            <span className="badge bg-secondary ms-2">{productos.length}</span>
          </button>
          <button
            className={`btn ${vistaActual === 'admin' ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => setVistaActual('admin')}
            disabled={loading}
          >
            <i className="bi bi-gear-fill me-2"></i>
            Administración
          </button>
        </div>
      </div>
    </nav>
  );

  // Componente de error global con opción de reintento
  const ErrorGlobal = () => {
    if (!error) return null;

    return (
      <div className="container mb-4">
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <div className="d-flex align-items-center">
            <i className="bi bi-exclamation-triangle-fill me-3 fs-4"></i>
            <div className="flex-grow-1">
              <h5 className="alert-heading mb-1">¡Oops! Algo salió mal</h5>
              <p className="mb-2">{error}</p>
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-outline-danger btn-sm"
                  onClick={recargarDatos}
                >
                  <i className="bi bi-arrow-clockwise me-1"></i>
                  Reintentar
                </button>
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  onClick={limpiarError}
                >
                  <i className="bi bi-x-circle me-1"></i>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
          <button 
            type="button" 
            className="btn-close"
            onClick={limpiarError}
          ></button>
        </div>
      </div>
    );
  };

  // Componente de carga global
  const CargaGlobal = () => {
    if (!loading) return null;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center py-5">
                <div className="spinner-border text-primary mb-3" style={{width: '3rem', height: '3rem'}} role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <h4 className="text-muted mb-2">Cargando aplicación...</h4>
                <p className="text-muted mb-0">Por favor espera un momento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AuthProvider>
      <CarritoProvider>
        <ProtectedRoute>
          <div className="min-vh-100 bg-light">
            <Navegacion />
            <ErrorGlobal />
            
            {loading ? (
              <CargaGlobal />
            ) : (
              <>
                {vistaActual === 'tienda' ? (
                  // Vista de la tienda
                  <>
                    <Cabecera />
                    <div className="container">
                      <div className="row g-4">
                        <ListaProducto products={productos} />
                        <CarritoCompra />
                      </div>
                    </div>
                  </>
                ) : (
                  // Vista de administración
                  <AdminProductos 
                    productos={productos}
                    onAgregarProducto={agregarProducto}
                    onEditarProducto={editarProducto}
                    onEliminarProducto={eliminarProducto}
                    loading={loading}
                    error={error}
                    onLimpiarError={limpiarError}
                  />
                )}
              </>
            )}

            {/* Footer con información del estado */}
            <footer className="bg-dark text-light py-3 mt-5">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <small>
                      <i className="bi bi-info-circle me-1"></i>
                      Mi Tienda Online - Sistema de Gestión de Productos
                    </small>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <small className="text-muted">
                      {productos.length} producto{productos.length !== 1 ? 's' : ''} disponible{productos.length !== 1 ? 's' : ''}
                      {error && (
                        <span className="text-danger ms-2">
                          <i className="bi bi-exclamation-triangle"></i>
                          Error presente
                        </span>
                      )}
                    </small>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ProtectedRoute>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;