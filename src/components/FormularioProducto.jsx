// components/FormularioProducto.jsx
import React, { useState } from 'react';

const FormularioProducto = ({ onAgregarProducto, onCancelar }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    img: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error específico cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
    }

    // Validar precio
    if (!formData.price) {
      newErrors.price = 'El precio es obligatorio';
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'El precio debe ser mayor a 0';
    }

    // Validar descripción
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'La descripción debe tener al menos 10 caracteres';
    }

    // Validar imagen (opcional pero si se proporciona debe ser una URL válida)
    if (formData.img && !isValidUrl(formData.img)) {
      newErrors.img = 'Debe ser una URL válida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validar URL
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simular procesamiento
      await new Promise(resolve => setTimeout(resolve, 1000));

      const nuevoProducto = {
        id: Date.now(), // En producción sería generado por el backend
        name: formData.name.trim(),
        price: parseFloat(formData.price),
        description: formData.description.trim(),
        img: formData.img || 'https://via.placeholder.com/300x200?text=Sin+Imagen'
      };

      onAgregarProducto(nuevoProducto);
      
      // Resetear formulario
      setFormData({
        name: '',
        price: '',
        description: '',
        img: ''
      });
      setErrors({});

    } catch (error) {
      console.error('Error al agregar producto:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white">
        <h3 className="card-title h4 mb-0 text-secondary">
          <i className="bi bi-plus-circle me-2"></i>
          Agregar Nuevo Producto
        </h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} noValidate>
          {/* Campo Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              <i className="bi bi-tag me-2"></i>
              Nombre del Producto *
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : formData.name ? 'is-valid' : ''}`}
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Hamburguesa Especial"
              disabled={loading}
            />
            {errors.name && (
              <div className="invalid-feedback">
                <i className="bi bi-exclamation-triangle me-1"></i>
                {errors.name}
              </div>
            )}
          </div>

          {/* Campo Precio */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label fw-bold">
              <i className="bi bi-currency-dollar me-2"></i>
              Precio *
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="number"
                step="0.01"
                min="0.01"
                className={`form-control ${errors.price ? 'is-invalid' : formData.price && parseFloat(formData.price) > 0 ? 'is-valid' : ''}`}
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                disabled={loading}
              />
              {errors.price && (
                <div className="invalid-feedback">
                  <i className="bi bi-exclamation-triangle me-1"></i>
                  {errors.price}
                </div>
              )}
            </div>
          </div>

          {/* Campo Descripción */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-bold">
              <i className="bi bi-card-text me-2"></i>
              Descripción *
            </label>
            <textarea
              className={`form-control ${errors.description ? 'is-invalid' : formData.description && formData.description.length >= 10 ? 'is-valid' : ''}`}
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe el producto (mínimo 10 caracteres)"
              disabled={loading}
            />
            <div className="form-text">
              {formData.description.length}/10 caracteres mínimos
            </div>
            {errors.description && (
              <div className="invalid-feedback">
                <i className="bi bi-exclamation-triangle me-1"></i>
                {errors.description}
              </div>
            )}
          </div>

          {/* Campo Imagen */}
          <div className="mb-4">
            <label htmlFor="img" className="form-label fw-bold">
              <i className="bi bi-image me-2"></i>
              URL de la Imagen (opcional)
            </label>
            <input
              type="url"
              className={`form-control ${errors.img ? 'is-invalid' : formData.img && isValidUrl(formData.img) ? 'is-valid' : ''}`}
              id="img"
              name="img"
              value={formData.img}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
              disabled={loading}
            />
            {errors.img && (
              <div className="invalid-feedback">
                <i className="bi bi-exclamation-triangle me-1"></i>
                {errors.img}
              </div>
            )}
            <div className="form-text">
              Si no proporcionas una imagen, se usará una imagen por defecto
            </div>
          </div>

          {/* Vista previa de imagen */}
          {formData.img && isValidUrl(formData.img) && (
            <div className="mb-3">
              <label className="form-label fw-bold">Vista Previa:</label>
              <div className="text-center">
                <img 
                  src={formData.img} 
                  alt="Vista previa"
                  className="img-thumbnail"
                  style={{ maxHeight: '200px', maxWidth: '300px' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    setErrors(prev => ({
                      ...prev,
                      img: 'No se pudo cargar la imagen desde esta URL'
                    }));
                  }}
                />
              </div>
            </div>
          )}

          {/* Botones */}
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onCancelar}
              disabled={loading}
            >
              <i className="bi bi-x-circle me-2"></i>
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Agregando...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle me-2"></i>
                  Agregar Producto
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioProducto;