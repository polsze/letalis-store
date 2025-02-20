export const fetchProducts = async () => {
  try {
    // Cargar el archivo JSON desde la carpeta public
    const response = await fetch('/data/products.json');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error al cargar los productos:", error);
    return [];
  }
};