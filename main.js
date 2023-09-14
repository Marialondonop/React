// Array para almacenar los productos disponibles
const productosDisponibles = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 19.99,
    descripcion: "Descripción del producto 1",
    imagen: "imagen1.jpg",
    stock: 10,
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 29.99,
    descripcion: "Descripción del producto 2",
    imagen: "imagen2.jpg",
    stock: 5,
  },
  // Agrega más productos aquí...
];

// Carrito de compras
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
  const productoSeleccionado = productosDisponibles.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado && productoSeleccionado.stock > 0) {
    carrito.push(productoSeleccionado);
    productoSeleccionado.stock--;
    actualizarCarrito();
  } else {
    alert("Producto agotado o no encontrado.");
  }
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
  // Lógica para mostrar los productos en el carrito y calcular el total
  // Actualiza la interfaz de usuario aquí
}

// Manejar el evento de clic en un botón "Agregar al Carrito"
document.querySelectorAll(".agregar-al-carrito").forEach((boton) => {
  boton.addEventListener("click", (event) => {
    const productoId = parseInt(event.target.dataset.productoid);
    agregarAlCarrito(productoId);
  });
});

// Inicialización: Mostrar productos disponibles y configurar eventos
actualizarCarrito();

