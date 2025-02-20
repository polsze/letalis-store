import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        const filteredProducts = data.filter((product) => 
          product.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      }
    };
    loadProducts();
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <>
    <div className="container mx-auto mt-40 mb-10 xxxl:px-20 sm:px-0 xs:px-4">
      <h1 className="text-3xl font-bold mb-4 uppercase bg-gradient-to-r from-blueBanner via-blue-600 to-blue-400 inline-block text-transparent bg-clip-text lg:text-3xl sm:text-left xs:text-xl"><span className="my-auto border border-blue-300 mr-3"></span>{category}</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-4 g:grid-cols-3 gap-4 md:grid-cols-3 sm:flex sm:flex-col sm:gap-3">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-md hover:shadow-lg sm:p-1">
              <img src={product.image} alt={product.name} className="mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="font-bold text-green-500">${product.price}</p>
              <Link
          to={`/productos/${product.category}/${product.link}/${product.id}`}
          className="flex flex-row w-28 h-10 mt-4 bg-azul text-white px-4 py-2 rounded hover:bg-blue-600 transition sm:py-0"
        >
          <span className='m-auto'>
          Ver más
          </span>
          <svg
            className="my-auto rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
    </>
  );
};

export default ProductList;
