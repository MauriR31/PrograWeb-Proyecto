import React, { useState, useEffect } from "react";
import BarraPaginacion from "../../../componentes/BarraPaginacion";
import HCerrarSesion from "../../../componentes/Header/HCerrarSesion";
import FooterPa from "../../../componentes/Footer";
import AURegistradosAPI from "../../../api/Administrador/Usuarios/registrados.js";
import UsuariosHeader from "../../../componentes/Admin/Usuario/Cliente/UsuariosHeader.jsx";
import UsuariosSearch from "../../../componentes/Admin/Usuario/Cliente/UsuariosSearch.jsx";
import UsuariosList from "../../../componentes/Admin/Usuario/Cliente/UsuariosList.jsx";

const UsuariosRegistrados = () => {
  const usuariosPorPagina = 12;
  const [usuarios, setUsuarios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [buscarUsuario, setbuscarUsuario] = useState("");

  const handleOnLoad = async () => {
    const usuariosData = await AURegistradosAPI.findAll();
    setUsuarios(usuariosData);
  };

  useEffect(() => {
    handleOnLoad();
  }, []);

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

  const handleSearchChange = (e) => {
    setbuscarUsuario(e.target.value);
    setPaginaActual(1);
  };

  const filteredUsers = usuarios.filter(
    (usuario) =>
      usuario.nombre.toLowerCase().includes(buscarUsuario.toLowerCase()) ||
      usuario.apellido.toLowerCase().includes(buscarUsuario.toLowerCase()) ||
      usuario.correo.toLowerCase().includes(buscarUsuario.toLowerCase())
  );

  const indiceInicio = (paginaActual - 1) * usuariosPorPagina;
  const indiceFin = paginaActual * usuariosPorPagina;
  const usuariosEnPagina = filteredUsers.slice(indiceInicio, indiceFin);
  const totalPaginas = Math.ceil(filteredUsers.length / usuariosPorPagina);

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
          <UsuariosHeader />
          <UsuariosSearch 
            buscarUsuario={buscarUsuario} 
            handleSearchChange={handleSearchChange}
          />
          <UsuariosList 
            usuariosEnPagina={usuariosEnPagina} 
            cambiarEstadoUsuario={cambiarEstadoUsuario} 
          />
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
};

export default UsuariosRegistrados;
