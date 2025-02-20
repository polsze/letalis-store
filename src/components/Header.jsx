import { useState, useEffect, useRef } from "react";
import { fetchCategories } from "../services/categoryService";
import { fetchProducts } from "../services/products"; // Asume que este archivo tiene el servicio fetchProducts
import Logo from "/img/Logo Letalis Store Blanco.webp";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuIcon, setMenuIcon] = useState("majesticons:menu"); // Estado para el ícono del menú

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    setMenuIcon(menuVisible ? "majesticons:menu" : "flowbite:close-outline");
  };

  const closeMenu = () => {
    setMenuVisible(false);
    setMenuIcon("majesticons:menu");
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    const searchKeywords = searchTerm.toLowerCase().split(" "); // Divide el término de búsqueda
    const results = products.filter((product) => {
      // Busca coincidencias parciales en varios campos
      const searchableFields = [
        product.name.toLowerCase(),
        product.description?.toLowerCase() || "",
        product.category?.toLowerCase() || "",
      ];
      return searchKeywords.some((keyword) =>
        searchableFields.some((field) => field.includes(keyword))
      );
    });

    // Ordenar resultados por relevancia o cualquier otra métrica
    const sortedResults = results.sort((a, b) => a.price - b.price);

    // Redirigir a la página de resultados de búsqueda
    navigate("/resultados-de-busqueda", { state: { products: sortedResults } });
    closeMenu();
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error al cargar las categorías:", error);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-20 px-16 flex flex-row justify-between text-white items-center bg-azul fixed z-50 transition-all duration-300 ease-in-out lg:static xl:fixed`}
      >
        <div className="container mx-auto flex justify-between items-center ">
          {/* Logo */}
          <div className="">
            <a href="/">
              <img
                src={Logo}
                className="object-contain w-40 h-auto"
                alt="Logo de Letalis Store"
                loading="eager" // Asegura que el logo se cargue de inmediato
                decoding="async" // Permite al navegador procesar la imagen de manera más eficiente
              />
            </a>
          </div>

          {/* Search Input */}
          <div className="flex items-center w-1/3 xl:hidden">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(); // Llama a la función de búsqueda si se presiona Enter
                }
              }}
              placeholder="Buscar productos..."
              className="w-full px-4 py-2 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Buscar
            </button>
          </div>
          {/* Barra de navegación */}
          <div className="w-auto xl:hidden">
            <nav>
              <ul className="flex space-x-8 text-white">
                <a
                  href="/"
                  onClick={toggleMenu}
                  className="text-white hidden sm:block"
                >
                  <Icon icon="flowbite:close-outline" width={40} />
                </a>
                <li>
                  <a href="/" className="hover:underline" onClick={closeMenu}>
                    Inicio
                  </a>
                </li>

                {/* Dropdown en Productos */}
                <li className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="hover:underline focus:outline-none flex items-center space-x-1"
                    aria-expanded={dropdownOpen}
                  >
                    <a href="/productos" onClick={closeMenu}>
                      <span className="">Productos</span>
                    </a>
                    <svg
                      className={`w-4 h-4 relative left-1 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48 text-black">
                      {categories.map((category) => (
                        <li key={category.id} className="hover:bg-gray-100">
                          <a
                            href={`/productos/${category.path}`}
                            className="block px-4 py-2"
                            onClick={closeMenu}
                          >
                            {category.category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <a
                    href="/servicios"
                    className="hover:underline"
                    onClick={closeMenu}
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="/nosotros"
                    className="hover:underline"
                    onClick={closeMenu}
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="hover:underline"
                    onClick={closeMenu}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Menú Responsivo */}
          <div
            className={`bg-black h-screen w-64 absolute top-0 left-0 transform transition-transform z-50 ${
              menuVisible ? "translate-x-0 xl:w-full" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <img
                  src={Logo}
                  alt="Logo de Letalis Store"
                  className="object contain w-40 h-auto"
                />
              </div>

              {/* Barra de navegación */}
              <ul className="flex flex-col items-center text-base w-full">
                <li className="my-3">
                  <a
                    href="#"
                    className="text-white hidden xl:block xl:text-red-500 xl:absolute xl:top-2 xl:right-2"
                    onClick={toggleMenu}
                    aria-label="Cerrar ventana"
                  >
                    <Icon icon="flowbite:close-outline" width={40} />
                  </a>
                </li>
                <li className="my-3 font-oswald uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300">
                  <Link to="/" onClick={closeMenu}>
                    Inicio
                  </Link>
                </li>
                <li className="my-3 font-oswald uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300">
                  <Link to="/productos" onClick={closeMenu}>
                    Productos
                  </Link>
                </li>
                <li className="my-3 font-oswald uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300">
                  <Link to="/servicios" onClick={closeMenu}>
                    Servicio Técnico
                  </Link>
                </li>
                <li className="my-3 font-oswald uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300">
                  <Link to="/nosotros" onClick={closeMenu}>
                    Nosotros
                  </Link>
                </li>
                <li className="my-3 font-oswald uppercase text-white hover:text-orange-500 transition-all ease-linear duration-300">
                  <Link to="/contacto" onClick={closeMenu}>
                    Contacto
                  </Link>
                </li>
              </ul>

              {/* Search Input */}
              <div className="flex items-center w-1/3 sm:w-[80%] sm:mt-4">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch(); //
                    }
                  }}
                  placeholder="Buscar productos..."
                  className="w-full px-4 py-2 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                  onClick={handleSearch}
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* Menu Hamburguesa*/}
          <div className="hidden xl:block">
            <nav className="w-full">
              <ul className="flex flex-row text-2xl xl:text-lg">
                <li className="mr-12 font-oswald font-extrabold uppercase whitespace-nowrap lg:mr-8 hover:text-orange-500 transition-all ease-linear duration-300 sm:mr-0">
                  <a href="#" onClick={toggleMenu} aria-label="Abrir Menú">
                    <Icon
                      icon={menuIcon}
                      width={40}
                      className="sm:relative sm:left-12"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
