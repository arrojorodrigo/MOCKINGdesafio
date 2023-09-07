const productos = [];

for (let i = 1; i <= 100; i++) {
  const producto = {
    id: i,
    nombre: `Producto ${i}`,
    stock: Math.floor(Math.random() * 100), // Stock aleatorio entre 0 y 99
    codigo: `COD-${i}`,
    descripcion: `Descripción del Producto ${i}`,
    precio: parseFloat((Math.random() * 1000).toFixed(2)) // Precio aleatorio entre 0 y 999.99
  };

  productos.push(producto);

}

export { productos }