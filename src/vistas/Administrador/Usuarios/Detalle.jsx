import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BarraCuenta from "../../../componentes/BarraCuenta";
import PaginaError from "../../../componentes/PaginaError";

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
      <div className="flex">
        <BarraCuenta />
        <main className="flex flex-col w-5/6">
          <section className="p-4">
            <p className="text-xl font-bold">Detalle de Usuario Registrado</p>
          </section>
          <section className="p-4">
            <ul className="flex bg-gray-300 p-2">
              <p className="flex-none w-20">ID: {usuario.id}</p>
              <p className="flex-auto w-56">Nombre: {usuario.nombre}</p>
              <p className="flex-auto w-72">Correo: {usuario.correo}</p>
              <p className="flex-none w-64">
                Fecha Registro: {usuario.fechaRegistro}
              </p>
            </ul>
          </section>
          <section className="p-4">
            <p className="text-xl font-bold">Órdenes recientes</p>
          </section>
          <section id="MURAListado" className="p-3.5 text-sm">
            {/* Cabecera de la lista de usuarios registrados */}
            <article className="flex bg-gray-300 p-2">
              <p className="flex-none w-28">ID</p>
              <p className="flex-auto w-56">Fecha Orden</p>
              <p className="flex-auto w-56">Total</p>
              <p className="flex-auto w-96">Productos</p>
              <p className="flex-none w-28">Estado</p>
              <p className="flex-none w-20">Acciones</p>
            </article>
            {/* Cuerpo de la lista de usuarios registrados */}
            {ultimas10Ordenes.map((orden) => (
              <article key={orden.id} className="flex bg-white p-2">
                <p className="flex-none w-28">{orden.numero}</p>
                <p className="flex-auto w-56">{orden.fecha}</p>
                <p className="flex-auto w-56">{orden.total}</p>
                <p className="flex-auto w-96">{productos
                  .filter(producto => producto.orden_id === orden.id)
                  .map(producto => producto.id)
                  .join(', ')}
                </p>
                <p className="flex-none w-28">{orden.estado}</p>
                <p className="flex-none w-20">
                  <Link
                    to={`/Admin/OrdenLog/Detail/${orden.id}`}
                    class="px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    Ver
                  </Link>
                </p>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

export default Detalle;
