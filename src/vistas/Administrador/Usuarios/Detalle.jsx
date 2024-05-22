import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BarraCuenta from "../../../componentes/BarraCuenta";
import PaginaError from "../../../componentes/PaginaError";

function Detalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState([]);
  const [ordenes, setOrdenes] = useState([]);

  // Esta función podría ser una llamada a una API, una consulta a una base de datos, etc.
  useEffect(() => {
    const usuariosData = JSON.parse(localStorage.getItem('usuarios'));

    const personasData = JSON.parse(localStorage.getItem('personas'));

    if (usuariosData && personasData) {
      // Crear una nueva lista combinando información de personas y usuarios
      const nuevaLista = usuariosData.map(usuario => {
        // Buscar la persona correspondiente al usuario
        const persona = personasData.find(persona => String(persona.id) === String(usuario.persona_id));
  
        // Combinar información de persona y usuario
        return {
          id: usuario.id,
          nombre: persona.nombre + ", " + persona.apellido,
          correo: usuario.correo,
          fechaRegistro: usuario.fechaRegistro,
        };
      }
    );
    setUsuario(nuevaLista);
    }

    const ordenesData = (id) => {
      const buscarOrdenesPorId = JSON.parse(localStorage.getItem('ordenes'))
      return buscarOrdenesPorId.filter(orden => orden.usuario_id === parseInt(id)); // Filtrar órdenes por ID de usuario
    };

    const detalleData = JSON.parse(localStorage.getItem('personas'));

    // if (ordenesData && personasData) {
    //   // Crear una nueva lista combinando información de personas y usuarios
    //   const nuevaLista = buscarUsuarioPorId.map(usuario => {
    //     // Buscar la persona correspondiente al usuario
    //     const persona = personasData.find(persona => String(persona.id) === String(usuario.persona_id));
  
    //     // Combinar información de persona y usuario
    //     return {
    //       id: usuario.id,
    //       nombre: persona.nombre + ", " + persona.apellido,
    //       correo: usuario.correo,
    //       fechaRegistro: usuario.fechaRegistro,
    //     };
    //   }
    // );
    // setOrdenes(nuevaLista);
    // }
    
  }, [id]);

  // Condicionalidad para la existencia del usuario
  if (!usuario) {
    return <PaginaError />;
  }

  // Filtrar las órdenes del usuario específico
  const ordenesUsuario = ordenes.filter((orden) => orden.user === usuario.id);

  // Ordenar las órdenes por fecha en orden descendente
  const ordenesOrdenadas = ordenesUsuario.sort(
    (a, b) => new Date(b.fechaOrden) - new Date(a.fechaOrden)
  );

  // Tomar las primeras 10 órdenes
  const ultimas10Ordenes = ordenesOrdenadas.slice(0, 10);

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
              <p className="flex-auto w-56">
                Nombre: {usuario.nombre + ", " + usuario.apellido}
              </p>
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
                <p className="flex-none w-28">{orden.id}</p>
                <p className="flex-auto w-56">{orden.fechaOrden}</p>
                <p className="flex-auto w-56">{orden.total}</p>
                <p className="flex-auto w-96">{orden.productos}</p>
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
