import { useNavigate } from "react-router-dom";
import CategorieOne from "/img/Banner Categoría Piletas Letalis Store.webp";
import CategoriaTwo from "/img/Banner Categoría Aires Acondicionados Letalis Store.webp";
import CategorieThree from "/img/Banner Categoría Smart TV Letalis Store.webp";
import CategorieFour from "/img/Banner Categoría Hardware Letalis Store.webp";
import CategorieFive from "/img/Banner Categoría Ventiladores Letalis Store.webp";
import CategorieSix from "/img/Banner Categoría Celulares Letalis Store.webp";

const BannerCategories = () => {
  const navigate = useNavigate();

  const images = [
    {
      imagen: CategorieOne,
      altImg: "Banner Categoría Piletas Letalis Store",
      path: "piletas",
    },
    {
      imagen: CategoriaTwo,
      altImg: "Banner Categoría Aires Acondicionados Letalis Store",
      path: "climatizacion",
    },
    {
      imagen: CategorieThree,
      altImg: "Banner Categoría Smart TV Letalis Store",
      path: "smart-tvs",
    },
    {
      imagen: CategorieFour,
      altImg: "Banner Categoría Hardware Letalis Store",
      path: "hardware",
    },
    {
      imagen: CategorieFive,
      altImg: "Banner Categoría Ventiladores Letalis Store",
      path: "ventiladores",
    },
    {
      imagen: CategorieSix,
      altImg: "Banner Categoría Celulares Letalis Store",
      path: "celulares",
    },
  ];

  return (
    <div className="w-auto mx-auto  py-10 xl:py-4">
      <div className="flex flex-row flex-wrap justify-evenly gap-12 xxxl:justify-evenly xxxl:gap-4 xxl:gap-2 xl:gap-0 xl:justify-around sm:px-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.imagen}
            alt={image.altImg}
            className="w-[500px] h-[200px] rounded-xl shadow-xl object-cover transition-all ease-in-out duration-[2500ms] hover:scale-105 hover:grayscale-0 cursor-pointer sm:rounded-xl sm:w-full sm:h-auto sm:grayscale-0 "
            onClick={() => navigate(`/productos/${image.path}`)} // Navega a la categoría
            width={500}
            height={250}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCategories;
