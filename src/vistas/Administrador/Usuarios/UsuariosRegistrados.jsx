import React, { useState, useEffect } from "react";
import BarraPaginacion from "../../../componentes/BarraPaginacion";
import HCerrarSesion from "../../../componentes/Header/HCerrarSesion";
import FooterPa from "../../../componentes/Footer";
import MenuOpcion from "../../../componentes/ConvetirOAdaptar/BotonMenuOpciones";
import ConversionFechaTexto from "../../../componentes/ConvetirOAdaptar/ConversionFechaTexto";
import EstadoIndicadorUsuario from "../../../componentes/ConvetirOAdaptar/EstadoIndicadorUsuario";
import BotonMenuPagina from "../../../componentes/ConvetirOAdaptar/BotonMenuPagina";
import AURegistradosAPI from "../../../api/Administrador/Usuarios/registrados.js"; // API

/** @type {import('tailwindcss').Config} */

function UsuariosRegistrados() {
  // Variables globales
  // Cantidad de usuarios a mostrar por página
  const usuariosPorPagina = 10;

  const [usuarios, setUsuarios] = useState([]); // Estado de la informacion del usuario
  const [paginaActual, setPaginaActual] = useState(1); // Estado para el índice de la página actual
  const [buscarUsuario, setbuscarUsuario] = useState(""); // Estado para la busqueda de usuarios

  const handleOnLoad = async () => {
    const usuariosData = await AURegistradosAPI.findAll();
    setUsuarios(usuariosData);
  };

  useEffect(() => {
    handleOnLoad();
  }, []);

  // Función para actualizar los usuarios
  const cambiarEstadoUsuario = async (index) => {
    let nuevoEstado = {};
    const userActulizar = usuarios.find((usuario) => usuario.id === index);
    if (userActulizar) {
      nuevoEstado = {
        id: index,
        estado_id: userActulizar.estado === 'Activo' ? 2 : 1,
      };
    }
    await AURegistradosAPI.update(nuevoEstado);
    handleOnLoad();
  };

  // Funcion que cuando se realiza una nueva búsqueda, cambie el estado y vulve a la primera página
  const handleSearchChange = (e) => {
    setbuscarUsuario(e.target.value);
    setPaginaActual(1);
  };

  // Filtrar usuarios basados en el término de búsqueda
  const filteredUsers = usuarios.filter(
    (usuario) =>
      usuario.nombre.toLowerCase().includes(buscarUsuario.toLowerCase()) ||
      usuario.apellido.toLowerCase().includes(buscarUsuario.toLowerCase()) ||
      usuario.correo.toLowerCase().includes(buscarUsuario.toLowerCase())
  );

  // Informacion necesaria para el listado de los usuarios registrados
  // Índice del primer usuario en la página actual
  const indiceInicio = (paginaActual - 1) * usuariosPorPagina;
  // Índice del último usuario en la página actual
  const indiceFin = paginaActual * usuariosPorPagina;
  // Usuarios a mostrar en la página actual, con o sin busqueda
  const usuariosEnPagina = filteredUsers.slice(indiceInicio, indiceFin);

  // Informacion necesaria para la barra de navegacion
  // Cantidad total de páginas, con o sin busqueda
  const totalPaginas = Math.ceil(filteredUsers.length / usuariosPorPagina);
  // Función para cambiar a una página específica
  const irAPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  return (
    <>
      <header>
        <HCerrarSesion />
      </header>
      <div className="flex justify-center py-4">
        <main className="flex flex-col max-w-6xl w-full">
          {/* Primera seccion */}
          <section className="p-3 bg-white rounded-lg mx-3">
            <p className="text-xl font-bold">Usuarios registrados</p>
          </section>

          {/* Segunda seccion */}
          <section className="p-3.5 flex my-3">
            <button className="block flex-none w-1/5">
              <BotonMenuPagina />
            </button>
            <input
              type="text"
              name="BuscarC-N-A"
              id="BuscarC-N-A"
              placeholder="Buscar por correo, nombre o apellidos..."
              className="max-w-3xl w-full px-4 py-2 rounded-3xl border-slate-950 border-2 bg-white text-gray-800 focus:outline-none"
              value={buscarUsuario}
              onChange={handleSearchChange}
            />
          </section>

          {/* Tercera seccion */}
          <section className="px-3 text-sm">
            {/* Cabecera de la lista de usuarios registrados */}
            <article
              id="MURALCabecera"
              className=" flex bg-green-200 p-2 items-center mb-2 px-4"
            >
              <p className="w-1/12">ID</p>
              <p className="w-1/5">Nombre</p>
              <p className="w-1/5">Apellido</p>
              <p className="w-1/3">Correo</p>
              <p className="w-1/6">Fecha Registro</p>
              <p className="w-1/12 flex justify-center">Estado</p>
              <p className="w-1/12 flex justify-center">Acciones</p>
            </article>
            {/* Cuerpo de la lista de usuarios registrados className='h-[450px]' */}
            <div className="grid grid-cols-1 grid-rows-10">
              {usuariosEnPagina.map((usuario) => (
                <article
                  key={usuario.id}
                  className="flex bg-white py-2 px-4 hover:bg-slate-100 items-center mb-1 rounded-md"
                >
                  <p className="w-1/12">{usuario.id}</p>
                  <p className="w-1/5">{usuario.nombre}</p>
                  <p className="w-1/5">{usuario.apellido}</p>
                  <p className="w-1/3">{usuario.correo}</p>
                  <p className="w-1/6">
                    <ConversionFechaTexto
                      fechaOriginal={usuario.fechaRegistro}
                    />
                  </p>
                  <p className="w-1/12">
                    <EstadoIndicadorUsuario estado={usuario.estado} />
                  </p>
                  {/* Columna de Acciones */}
                  <p className="w-1/12">
                    <MenuOpcion
                      className=""
                      usuario={usuario}
                      cambiarEstadoUsuario={cambiarEstadoUsuario}
                    />
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Barra de paginación */}
          <section>
            <BarraPaginacion
              paginaActual={paginaActual}
              totalPaginas={totalPaginas}
              onChangePagina={irAPagina}
            />
          </section>
        </main>
      </div>
      <footer>
        <FooterPa />
      </footer>
    </>
  );
}

export default UsuariosRegistrados;
