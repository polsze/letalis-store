import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  // Función para truncar la descripción
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="max-w-xs bg-white  border border-black">
      <a href="#">
        <img
          className="w-full h-auto"
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          loading="lazy"
        />
      </a>
      <div className="p-5 bg-gray-200">
        <a href="#">
          <h3 className="mb-2 text-lg font-semibold tracking-tight text-black">
            {truncateText(product.name, 40)}
          </h3>
        </a>
        <p className="text-sm text-black font-semibold mt-2">
          ${product.price}
        </p>
        <Link
          to={`/productos/${product.category}/${product.category}/${product.id}`}
          className="flex flex-row w-28 h-10 mt-4  bg-sky-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          <span className="m-auto">Ver más</span>
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
    </div>
  );
};

export default ProductCard;
