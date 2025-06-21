const TotalCarrito = ({ total, onCheckout, onClearCart }) => {
  return (
    <>
      <div className="border-top pt-3 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-4 fw-bold">Total:</span>
          <span className="fs-3 fw-bold text-success">
            ${total}
          </span>
        </div>
      </div>
      {/* 🆕 NUEVO: Contenedor con grid para botones verticales */}
      <div className="d-grid gap-2">
        <button
          className="btn btn-success btn-lg fw-bold"
          onClick={onCheckout}
        >
          <i className="bi bi-credit-card me-2"></i>
          Proceder al Pago
        </button>
        {/* 🆕 NUEVO: Botón para vaciar carrito */}
        <button
          className="btn btn-outline-danger fw-bold"
          onClick={onClearCart}
        >
          <i className="bi bi-trash3 me-2"></i>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
};

export default TotalCarrito;