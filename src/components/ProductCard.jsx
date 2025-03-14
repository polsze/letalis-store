import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="max-w-xl h-[400px] flex flex-col border border-black">
      {/* Contenedor de imagen con altura fija */}
      <div className="h-[200px]">
        <img
          className="w-full h-full object-contain"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>

      {/* Contenido de la card */}
      <div className="flex-grow p-5 bg-gray-200 flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-black">
            {truncateText(product.name, 40)}
          </h3>
          <p className="text-lg text-green-600 font-bold">
            {product.moneyTipe === "USD" ? "USD" : "$"} {product.price}
          </p>
        </div>

        <Link
          to={`/productos/${product.category}/${product.category}/${product.id}`}
          className="flex w-28 h-10 mt-4 bg-sky-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition items-center justify-center"
        >
          Ver más
          <svg
            className="w-3.5 h-3.5 ml-2"
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
    </div>
  );
};

export default ProductCard;
