import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaginaError from "../../../componentes/PaginaError";
import HVacio from "../../../componentes/Header/HVacio";
import Footer from "../../../componentes/Footer";
import View_SVG from '../../../svg/View_SVG'
import BarraPedidoEstado from "../../../componentes/ConvetirOAdaptar/BarraPedidoEstado";
import BotonMenuPagina from '../../../componentes/ConvetirOAdaptar/BotonMenuPagina';
import AUDetalleAPI from "../../../api/Administrador/Usuarios/detalle.js";  // API

function Detalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null); // Estado inicial como null

  const handleOnLoad = async () => {
    const usuarioData = await AUDetalleAPI.findOne(id);
    setUsuario(usuarioData);
  };

  useEffect(() => {
    handleOnLoad();
  }, [id]);

  if (usuario === null) {
    return <p>Cargando...</p>;
  }

  if (usuario.message === "No encontrado.") {
    return <PaginaError />;
  }

  return (
    <>
      <HVacio />
      <div className="flex justify-center py-4">
        <main className="flex flex-col max-w-6xl w-full">
          {/* Primera seccion */}
          <section className="p-3 bg-white rounded-lg mx-3 mb-2">
            <p className="text-xl font-bold">Detalle de Usuario Registrado</p>
          </section>

          {/* Segunda seccion */}
          <section className="p-3.5 flex place-items-center justify-evenly bg-lime-200 mx-3 mb-2 rounded-lg">
            <button className='block'>
              <BotonMenuPagina />
            </button>
            <ul className="flex  justify-around bg-green-800 p-2 text-white items-center font-bold max-w-4xl w-full px-4 py-2 rounded-xl">
              <p className="">ID: {usuario.id}</p>
              <p className="">Nombre: {usuario.nombre}</p>
              <p className="">Correo: {usuario.correo}</p>
              <p className="">Fecha Registro: {usuario.fechaRegistro}</p>
            </ul>
          </section>
          {/* Tercera seccion */}
          <section className="p-3 pl-5 bg-white rounded-lg mx-3 mb-2">
            <p className="text-xl font-bold">Órdenes recientes</p>
          </section>

          {/* Cuarta seccion */}
          <section className="px-3 text-sm">
            {/* Cabecera de la lista de usuarios registrados */}
            <article className="flex font-bold text-base bg-green-200 p-2 items-center mb-2 px-4">
              <p className="w-[13%]">ID</p>
              <p className="w-[16%]">Fecha Orden</p>
              <p className="w-[12%]">Total</p>
              <p className="w-5/12">Productos</p>
              <p className="w-[18%]">Estado</p>
              <p className="w-1/12">Acciones</p>
            </article >
            {/* Cuerpo de la lista de usuarios registrados */}
            <div className='grid grid-cols-1 grid-rows-10'>
             {usuario.ordenes.map((orden) => (
                <article key={orden.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
                  <p className="w-[13%]">{orden.numero}</p>
                  <p className="w-[16%]">{orden.fecha}</p>
                  <p className="w-[12%]">S/{orden.total.toFixed(2)}</p>
                  <p className="w-5/12">{orden.productos
                    .filter(producto => producto.orden_id === orden.id)
                    .map(producto => producto.id)
                    .join(', ')}
                  </p>
                  <p className="w-[18%]">{orden.estado}
                    <BarraPedidoEstado  estado={orden.estado_id} />
                  </p>
                  <Link
                    to={`/Admin/OrdenLog/Detail/${orden.numero}`}
                    class="w-1/12 flex justify-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <View_SVG width="24px" height="24px" fill="LightGreen" />
                  </Link>
                </article>
              ))}
            </div>
            
          </section>
          
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Detalle;
