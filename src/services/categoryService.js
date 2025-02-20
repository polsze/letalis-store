export const fetchCategories = async () => {
  try {
    const response = await fetch("/data/categories.json");
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al cargar las categorías:", error);
    throw error; // Propaga el error si es necesario
  }
};