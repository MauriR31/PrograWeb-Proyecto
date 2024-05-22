import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import BarraCuenta from '../../../componentes/BarraCuenta'
import BarraPaginacion from '../../../componentes/BarraPaginacion';
import HCerrarSesion from '../../../componentes/Header/HCerrarSesion';
import FooterPa from '../../../componentes/Footer';

/** @type {import('tailwindcss').Config} */

function UsuariosRegistrados() {
  // Variables globales
  // Cantidad de usuarios a mostrar por página
  const usuariosPorPagina = 10;

  // Estado de la informacion del usuario
  const [usuarios, setUsuarios] = useState([])
  // Estado para el índice de la página actual
  const [paginaActual, setPaginaActual] = useState(1);
  // Estado para la busqueda de usuarios
  const [buscarUsuario, setbuscarUsuario] = useState('');

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
          nombre: persona.nombre,
          apellido: persona.apellido,
          correo: usuario.correo,
          fechaRegistro: usuario.fechaRegistro,
          estado: usuario.estado
        };
      }
    );
    setUsuarios(nuevaLista);
    }
  }, []);

  // Función para actualizar los usuarios
  const cambiarEstadoUsuario = (index) => {
    setUsuarios(prevUsuarios =>
        prevUsuarios.map(usuario =>
            usuario.id === index ? { ...usuario, estado: usuario.estado === 'Activo' ? 'Inactivo' : 'Activo' } : usuario
        )
    );
    // Actualizar el estado en el Local Storage
    const usuariosLocalStorage = JSON.parse(localStorage.getItem('usuarios'));
    const usuariosActualizados = usuariosLocalStorage.map(usuario => {
        if (usuario.id === index) {
            return { ...usuario, estado: usuario.estado === 'Activo' ? 'Inactivo' : 'Activo' };
        }
        return usuario;
    });
    localStorage.setItem('usuarios', JSON.stringify(usuariosActualizados));
  };
  
  // Funcion que cuando se realiza una nueva búsqueda, cambie el estado y vulve a la primera página
  const handleSearchChange = (e) => {
    setbuscarUsuario(e.target.value);
    setPaginaActual(1);
  };
  
  // Filtrar usuarios basados en el término de búsqueda
  const filteredUsers = usuarios.filter((usuario) =>
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
      <div className="flex">
        <BarraCuenta />
        <main id="MainUsuariosRegistradosAdmin" className="flex flex-col w-5/6">
          <section id="MURACabecera" className="p-4">
            <p className="text-xl font-bold">Usuarios registrados</p>
          </section>
          <section id="MURABuscador" className="p-4">
            <input
              type="text"
              name="BuscarC-N-A"
              id="BuscarC-N-A"
              placeholder="Buscar por correo, nombre o apellidos..."
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white"
              value={buscarUsuario}
              onChange={handleSearchChange}
            />
          </section>
          <section id="MURAListado" className="p-3.5 text-sm">
            {/* Cabecera de la lista de usuarios registrados */}
            <article id="MURALCabecera" className="flex bg-gray-300 p-2">
              <p className="flex-none w-12">ID</p>
              <p className="flex-auto w-60">Nombre</p>
              <p className="flex-auto w-60">Apellido</p>
              <p className="flex-auto w-96">Correo</p>
              <p className="flex-none w-28">Fecha Registro</p>
              <p className="flex-none w-20">Estado</p>
              <p className="flex-none w-40">Acciones</p>
            </article>
            {/* Cuerpo de la lista de usuarios registrados */}
            <div className='h-[450px]'>
              {usuariosEnPagina.map(usuario => (
                <article key={usuario.id} className="flex bg-white p-2">
                  <p className="flex-none w-12">{usuario.id}</p>
                  <p className="flex-auto w-60">{usuario.nombre}</p>
                  <p className="flex-auto w-60">{usuario.apellido}</p>
                  <p className="flex-auto w-96">{usuario.correo}</p>
                  <p className="flex-none w-28">{usuario.fechaRegistro}</p>
                  <p className="flex-none w-20">{usuario.estado}</p>
                  {/* Columna de Acciones */}
                  <p className="flex-none w-40">
                    <Link to={`/Admin/UsersLog/Detail/${usuario.id}`} className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Ver</Link>
                    <button
                      className={`px-2 py-1 rounded-md ${usuario.estado === 'Activo' ? 'bg-red-500' : 'bg-green-500'} text-white`}
                      onClick={() => cambiarEstadoUsuario(usuario.id)}
                    >
                      {usuario.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                    </button>
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Barra de paginación */}
          <section id="MURABarraPaginacion">
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