// components/ModalConfirmacion.jsx
import React from 'react';

const ModalConfirmacion = ({ 
  mostrar, 
  titulo, 
  mensaje, 
  onConfirmar, 
  onCancelar,
  tipoBoton = 'danger',
  textoConfirmar = 'Confirmar',
  textoCancelar = 'Cancelar',
  loading = false
}) => {
  if (!mostrar) return null;

  const tiposIcono = {
    danger: 'bi-exclamation-triangle-fill text-danger',
    warning: 'bi-exclamation-triangle-fill text-warning',
    info: 'bi-info-circle-fill text-info',
    success: 'bi-check-circle-fill text-success'
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="modal-backdrop fade show"
        onClick={loading ? undefined : onCancelar}
        style={{ zIndex: 1040 }}
      ></div>

      {/* Modal */}
      <div 
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ zIndex: 1050 }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow">
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">
                <i className={`bi ${tiposIcono[tipoBoton] || tiposIcono.danger} me-2`}></i>
                {titulo}
              </h5>
              {!loading && (
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={onCancelar}
                ></button>
              )}
            </div>

            {/* Body */}
            <div className="modal-body">
              <p className="mb-0">{mensaje}</p>
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onCancelar}
                disabled={loading}
              >
                <i className="bi bi-x-circle me-2"></i>
                {textoCancelar}
              </button>
              <button 
                type="button" 
                className={`btn btn-${tipoBoton}`}
                onClick={onConfirmar}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Procesando...
                  </>
                ) : (
                  <>
                    <i className={`bi ${tipoBoton === 'danger' ? 'bi-trash' : 'bi-check-circle'} me-2`}></i>
                    {textoConfirmar}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalConfirmacion;