import { useNavigate } from "react-router-dom";
import CategorieOne from "/img/Banner Categoria Hogar Letalis Store.png";
import CategoriaTwo from "/img/Banner Categoria Celulares Letalis Store.png";
import CategorieThree from "/img/Banner Categoria Notebooks Letalis Store.png";
import CategorieFour from "/img/Banner Categoria Consolas Letalis Store.png";

const BannerCategories = () => {
  const navigate = useNavigate();

  const images = [
    {
      imagen: CategorieOne,
      altImg: "Banner Categoría Hogar Letalis Store",
      path: "hogar",
    },
    {
      imagen: CategoriaTwo,
      altImg: "Banner Categoría Celulares Letalis Store",
      path: "celulares",
    },
    {
      imagen: CategorieThree,
      altImg: "Banner Categoría Notebooks Letalis Store",
      path: "notebooks",
    },
    {
      imagen: CategorieFour,
      altImg: "Banner Categoría Consolas Letalis Store",
      path: "consolas",
    }
  ];

  return (
    <div className="w-auto mx-auto  py-10 xl:py-4">
      <div className="grid grid-cols-4 gap-4 xxxl:px-2 lg:grid-cols-2 lg:px-1">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.imagen}
            alt={image.altImg}
            className="w-[500px] h-[200px] rounded-xl shadow-xl object-cover transition-all ease-in-out duration-[500ms] hover:scale-105 hover:grayscale-0 cursor-pointer sm:rounded-xl sm:w-full sm:h-auto sm:grayscale-0 "
            onClick={() => navigate(`/productos/${image.path}`)}
            width={500}
            height={250}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCategories;
