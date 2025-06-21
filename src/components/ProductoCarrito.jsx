const ProductoCarrito = ({ product, onAddToCart }) => {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="card h-100 border-light shadow-sm">
        <div className="card-body d-flex flex-column text-center">
          <img src={product.img} alt="" />
          <h5 className="card-title text-dark">{product.name}</h5>
           <p className="card-text fs-4 fw-bold text-success mb-3">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => onAddToCart(product)}
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