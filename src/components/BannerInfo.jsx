const BannerInfo = () => {
  return (
    <>
      <div className="md:w-full">
        <img
          src="/img/Banner Medios de Pago, Envíos y Garantía de Letalis Store.png"
          alt="Medios de pago, envíos, garantía de Letalis Store"
          className="pt-4 xl:pt-2 md:hidden"
          width={1600}
          height={150}
        />
        <img
          src="/img/Banner Medios de Pago, Envíos y Garantía de Letalis Store Tablets.png"
          alt="Medios de pago, envíos, garantía de Letalis Store"
          className="hidden mt-2 md:block"
          width={768}
          height={200}
        />
      </div>
    </>
  );
};

export default BannerInfo;
