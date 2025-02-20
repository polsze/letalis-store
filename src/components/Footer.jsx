import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-auto bg-azul text-white py-4">
      <div className="flex flex-row justify-evenly items-center sm:flex-col sm:justify-center">
        {/* Logo y Derechos Reservados */}
        <div className="w-full flex flex-row justify-evenly items-center sm:grid sm:grid-cols-1 sm:place-items-center">
          {/* Logo y Derechos */}
          <div className="flex flex-col items-start sm:justify-center">
            <div className="flex flex-row justify-between w-full items-end sm:px-2">
              <Link to="/">
                <img
                  src="/img/Logo Letalis Store Blanco.webp"
                  alt="Letalis Store Logo"
                  className="relative top-3 -left-2 object-contain w-32 sm:w-24"
                  loading="lazy"
                />
              </Link>
              <img
                src="/img/data fiscal.webp"
                alt="Datos fiscales"
                className="w-16 h-auto"
                width={190}
                height={270}
                loading="lazy"
              />
            </div>
            <p className="text-sm mt-2 text-left lg:text-center sm:text-center">
              © {currentYear} Letalis Store™. Todos los derechos reservados
            </p>
            <p className="text-sm sm:text-center sm:w-full">
              Buenos Aires, Argentina
            </p>
          </div>

          {/* Categorías */}
          <div className="sm:py-8 sm:text-center">
            <Link to="/productos" className="border-b">
              <h3 className="font-semibold text-lg mb-3">Categorías</h3>
            </Link>
            <ul className="space-y-2">
              {["climatizacion", "smart-tvs", "piletas", "hardware"].map(
                (category) => (
                  <li key={category}>
                    <Link to={`/productos/${category}`} className="border-b">
                      {category.charAt(0).toUpperCase() +
                        category.slice(1).replace("-", " ")}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Institucional */}
          <div className="sm:pt-4 sm:text-center">
            <h3 className="font-semibold text-lg mb-3">Nosotros</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contacto" className="border-b">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="border-b">
                  Quiénes Somos
                </Link>
              </li>
              <li className="italic">ventas@letalis-store.com</li>
            </ul>

            {/* Redes Sociales */}
            <div className="flex space-x-3 mt-3 sm:justify-center">
              <a
                href="https://www.instagram.com/letalis_storeok/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon icon="skill-icons:instagram" width={30} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=541532501349"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Icon icon="logos:whatsapp-icon" width={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Icono para regresar arriba */}
        <a href="#" aria-label="Back to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 128 128"
            className="mt-36 mr-6 sm:mt-10 sm:mr-0"
          >
            <path
              fill="#f97316"
              d="M116 4H12c-4.4 0-8 3.6-8 8v104c0 4.4 3.6 8 8 8h104c4.4 0 8-3.6 8-8V12c0-4.4-3.6-8-8-8"
            ></path>
            <path
              fill="#f97316"
              d="M109.7 4H11.5C7.4 4 4 7.4 4 11.5v97.9c0 4.2 3.4 7.5 7.5 7.5h98.1c4.2 0 7.5-3.4 7.5-7.5V11.5c.2-4.1-3.3-7.5-7.4-7.5"
            ></path>
            <path
              fill="#fafafa"
              d="m37 47.4l24-24c1.6-1.8 4.4-1.8 6 0l24 24c2.3 2.6.4 6.6-3 6.6H74c-1.1 0-2 .9-2 2v46c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4V56c0-1.1-.9-2-2-2H40c-3.4 0-5.3-4-3-6.6"
            ></path>
            <path
              fill="#b4e1ed"
              d="M39.7 12.9c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4s-2.9 8.5-3 15.3c0 4.8 0 9.3 2.5 9.3c3.4 0 3.4-7.9 6.2-12.3c5.4-8.7 18.9-10.6 18.9-13.6"
              opacity={0.5}
            ></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
