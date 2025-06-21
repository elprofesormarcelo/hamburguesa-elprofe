// components/TotalCarrito.js
import { useCarrito } from '../context/CarritoContext';

const TotalCarrito = () => {
  const { total, manejarPago, vaciarCarrito } = useCarrito();

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
      <div className="d-grid gap-2">
        <button
          className="btn btn-success btn-lg fw-bold"
          onClick={manejarPago}
        >
          <i className="bi bi-credit-card me-2"></i>
          Proceder al Pago
        </button>
        <button
          className="btn btn-outline-danger fw-bold"
          onClick={vaciarCarrito}
        >
          <i className="bi bi-trash3 me-2"></i>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
};

export default TotalCarrito;