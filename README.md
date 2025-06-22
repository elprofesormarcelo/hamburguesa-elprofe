# Mi Tienda Online 🛒

Una aplicación web moderna de comercio electrónico desarrollada con React, que incluye funcionalidades de carrito de compras y panel de administración para gestión de productos.

## 🚀 Características Principales

### 🛍️ Tienda Virtual
- **Catálogo de productos** con imágenes, precios y descripciones
- **Carrito de compras** funcional con persistencia de datos
- **Interfaz intuitiva** y responsive con Bootstrap
- **Autenticación de usuarios** con contexto React

### ⚙️ Panel de Administración
- **Gestión completa de productos** (CRUD)
- **Formularios de validación** para agregar/editar productos
- **Modal de confirmación** para eliminaciones
- **Estadísticas en tiempo real** del inventario
- **Vista previa de imágenes** al agregar productos

### 🎨 Diseño y UX
- **Bootstrap 5** para un diseño moderno y responsive
- **Bootstrap Icons** para una interfaz visual atractiva
- **Alertas y notificaciones** para feedback del usuario
- **Loading states** y validaciones en tiempo real

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn
- Navegador web moderno

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/mi-tienda-online.git
   cd mi-tienda-online
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Instalar Bootstrap y Bootstrap Icons**
   ```bash
   npm install bootstrap bootstrap-icons
   # o
   yarn add bootstrap bootstrap-icons
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── AdminProductos.jsx      # Panel de administración
│   ├── FormularioProducto.jsx  # Formulario para productos
│   ├── ModalConfirmacion.jsx   # Modal de confirmación
│   ├── Cabecera.jsx            # Header de la tienda
│   ├── ListaProducto.jsx       # Lista de productos
│   ├── CarritoCompra.jsx       # Carrito de compras
│   └── ProtectedRoute.jsx      # Rutas protegidas
├── context/
│   ├── AuthContext.jsx         # Contexto de autenticación
│   └── CarritoContext.jsx      # Contexto del carrito
├── App.jsx                     # Componente principal
└── main.jsx                    # Punto de entrada
```

## 🧩 Componentes Principales

### `AdminProductos`
Panel de administración completo que permite:
- ✅ Ver lista de productos existentes
- ➕ Agregar nuevos productos
- ✏️ Editar productos existentes
- 🗑️ Eliminar productos con confirmación
- 📊 Ver estadísticas del inventario

### `FormularioProducto`
Formulario avanzado con:
- 🔍 Validación en tiempo real
- 🖼️ Vista previa de imágenes
- 📝 Campos obligatorios y opcionales
- 🔄 Modo edición y creación
- ⚠️ Manejo de errores

### `ModalConfirmacion`
Modal reutilizable que incluye:
- 🎨 Diferentes tipos (danger, warning, info, success)
- ⏳ Estados de carga
- 🎯 Botones personalizables
- 🚪 Backdrop clickeable

## 🔧 Funcionalidades Técnicas

### Gestión de Estado
- **React Context** para autenticación y carrito
- **useState** para estado local de componentes
- **useEffect** para efectos secundarios

### Validaciones
- Validación de formularios en tiempo real
- Validación de URLs para imágenes
- Campos obligatorios y opcionales
- Mensajes de error específicos

### UX/UI
- Loading states durante operaciones
- Alertas de confirmación y error
- Diseño responsive con Bootstrap
- Iconos contextuales en toda la app

## 🎯 Uso de la Aplicación

### Vista de Tienda
1. Navega por el catálogo de productos
2. Agrega productos al carrito
3. Revisa tu carrito de compras
4. Procede al checkout (funcionalidad básica)

### Panel de Administración
1. Haz clic en "Administración" en la navegación
2. **Para agregar un producto:**
   - Clic en "Nuevo Producto"
   - Completa el formulario
   - Haz clic en "Agregar Producto"

3. **Para editar un producto:**
   - Clic en el botón de editar (✏️)
   - Modifica los campos necesarios
   - Haz clic en "Actualizar Producto"

4. **Para eliminar un producto:**
   - Clic en el botón de eliminar (🗑️)
   - Confirma la eliminación en el modal

## 📊 Datos de Ejemplo

La aplicación viene con productos de ejemplo:
- Hamburguesa Clásica - $10.99
- Papas Fritas Grandes - $3.49
- Refresco Cola - $2.00
- Ensalada César - $8.50

## 🔒 Autenticación

La aplicación incluye un sistema básico de autenticación:
- Context provider para manejo de usuarios
- Rutas protegidas
- Información del usuario en el panel admin

## 🎨 Personalización

### Estilos
- La aplicación usa Bootstrap 5 para estilos base
- Puedes personalizar colores y componentes editando las clases CSS
- Los iconos se pueden cambiar usando Bootstrap Icons

### Datos
- Los productos iniciales se definen en `App.jsx`
- Puedes modificar la estructura de productos según tus necesidades
- El almacenamiento es en memoria (puedes integrar una base de datos)

## 🚧 Próximas Funcionalidades

- [ ] Integración con base de datos
- [ ] Sistema de categorías
- [ ] Búsqueda y filtros
- [ ] Sistema de inventario
- [ ] Procesamiento de pagos
- [ ] Historial de pedidos
- [ ] Sistema de usuarios avanzado



## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo `LICENSE` para más detalles.

## 👥 Autor: Marcelo Peralta

**Tu Nombre** - [tu-email@ejemplo.com](ezcajo41@yahoo.com)

Proyecto Link: [https://github.com/tu-usuario/mi-tienda-online](https://github.com/tu-usuario/mi-tienda-online)

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de JavaScript
- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Iconos
- [Vite](https://vitejs.dev/) - Herramientas de desarrollo

---

⭐ **Agradecimiento a La Agencia de Aprendizaje a lo Largo de la vida** ⭐