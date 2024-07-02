import React, { useState, useEffect } from "react";
import BarraPaginacion from "../../../componentes/BarraPaginacion";
import HCerrarSesion from "../../../componentes/Header/HCerrarSesion";
import FooterPa from "../../../componentes/Footer";
import MenuOpcion from "../../../componentes/ConvetirOAdaptar/BotonMenuOpciones";
import ConversionFechaTexto from "../../../componentes/ConvetirOAdaptar/ConversionFechaTexto";
import EstadoIndicadorUsuario from "../../../componentes/ConvetirOAdaptar/EstadoIndicadorUsuario";
import BotonMenuPagina from "../../../componentes/ConvetirOAdaptar/BotonMenuPagina";
import AURegistradosAPI from "../../../api/Administrador/Usuarios/registrados.js"; // API

import Button from "../../../componentes/Admin/Usuario/Boton.jsx"

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
        id_estado: userActulizar.estado === 'Activo' ? 2 : 1,
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
                      fechaOriginal={usuario.fecha_registro}
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
      <div>
        <div> {/* Fila 1, columna 1 */}
          {/* svg -> parte de la icono del usuario */}
        </div>
        <div> {/* Fila 1, Columna 2 */}
          {/* Nombre completo
          Correo
          fecha de registro */}
        </div>
        <div> {/* Fila 2, columna 1 */}
          {/* boton para cambiar de estado */}
        </div>
        <div>{/* Fila 2, columna 1 */}
          {/* boton para ir a ver en detalle */}
        </div>
      </div>

    <div className="border p-4 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex items-center mb-4"> {/* Fila 1 */}
        <div className="mr-4"> {/* Fila 1, Columna 1 */}
          {/* svg -> parte del icono del usuario */}
          <svg className="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4a4 4 0 110 8 4 4 0 010-8zm0 10c-4.418 0-8 1.791-8 4v1h16v-1c0-2.209-3.582-4-8-4z" />
          </svg>
        </div>
        <div> {/* Fila 1, Columna 2 */}
          {/* Nombre completo, Correo, fecha de registro */}
          <h2 className="text-xl font-bold">user.name</h2>
          <p className="text-gray-600">user.email</p>
          <p className="text-gray-400 text-sm">Registrado el: user.registeredDat</p>
        </div>
      </div>
      <div className="flex mt-4 space-x-4"> {/* Fila 2 */}
        <div className="flex-1"> {/* Fila 2, Columna 1 */}
          {/* Botón para cambiar de estado */}
          <Button color="bg-blue-500">
            Cambiar Estado
          </Button>
        </div>
        <div className="flex-1"> {/* Fila 2, Columna 2 */}
          {/* Botón para ir a ver en detalle */}
          <Button color="bg-green-500">
            Ver Detalle
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}

export default UsuariosRegistrados;
