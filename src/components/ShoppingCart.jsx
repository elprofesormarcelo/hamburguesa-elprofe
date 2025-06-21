import React from 'react';
import CartItem from './CartItem';  
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';

const ShoppingCart = ({ 
  cartItems, 
  onIncrease, 
  onDecrease, 
  onRemove, 
  total, 
  onCheckout,
  onClearCart
}) => {
  return (
    <div className="col-lg-4">
      <div className="card shadow-sm h-100">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h2 className="card-title h4 mb-0 text-secondary">
            <i className="bi bi-cart me-2"></i>Tu Carrito
          </h2>
          <span className="badge bg-primary rounded-pill fs-6">
            {cartItems.length} items
          </span>
        </div>
        <div className="card-body">
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <div className="list-group list-group-flush mb-3">
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                  />
                ))}
              </div>
              <CartTotal 
                total={total} 
                onCheckout={onCheckout} 
                onClearCart={onClearCart}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;