import imgAbout2 from "/img/Sobre Nosotros Okey Letalis Store.webp";
import imgAbout3 from "/img/Sobre Nosotros Okey Letalis Store-2.webp";

const About = () => {
  return (
    <section className="w-full h-auto ">
      <img
        src="/img/Logo Letalis Store Oscuro.webp"
        alt="Fondo de Letalis"
        className="absolute top-1/2 left-1/2 -translate-x-96 translate-y-12 w-[50%] -rotate-45 opacity-10 xxl:translate-y-96 xxl:w-[75%]"
        width={500}
        height={281}
        loading="lazy"
      />{" "}
      <div className=" flex flex-col">
        <div className="w-[70%] mx-auto mt-20 flex flex-col sm:mt-10">
          <h1 className="text-5xl pt-16 mb-5 font-bold pb-10 uppercase xxxl:text-3xl xxxl:ml-0 lg:text-center">
            <span className="my-auto border border-blue-300 mr-3"></span>SOBRE{" "}
            <span className=" text-blue-500">NOSOTROS</span>
          </h1>
          <div className="flex flex-row w-full justify-evenly lg:flex-col lg:items-center">
            <img
              src={imgAbout2}
              alt="Sobre Nosotros Letalis Store"
              className="lg:mb-4"
              width={500}
              height={500}
            />
            <div className="flex flex-col justify-center xxxl:ml-4 sm:w-[95%]">
              <h2 className=" mb-2 text-4xl font-dm uppercase xxxl:text-2xl lg:mb-3">
                LETALIS <span className="text-blue-600">STORE</span>
              </h2>
              <p className="text-base font-open-sans max-w-xl xxxl:text-base lg:text-sm">
                Letalis Store es una tienda con más de 4 años de experiencia
                consolidada en el mercado, especializada en la comercialización
                de productos tecnológicos de alta calidad. <br />
                Desde nuestra sede en Buenos Aires, nos hemos dedicado a ofrecer
                soluciones innovadoras que se adaptan a las necesidades únicas
                de cada cliente, posicionándonos como un referente confiable en
                el sector.
                <br />
                Nuestro compromiso no solo radica en la calidad de los productos
                que ofrecemos, sino también en la excelencia de la experiencia
                de compra. En Letalis Store, nos guiamos por principios sólidos
                de integridad, innovación y atención personalizada, que nos
                permiten construir relaciones duraderas con nuestros clientes y
                garantizar su satisfacción en cada interacción.
                <br />
                Contamos con un equipo altamente capacitado y apasionado por la
                tecnología, cuyo principal objetivo es asesorar y acompañar a
                cada cliente en su búsqueda de soluciones tecnológicas adaptadas
                a sus proyectos, ya sea en el ámbito personal o profesional.{" "}
                <br />
                Gracias a nuestra visión enfocada en la innovación constante y
                la atención a los detalles, hemos logrado consolidar una
                reputación que nos distingue en el mercado. En Letalis Store,
                más que una simple transacción, buscamos generar confianza y ser
                un socio estratégico en el desarrollo tecnológico de nuestros
                clientes.
              </p>
            </div>
          </div>

          <div className="flex flex-row w-full justify-evenly mt-10 lg:flex-col lg:items-center lg:my-5">
            <div className="flex flex-col justify-center xxxl:ml-4 sm:w-[95%]">
              <h2 className="mb-2 text-4xl font-dm uppercase xxxl:text-2xl lg:mb-3">
                {" "}
                ¿Por Qué <span className="text-blue-600">Elegirnos?</span>
              </h2>
              <p className="text-base font-open-sans max-w-xl xxxl:text-base lg:text-sm">
                No solo vendemos productos, también ofrecemos soluciones.
                Nuestro equipo está siempre listo para ayudarte con
                asesoramiento personalizado y productos innovadores adaptados a
                tus necesidades. ¡Estamos aquí para ser tu socio en cada paso
                del camino tecnológico!
              </p>
            </div>
            <img
              src={imgAbout3}
              alt="Sobre Nosotros Letalis Store - 2"
              className="lg:mt-5"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          <button className="w-1/2 mb-5 bg-azul text-white py-3 px-2 rounded-md hover:bg-gray-300 transition flex flex-row items-center justify-evenly xxxl:w-3/4 xxxl:mx-auto sm:flex-col sm:text-xs">
            CONTACTÁ CON NUESTROS REPRESENTANTES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="119"
              viewBox="0 0 512 119"
              className="xxl:px-6 sm:px-"
            >
              <defs>
                <linearGradient
                  id="logosWhatsapp0"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1faf38" />
                  <stop offset="100%" stopColor="#60d669" />
                </linearGradient>
                <linearGradient
                  id="logosWhatsapp1"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f9f9f9" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
              <path
                fill="#fff"
                d="M500.137 72.067c-.318 1.605-.867 3.005-1.64 4.208a9.1 9.1 0 0 1-3.05 2.926q-1.88 1.125-4.686 1.125q-2.726 0-4.649-1.125a9 9 0 0 1-3.087-2.926c-.77-1.203-1.335-2.603-1.683-4.208a23 23 0 0 1-.52-4.885c0-1.717.164-3.373.482-4.972q.482-2.404 1.643-4.255a9.35 9.35 0 0 1 3.046-3q1.879-1.166 4.688-1.168c1.816 0 3.351.392 4.605 1.167a9.55 9.55 0 0 1 3.087 3.043q1.207 1.887 1.725 4.29a23 23 0 0 1 .521 4.895c0 1.651-.162 3.284-.482 4.885m10.74-13.028q-1.123-4.045-3.448-7.094c-1.55-2.03-3.496-3.662-5.848-4.889q-3.529-1.845-8.42-1.843c-2.56 0-4.913.505-7.049 1.521q-3.205 1.525-5.29 4.892h-.156v-5.294h-10.822v55.96h11.378v-19.64h.162c1.389 2.032 3.169 3.567 5.33 4.606c2.162 1.042 4.53 1.566 7.095 1.566c3.042 0 5.7-.592 7.974-1.765c2.267-1.174 4.168-2.753 5.688-4.732c1.526-1.978 2.657-4.247 3.406-6.812c.752-2.567 1.123-5.238 1.123-8.017c0-2.94-.371-5.757-1.123-8.459M454.78 72.067c-.324 1.605-.873 3.005-1.645 4.208a9.05 9.05 0 0 1-3.05 2.926c-1.252.75-2.817 1.125-4.686 1.125c-1.819 0-3.362-.376-4.645-1.125a8.95 8.95 0 0 1-3.087-2.926c-.775-1.203-1.335-2.603-1.683-4.208a23 23 0 0 1-.519-4.885q-.002-2.574.476-4.972c.325-1.604.87-3.02 1.647-4.255a9.3 9.3 0 0 1 3.047-3q1.877-1.166 4.685-1.168c1.815 0 3.356.392 4.608 1.167a9.54 9.54 0 0 1 3.086 3.043q1.2 1.887 1.722 4.29c.35 1.604.519 3.236.519 4.895a25 25 0 0 1-.475 4.885m7.29-20.122q-2.323-3.047-5.851-4.889q-3.528-1.845-8.413-1.843q-3.85-.001-7.052 1.521c-2.143 1.017-3.9 2.647-5.289 4.892h-.163v-5.294h-10.823v55.96h11.388v-19.64h.154c1.388 2.032 3.17 3.567 5.335 4.606q3.24 1.564 7.09 1.566c3.047 0 5.703-.592 7.973-1.765q3.407-1.762 5.691-4.732c1.525-1.978 2.655-4.247 3.409-6.812a28.7 28.7 0 0 0 1.12-8.017c0-2.94-.378-5.757-1.12-8.459c-.754-2.696-1.9-5.062-3.45-7.094m-74.852 13.71l7.453-21.005h.159l7.214 21.005zm1.2-35.115L366.78 87.78h12.663l4.485-12.748h21.401l4.324 12.747h13.067L401.325 30.54zm-22.6 39.083a10.3 10.3 0 0 0-2.966-3.29c-1.228-.878-2.634-1.588-4.207-2.125a49 49 0 0 0-4.85-1.358a187 187 0 0 0-4.726-1.045q-2.326-.483-4.13-1.08c-1.202-.402-2.173-.92-2.922-1.567q-1.123-.959-1.121-2.483c0-.856.208-1.536.638-2.045a4.3 4.3 0 0 1 1.564-1.164a7.1 7.1 0 0 1 2.043-.52a20 20 0 0 1 2.083-.117q3.047 0 5.294 1.16c1.492.776 2.322 2.26 2.48 4.449h10.82q-.32-3.844-1.964-6.375q-1.643-2.523-4.127-4.045q-2.48-1.523-5.652-2.165a32.7 32.7 0 0 0-6.526-.64q-3.373 0-6.572.597q-3.211.606-5.771 2.087a11.5 11.5 0 0 0-4.13 4.048c-1.044 1.71-1.564 3.904-1.564 6.574q.001 2.727 1.126 4.61a9.7 9.7 0 0 0 2.959 3.126c1.232.828 2.636 1.499 4.211 2.003c1.576.513 3.192.95 4.846 1.326c4.065.856 7.232 1.708 9.5 2.567q3.406 1.28 3.406 3.847c0 1.015-.238 1.852-.72 2.522a5.45 5.45 0 0 1-1.803 1.604a8.5 8.5 0 0 1-2.404.88q-1.324.285-2.527.284q-1.683 0-3.242-.402q-1.567-.401-2.767-1.243a6.6 6.6 0 0 1-1.965-2.165c-.504-.883-.764-1.934-.764-3.166H328.55c.11 2.779.735 5.092 1.887 6.935a13.7 13.7 0 0 0 4.406 4.45q2.684 1.682 6.134 2.406c2.294.48 4.646.72 7.046.72a35.6 35.6 0 0 0 6.936-.679q3.406-.682 6.051-2.369c1.767-1.12 3.19-2.603 4.289-4.448q1.639-2.768 1.64-6.856c0-1.927-.374-3.54-1.122-4.848m-47.042-35.715h-11.383v12.424h-6.889v7.615h6.89V78.4q.002 3.13 1.043 5.05c.695 1.281 1.642 2.276 2.843 2.969q1.805 1.041 4.17 1.401a33.4 33.4 0 0 0 5.008.36c1.126 0 2.271-.028 3.449-.077a27 27 0 0 0 3.204-.324V78.96c-.536.109-1.096.192-1.686.24q-.879.083-1.842.084q-2.883-.002-3.848-.965q-.958-.96-.96-3.848V53.947h8.336v-7.615h-8.335zm-32.619 37.835q.001.97-.2 2.569c-.133 1.072-.494 2.123-1.081 3.166c-.589 1.042-1.5 1.94-2.725 2.685q-1.842 1.125-5.212 1.125c-.905 0-1.789-.08-2.643-.244c-.857-.158-1.602-.44-2.244-.84q-.962-.6-1.524-1.644q-.558-1.041-.56-2.562c0-1.068.189-1.956.56-2.647a5.2 5.2 0 0 1 1.485-1.724q.919-.68 2.163-1.084q1.24-.4 2.525-.64a50 50 0 0 1 2.723-.401a35 35 0 0 0 2.605-.4q1.243-.241 2.326-.604c.721-.24 1.32-.57 1.802-1zm11.38 6.817V56.997q.002-3.772-1.684-6.052q-1.681-2.287-4.324-3.568q-2.65-1.283-5.854-1.724a46 46 0 0 0-6.33-.44q-3.446-.002-6.85.681c-2.276.454-4.315 1.217-6.133 2.284a13.6 13.6 0 0 0-4.486 4.248c-1.18 1.764-1.846 3.982-2.006 6.655h11.38q.321-3.37 2.247-4.811q1.92-1.443 5.289-1.441q1.519 0 2.844.2c.88.134 1.655.398 2.324.8q1.004.6 1.602 1.685c.4.72.601 1.698.601 2.924c.053 1.18-.295 2.07-1.04 2.685q-1.124.928-3.047 1.403q-1.923.487-4.41.72a93 93 0 0 0-5.046.645a48 48 0 0 0-5.088 1.083c-1.682.451-3.183 1.136-4.49 2.041c-1.31.913-2.378 2.127-3.209 3.651q-1.24 2.287-1.24 5.812q0 3.206 1.082 5.529c.72 1.554 1.722 2.832 3.006 3.848q1.924 1.525 4.488 2.248q2.562.72 5.53.72q3.849-.001 7.53-1.12a14.87 14.87 0 0 0 6.416-3.931q.08 1.043.278 2.045c.134.665.31 1.324.523 1.962h11.542q-.803-1.276-1.122-3.847a43 43 0 0 1-.323-5.372M250.652 49.9c-1.12-1.471-2.657-2.618-4.604-3.449q-2.93-1.237-7.495-1.238q-3.205-.002-6.574 1.644q-3.365 1.64-5.528 5.251h-.241V30.54h-11.38v57.24h11.38V66.053q0-6.33 2.084-9.1q2.082-2.763 6.732-2.764q4.086-.001 5.69 2.527q1.604 2.524 1.603 7.654v23.408H253.7V62.287q-.001-3.845-.682-7.016q-.68-3.163-2.366-5.372m-60.106 20.083h-.159L180.61 30.54h-11.78l-9.94 38.962h-.159l-9.056-38.962h-12.582l15.147 57.24h12.744l9.535-38.962h.16l9.698 38.961h12.503l15.388-57.239h-12.342z"
              />
              <path
                fill="url(#logosWhatsapp0)"
                d="M2.517 58.721a56.57 56.57 0 0 0 7.568 28.334l-8.043 29.367l30.054-7.88a56.7 56.7 0 0 0 27.09 6.897h.025c31.243 0 56.677-25.424 56.69-56.673c.006-15.143-5.886-29.381-16.59-40.094C88.609 7.96 74.375 2.058 59.209 2.052c-31.248 0-56.679 25.422-56.692 56.67"
              />
              <path
                fill="url(#logosWhatsapp1)"
                d="M.493 58.703a58.6 58.6 0 0 0 7.839 29.349L0 118.472l31.131-8.163a58.7 58.7 0 0 0 28.063 7.147h.025c32.364 0 58.71-26.339 58.725-58.706c.005-15.687-6.099-30.437-17.185-41.534C89.671 6.121 74.928.006 59.219 0C26.849 0 .506 26.334.493 58.703m18.54 27.816l-1.163-1.845a48.67 48.67 0 0 1-7.462-25.968c.01-26.903 21.906-48.79 48.83-48.79c13.037.005 25.29 5.087 34.507 14.309c9.216 9.223 14.287 21.482 14.283 34.521c-.012 26.904-21.907 48.795-48.81 48.795H59.2a48.76 48.76 0 0 1-24.844-6.802l-1.783-1.058l-18.473 4.844z"
              />
              <path
                fill="#fff"
                d="M44.541 34.161c-1.1-2.443-2.256-2.492-3.301-2.535c-.856-.037-1.835-.034-2.812-.034c-.98 0-2.569.368-3.913 1.836c-1.345 1.468-5.136 5.017-5.136 12.237S34.637 59.86 35.37 60.84c.734.978 10.151 16.267 25.065 22.148c12.396 4.888 14.918 3.916 17.608 3.671c2.69-.244 8.682-3.548 9.904-6.975c1.223-3.426 1.223-6.363.856-6.976c-.366-.611-1.345-.979-2.812-1.712c-1.468-.734-8.682-4.284-10.026-4.774c-1.346-.489-2.324-.733-3.303.736c-.978 1.467-3.788 4.771-4.644 5.75s-1.713 1.103-3.18.37c-1.468-.737-6.194-2.285-11.8-7.283c-4.362-3.89-7.307-8.692-8.163-10.161s-.091-2.262.644-2.994c.66-.657 1.468-1.713 2.202-2.57c.732-.857.977-1.468 1.466-2.447c.49-.98.244-1.836-.122-2.57c-.367-.734-3.219-7.99-4.524-10.892"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
