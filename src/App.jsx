import React, { useState } from 'react';
import Cabecera from './components/Cabecera';
import ListaProducto from './components/ListaProducto';
import CarritoCompra from './components/CarritoCompra';

function App() {
  //Productos disponibles
  const productos = [
    { id: 1, name: 'Hamburguesa Clásica', price: 10.99 },
    { id: 2, name: 'Papas Fritas Grandes', price: 3.49 },
    { id: 3, name: 'Refresco Cola', price: 2.00 },
    { id: 4, name: 'Ensalada César', price: 8.50 },
  ];

  // Estado del carrito
  const [cartItems, setCartItems] = useState([]);

  // Funciones para manejar el carrito
  const agregarCarrito = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const EliminarProducto = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const disminuirCantidad = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const aumentarCantidad = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const calculatTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const manejarPago = () => {
    alert('¡Gracias por tu compra! (Funcionalidad de pago no implementada)');
  };

  const vaciarCarrito = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      setCartItems([]);
    }
  };

  return (
    <>
      <div className="min-vh-100 bg-light">
        <Cabecera />
        
        <div className="container">
          <div className="row g-4">
            <ListaProducto 
              products={productos} 
              onAddToCart={agregarCarrito} 
            />
            
            <CarritoCompra
              cartItems={cartItems}
              onIncrease={aumentarCantidad}
              onDecrease={disminuirCantidad}
              onRemove={EliminarProducto}
              total={calculatTotal()}
              onCheckout={manejarPago}
              onClearCart={vaciarCarrito}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;