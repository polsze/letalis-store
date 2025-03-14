
const BannerOffer = ({ imageName }) => {
  return (
    <div className="w-auto max-w-screen-lg mx-auto overflow-hidden mt-12 xxxl:mt-2">
      <img
        src={`/img/${imageName}`}
        alt="Banner de Ofertas de Letalis Store"
        className="w-auto h-auto mx-auto object-contain"
        width={1600}
        height={300}
        loading="lazy"
      />
    </div>
  );
};

export default BannerOffer;
