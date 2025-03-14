import useForm from "../hooks/useForm";
import { Icon } from '@iconify/react';


const Contact = () => {
  const initialData = {
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };

  const onValidate = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe estar vacío.';
    } else if (!regexName.test(form.nombre)) {
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.';
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo" no debe estar vacío.';
    } else if (!regexEmail.test(form.correo)) {
      errors.correo = 'El campo "Correo" contiene un formato no.';
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe estar vacío.';
    } else if (!regexName.test(form.asunto)) {
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.';
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe estar vacío.';
    } else if (!regexComments.test(form.mensaje)) {
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.';
    }
    
    return errors;
  };

  const { form, errors, loading, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  const iconos = [
    {
      nombre: "Buenos Aires, Argentina",
      icono: "basil:location-outline"
    },
    {
      nombre: "ventas@letalis-store.com",
      icono: "material-symbols:mail-outline"
    },
    {
      nombre: "1537034641 / 3765 252582",
      icono: "gg:smartphone"
    },

  ]


  return (
    <>
      <section className="">
        <div className='bg-serviciosBg bg-no-repeat bg-cover  bg-gray-100 h-auto w-full flex flex-col mx-auto pt-20'>
        <img
          src="/img/Logo Letalis Store Blanco.webp"
          alt="Letalis Store Logo"
          className="object-contain mx-auto mt-10 w-48"
        />
          <div className='w-[70%] mx-auto text-white'>
          <div className=' h-auto mx-auto mt-20 xxl:mt-6'>
            <h2 className='font-dm text-5xl font-semibold mb-5 xxxl:text-3xl'>ÁREA DE CONTACTO</h2>
            <div className='font-open-sans flex flex-col'>
            <span className='italic'>¿Tenes preguntas, comentarios o inquietudes?</span>
            <span className='italic font-semibold text-xl text-green-500'>Te escuchamos</span>
            </div>
          </div>

          <div className='mt-10'>
          <form className="flex flex-col font-open-sans" onSubmit={handleSubmit}>
            <label className="font-semibold text-xl xxxl:text-base">Nombre</label>
            <input
              type="text"
              className="border rounded border-black p-1 mb-10"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ingrese su nombre aquí"
            />
            {errors.nombre && (
              <div className="">{errors.nombre}</div>
            )}

            <label className="font-semibold text-xl xxxl:text-base">Correo electrónico</label>
            <input
              type="email"
              className="border rounded border-black p-1 mb-10"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="Ingrese su correo electrónico aquí"
            />
            {errors.correo && (
              <div className="">{errors.correo}</div>
            )}

            <label className="font-semibold text-xl xxxl:text-base">Asunto</label>
            <input
              type="text"
              className="border rounded border-black p  -1 mb-10"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              placeholder="Ingrese su asunto aquí"
            />
            {errors.asunto && (
              <div className="">{errors.asunto}</div>
            )}

            <label className="font-semibold text-xl xxxl:text-base">Mensaje</label>
            <textarea
              className="border border-black p-1 rounded"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              cols="40"
              rows="6"
              placeholder="Ingrese mensaje aquí"
            />
            {errors.mensaje && (
              <div className="">{errors.mensaje}</div>
            )}

            <button
              className="w-48 h-16 bg-azul my-10 text-xl text-white transition-all duration-400 hover:bg-green-500"
              type="submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
            <div  className='border-b-2 mb-10'/>
          </form>
          </div>

          <div className='w-full flex flex-row items-center justify-between mb-20 xxl:mb-10 sm:flex-col sm:mb-10'>
            {iconos.map((data, index) => (
            <div className='flex flex-row items-center font-kanit italic sm:mb-6' key={index}>
            <Icon icon={data.icono} width={30} color="blue" className=""/>
            <span className='text-xl text-black mds:text-base xxl:pl-2 xxl:text-sm'>{data.nombre}
            </span>
            </div>
            ))}
            
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact