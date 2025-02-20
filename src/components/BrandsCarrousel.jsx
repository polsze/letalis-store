import logo1 from "/img/logo samsung.webp";
import logo2 from "/img/logo hitachi.webp";
import logo3 from "/img/logo philips.webp";
import logo4 from "/img/logo rca.webp";
import logo5 from "/img/logo tcl.webp";
import logo6 from "/img/logo bgh.webp";
import logo7 from "/img/logo alaska.webp";
import logo8 from "/img/logo-kanji.webp";
import logo9 from "/img/logo sol de verano.webp";
import logo10 from "/img/logo piletin.webp";

const images = [
  {
    imagen: logo1,
    altImg: "Logo Samsung",
  },
  {
    imagen: logo2,
    altImg: "Logo Hitachi",
  },
  {
    imagen: logo3,
    altImg: "Logo Philips",
  },
  {
    imagen: logo4,
    altImg: "Logo Rca",
  },
  {
    imagen: logo5,
    altImg: "Logo Tcl",
  },
  {
    imagen: logo6,
    altImg: "Logo Bgh",
  },
  {
    imagen: logo7,
    altImg: "Logo Alaska",
  },
  {
    imagen: logo8,
    altImg: "Logo Kanji",
  },
  {
    imagen: logo9,
    altImg: "Logo Sol de Verano",
  },
  {
    imagen: logo10,
    altImg: "Logo Piletin",
  },
];

const BrandsCarrousel = () => {
  return (
    <div className="w-auto h-auto mx-auto flex overflow-hidden space-x-2 group py-4 pb-4 mb-10 bg-gray-100 sm:mb-3 sm:h-[150px]">
      <div className="flex animate-loop-scroll">
        {images.map((image, index) => (
          <img
            src={image.imagen}
            alt={image.altImg}
            className="h-auto max-w-none object-contain lg:w-[100px] lg:h-[100px] sm:w-[100px]"
            key={index}
            width={300}
            height={300}
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex animate-loop-scroll" aria-hidden="true">
        {images.map((image, index) => (
          <img
            src={image.imagen}
            alt={image.altImg}
            className="h-auto max-w-none object-contain lg:w-[100px] lg:h-[100px] sm:w-[100px]"
            key={`duplicate-${index}`}
            width={300}
            height={300}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsCarrousel;
