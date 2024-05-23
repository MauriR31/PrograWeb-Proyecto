import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaginaError from "../../../componentes/PaginaError";
import HVacio from "../../../componentes/Header/HVacio";
import Footer from "../../../componentes/Footer";
import View_SVG from '../../../svg/View_SVG'
import BarraPedidoEstado from "../../../componentes/ConvetirOAdaptar/BarraPedidoEstado";
import BotonMenuPagina from '../../../componentes/ConvetirOAdaptar/BotonMenuPagina';

function Detalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const [productos, setProductos] = useState([]);

  // Esto es para la creacion del estado del usuario que se captura por la URL
  useEffect(() => {
    let usuariosData = JSON.parse(localStorage.getItem('usuarios'));
    let personasData = JSON.parse(localStorage.getItem('personas'));

    if (usuariosData && personasData) {
      // Buscar el usuario por id
      const usuarioEncontrado = usuariosData.find(usuario => String(usuario.id) === String(id));

      if (usuarioEncontrado) {
        // Buscar la persona correspondiente al usuario
        const persona = personasData.find(persona => String(persona.id) === String(id));

        if (persona) {
          // Combinar información de persona y usuario
          const usuarioConPersona = {
            id: usuarioEncontrado.id,
            nombre: persona.nombre + ", " + persona.apellido,
            correo: usuarioEncontrado.correo,
            fechaRegistro: usuarioEncontrado.fechaRegistro,
          };

          setUsuario(usuarioConPersona);
        }
      }
    }
  }, [id]);

  // Esto es para la creacion del estado de ordenes que se captura por la URL del usuario
  useEffect(() => {
    const ordenesData = JSON.parse(localStorage.getItem('ordenes'));

    if (ordenesData) {
      const ordenesUsuario = ordenesData.filter(orden => String(orden.usuario_id) === String(id));
      // Ordenar las órdenes por fecha, de la más reciente a la más antigua
      const ordenesOrdenadas = ordenesUsuario.sort(
        (a, b) => new Date(b.fecha) - new Date(a.fecha)
      );
      setOrdenes(ordenesOrdenadas);
    }

  }, [id]);

  // Esto es para la creacion del estado de productos que pertenecen a las ordenes realizadas por el usuario
  useEffect(() => {
    const detalleData = JSON.parse(localStorage.getItem('detalles'));
    const productosData = JSON.parse(localStorage.getItem('productos'));

    if (detalleData && productosData) {
      const productosPorOrden = ordenes.flatMap(orden => {
        const detallesOrden = detalleData.filter(detalle => detalle.orden_id === orden.id);
        return detallesOrden.map(detalle => {
          const producto = productosData.find(producto => producto.id === String(detalle.producto_id));
          // Si el producto existe, construir un objeto con los atributos necesarios
          if (producto) {
            return {
              id: producto.id,
              title: producto.title,
              orden_id: detalle.orden_id
            };
          } else {
            return null;
          }
        }).filter(producto => producto !== null); // Filtramos los nulos por si no se encontró algún producto
      });
      setProductos(productosPorOrden);
    }
  }, [ordenes]);

  // Condicionalidad para la existencia del usuario
  if (usuario.length === 0) {
    return <PaginaError />;
  }

  // Tomar las primeras 10 órdenes
  const ultimas10Ordenes = ordenes.slice(0, 10);

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
             {ultimas10Ordenes.map((orden) => (
                <article key={orden.id} className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md">
                  <p className="w-[13%]">{orden.numero}</p>
                  <p className="w-[16%]">{orden.fecha}</p>
                  <p className="w-[12%]">S/{orden.total.toFixed(2)}</p>
                  <p className="w-5/12">{productos
                    .filter(producto => producto.orden_id === orden.id)
                    .map(producto => producto.id)
                    .join(', ')}
                  </p>
                  <p className="w-[18%]">{orden.estado}
                    <BarraPedidoEstado  estado={orden.estado} />
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
