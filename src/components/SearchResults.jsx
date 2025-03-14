import { useLocation, Link } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { products = [] } = location.state || {};
  return (
    <div className="container mx-auto py-4 mt-20 xxxl:px-12 xxxl:mt-10">
      <h1 className="text-2xl font-bold mb-4  mt-20">Resultados de búsqueda</h1>
      {products.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <ul className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-4 md:flex md:flex-col">
          {products.map((product) => (
            <li key={product.id} className="border p-4 rounded-lg">
              <Link
                to={`/productos/${product.category}/${product.link}/${product.id}`}
                className="flex items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 mr-4 object-cover rounded"
                  width={500}
                  height={500}
                />
                <div>
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-lg text-green-600 font-bold">
                    {product.moneyTipe === "USD" ? "USD" : "$"} {product.price}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
