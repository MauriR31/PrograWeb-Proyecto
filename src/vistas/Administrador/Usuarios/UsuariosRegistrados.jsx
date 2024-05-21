import React, { useState } from 'react';
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

  // Ejemplo de array de usuarios
  let datosUsuarios = [
    { id: 1, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 2, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 3, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 4, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 5, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 6, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 7, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 8, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 9, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 10, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 11, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 12, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 13, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 14, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 15, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 16, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 17, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 18, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 19, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 20, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 21, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 22, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 23, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 24, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 25, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 26, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 27, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 28, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 29, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 30, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 31, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 32, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 33, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 34, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 35, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 36, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 37, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 38, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 39, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 40, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 41, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 42, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 43, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 44, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 45, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 46, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 47, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 48, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 49, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 50, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 51, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 52, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 53, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 54, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 55, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 56, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 57, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 58, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 59, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 60, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 61, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 62, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 63, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 64, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 65, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 66, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 67, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 68, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 69, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 70, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 71, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 72, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 73, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 74, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 75, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 76, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 77, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 78, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 79, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 80, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 81, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 82, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 83, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 84, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 85, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 86, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 87, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 88, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 89, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 90, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 91, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 92, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 93, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 94, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 95, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 96, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 97, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 98, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 99, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 100, nombre: 'María', apellido: 'García', correo: 'maria@example.com', fechaRegistro: '2024-05-10', estado: 'Inactivo' },
    { id: 101, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 102, nombre: 'Juan Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 103, nombre: 'Diego Eustaquio', apellido: 'Pérez Guerrero', correo: 'juan@example.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    { id: 104, nombre: 'Juan Eustaquio', apellido: 'Rivero Guerrero', correo: 'juan@gmail.com', fechaRegistro: '2024-05-12', estado: 'Activo' },
    // Agrega más usuarios aquí
  ];

  // Estado de la informacion del usuario
  const [usuarios, setUsuarios] = useState(datosUsuarios)
  // Estado para el índice de la página actual
  const [paginaActual, setPaginaActual] = useState(1);
  // Estado para la busqueda de usuarios
  const [buscarUsuario, setbuscarUsuario] = useState('');


  // Función para actualizar los usuarios
  const cambiarEstadoUsuario = (index) => {
    setUsuarios(prevUsuarios =>
        prevUsuarios.map(usuario =>
            usuario.id === index ? { ...usuario, estado: usuario.estado === 'Activo' ? 'Inactivo' : 'Activo' } : usuario
        )
    );
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