import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  // Mock data for products
  const products = [
    { id: 1, name: 'Hamburguesa Clásica', price: 10.99 },
    { id: 2, name: 'Papas Fritas Grandes', price: 3.49 },
    { id: 3, name: 'Refresco Cola', price: 2.00 },
    { id: 4, name: 'Ensalada César', price: 8.50 },
  ];

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Cart functions
  const addToCart = (product) => {
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

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! (Funcionalidad de pago no implementada)');
  };

  const clearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      setCartItems([]);
    }
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <div className="min-vh-100 bg-light">
        <Header />
        
        <div className="container">
          <div className="row g-4">
            <ProductList 
              products={products} 
              onAddToCart={addToCart} 
            />
            
            <ShoppingCart
              cartItems={cartItems}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
              total={calculateTotal()}
              onCheckout={handleCheckout}
              onClearCart={clearCart}
            />
          </div>
        </div>

        {/* Bootstrap Icons CSS */}
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" 
          rel="stylesheet" 
        />
      </div>
    </>
  );
}

export default App;