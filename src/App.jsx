// App.jsx (Actualizado)
import { CarritoProvider } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Cabecera from './components/Cabecera';
import ListaProducto from './components/ListaProducto';
import CarritoCompra from './components/CarritoCompra';

function App() {
  // Productos disponibles (podrían venir de una API)
  const productos = [
    { 
      id: 1, 
      name: 'Hamburguesa Clásica', 
      price: 10.99, 
      img: 'https://viejodave.com.ar/wp-content/uploads/2024/02/hamburguesa-cheddar-panceta-lechuga-tomate-confitado-y-cebolla-crocante-carne-01.jpg' 
    },
    { 
      id: 2, 
      name: 'Papas Fritas Grandes', 
      price: 3.49, 
      img: 'https://i.pinimg.com/736x/7b/cd/b9/7bcdb9cae057a91797aa580b4799d822.jpg' 
    },
    { 
      id: 3, 
      name: 'Refresco Cola', 
      price: 2.00, 
      img: 'https://elrancherito.com.co/wp-content/uploads/2020/06/Gaseosa.png'
    },
    { 
      id: 4, 
      name: 'Ensalada César', 
      price: 8.50, 
      img: 'https://elfornet.com/media/catalog/product/cache/728587fcd73f36684dd4a1c3c4b36cfb/e/n/ensalada_cesar_frontal.jpg' 
    },
  ];

  return (
    <AuthProvider>
      <CarritoProvider>
        <ProtectedRoute>
          <div className="min-vh-100 bg-light">
            <Cabecera />
            
            <div className="container">
              <div className="row g-4">
                <ListaProducto products={productos} />
                <CarritoCompra />
              </div>
            </div>
          </div>
        </ProtectedRoute>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;