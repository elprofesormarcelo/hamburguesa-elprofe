// App.jsx (Actualizado con administración de productos)
import { useState } from 'react';
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Cabecera from './components/Cabecera';
import ListaProducto from './components/ListaProducto';
import CarritoCompra from './components/CarritoCompra';
import AdminProductos from './components/AdminProductos';

function App() {
  // Estado para manejar la vista actual
  const [vistaActual, setVistaActual] = useState('tienda'); // 'tienda' o 'admin'

  // Estado para los productos (ahora manejado en el componente principal)
  const [productos, setProductos] = useState([
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
  ]);

  // Función para agregar nuevo producto
  const agregarProducto = (nuevoProducto) => {
    setProductos(prev => [...prev, nuevoProducto]);
  };

  // Componente de navegación actualizado
  const Navegacion = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
      <div className="container">
        <span className="navbar-brand">
          <i className="bi bi-shop me-2"></i>
          Mi Tienda Online
        </span>
        <div className="navbar-nav ms-auto">
          <button
            className={`btn ${vistaActual === 'tienda' ? 'btn-primary' : 'btn-outline-light'} me-2`}
            onClick={() => setVistaActual('tienda')}
          >
            <i className="bi bi-shop me-2"></i>
            Tienda
          </button>
          <button
            className={`btn ${vistaActual === 'admin' ? 'btn-primary' : 'btn-outline-light'}`}
            onClick={() => setVistaActual('admin')}
          >
            <i className="bi bi-gear-fill me-2"></i>
            Administración
          </button>
        </div>
      </div>
    </nav>
  );

  return (
    <AuthProvider>
      <CarritoProvider>
        <ProtectedRoute>
          <div className="min-vh-100 bg-light">
            <Navegacion />
            
            {vistaActual === 'tienda' ? (
              // Vista de la tienda (componente original)
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
              />
            )}
          </div>
        </ProtectedRoute>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;