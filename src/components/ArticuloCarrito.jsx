const ArticuloCarrito = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="list-group-item px-0 py-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="flex-grow-1">
          <h6 className="fw-bold mb-1">{item.name}</h6>
          <small className="text-muted">
            ${item.price.toFixed(2)} x {item.quantity}
          </small>
        </div>
        <div className="d-flex align-items-center ms-3">
          <div className="btn-group btn-group-sm me-2" role="group">
            <button
              onClick={() => onDecrease(item.id)}
              className="btn btn-outline-danger"
              type="button"
            >
              <i className="bi bi-dash"></i>
            </button>
            <span className="btn btn-outline-secondary disabled">
              {item.quantity}
            </span>
            <button
              onClick={() => onIncrease(item.id)}
              className="btn btn-outline-success"
              type="button"
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="btn btn-sm btn-outline-secondary"
            title="Eliminar item"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticuloCarrito;