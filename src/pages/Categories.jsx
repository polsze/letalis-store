import { useEffect, useState } from "react";
import { fetchCategories } from "../services/categoryService";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="w-full h-auto container mx-auto mt-20">
      <h2 className="text-3xl font-bold pt-10 mb-3 bg-gradient-to-r from-blueBanner via-blue-600 to-blue-400 inline-block text-transparent bg-clip-text xxxl:pl-48 xxl:pl-3 lg:w-full lg:text-center lg:mb-10">
        <span className="my-auto border border-blue-300 mr-3"></span>PRODUCTOS
      </h2>
      <div className="flex flex-row flex-wrap gap-3 mb-3 xxxl:justify-center xxxl:gap-12 xxl:gap-1 sm:px-1">
        {categories.map((category) => (
          <div key={category.id} className="">
            <a
              href={`/productos/${category.path}`}
              className="block border rounded-md hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.altImg}
                className="rounded-xl w-full h-auto"
                width={500}
                height={250}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
