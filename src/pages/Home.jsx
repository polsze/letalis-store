import { useState, useEffect, useRef } from 'react';
import { fetchProducts } from '../services/products';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import BrandsCarrousel from '../components/BrandsCarrousel';
import BannerOffer from '../components/BannerOffer';
import BannerAgent from '../components/BannerAgent';
import BannerCategories from '../components/BannerCategories';
import BannerInfo from '../components/BannerInfo';
import { Icon } from '@iconify/react';
import BannerServices from '../components/BannerServices';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const sliderRef = useRef(null); // Referencia al contenedor del slider
  const footerRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      const filteredProducts = fetchedProducts.filter(product => product.isPriceBomb);
      setProducts(filteredProducts);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [footerRef]);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300; // Ajusta el valor para mayor o menor desplazamiento
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="w-full mx-auto">
        <Hero />
        <div className='container mx-auto'>
        <BannerOffer imageName="Banner Ofertas Categorias Letalis Store.webp" />
        <BannerInfo />
        <BannerCategories />
        <h2 className="text-3xl italic mb-10 text-center "><span className="my-auto border border-blue-300 mr-6"></span>LETALIS STORE - OFERTAS ESPECIALES X TIEMPO LIMITADO</h2>

        {/* Slider de productos */}
        <div className="relative mx-auto max-w-7xl mb-10 xxl:max-w-4xl lg:max-w-xl xs:px-2 sm:mb-3">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-scroll scroll-smooth scrollbar-hide pb-4 xxl:gap-3 lg:gap-1 lg:flex-row lg:flex-wrap lg:justify-center lg:items-center"
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[250px] sm:min-w-[300px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Flechas de navegación */}
          {products.length > 6 && (
            <>
              <button
                onClick={() => handleScroll('left')}
                className="absolute top-1/2 -left-24 text-4xl text-black transform -translate-y-1/2  transition duration-300  p-3  hover:bg-gray-200 hover:text-green-600 xxxl:-left-16 lg:hidden"
              >
                ←
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="absolute top-1/2 -right-24 text-4xl text-black transform -translate-y-1/2 transition duration-300 p-3 hover:bg-gray-200 hover:text-green-600 xxxl:-right-16 lg:hidden"
              >
                →
              </button>
            </>
          )}
        </div>

        <BannerAgent imageName="banner agent.png" />
        <BrandsCarrousel />
        <BannerServices />
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <div
        className={`fixed right-4 bottom-4 z-10 transition-opacity duration-300 ${
          isFooterVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <a href="https://api.whatsapp.com/send?phone=541532501349" target="_blank" rel="noreferrer" aria-label="Comunicate por WhatsApp con un Agente">
          <Icon icon="logos:whatsapp-icon" width={60} />
        </a>
      </div>

      {/* Footer Reference */}
      <div ref={footerRef}></div>
    </>
  );
};

export default Home;
