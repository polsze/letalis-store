// src/components/Hero.jsx
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative w-full" 
      style={{ 
        height: '100vh', // Asegura que el Hero ocupe toda la altura de la pantalla
        backgroundImage: "url('/img/Letalis Store Hero Img.webp')", 
        backgroundSize: 'cover',  // Asegura que la imagen cubra todo el contenedor
        backgroundPosition: 'center center', // Centra la imagen en el contenedor
        backgroundRepeat: 'no-repeat'  // Evita que la imagen se repita
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black opacity-50 "></div> 

      {/* Contenedor de texto centrado */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white ">
        <div className="px-4">
          <header>
            <h1 className="text-lg font-bold lg:text-md ">Bienvenido a LETALIS STORE 🛒</h1>
          </header>
          <p className="text-sm my-4 xs:text-sm">Encontrá los mejores productos para tu día a día.</p>
          <Link
            to="/productos"
            className="px-6 py-3 bg-sky-500 text-white text-sm rounded-full hover:bg-blue-700 transition"
            title="Ver productos disponibles en LETALIS STORE"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
