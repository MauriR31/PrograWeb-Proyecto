import React from 'react';
import { Link } from "react-router-dom";
import User_SVG from "../../../../svg/User_SVG.jsx";
import View_SVG from '../../../../svg/View_SVG.jsx';
import ConversionFechaTexto from "../../../ConvetirOAdaptar/ConversionFechaTexto.jsx";
import EstadoIndicadorUsuario from "../../../ConvetirOAdaptar/EstadoIndicadorUsuario.jsx";

const UsuariosList = ({ usuariosEnPagina, cambiarEstadoUsuario }) => (
  <div className="grid grid-cols-3 gap-4 justify-items-center px-4 pt-1 mb-5">
    {usuariosEnPagina.length === 0 && (
      <div className="col-span-3 flex justify-around items-center h-64">
        <p className="text-gray-500">No hay usuarios disponibles.</p>
      </div>
    )}
    {usuariosEnPagina.map((usuario, index) => (
      <div key={index} className={`border-4 p-4 rounded-lg bg-white hover:bg-slate-100 shadow-lg w-full max-w-s ${usuario.id_estado === 2 ? "border-red-500" : "border-green-500"}`}>
        <div className="flex items-center">
          <div className="mr-4">
            <User_SVG />
          </div>
          <div>
            <h2 className="text-xl font-bold">{usuario.nombre}, {usuario.apellido}</h2>
            <p className="text-gray-600">{usuario.correo}</p>
            <p className="text-gray-400 text-sm">Registrado el: <ConversionFechaTexto fechaOriginal={usuario.fecha_registro} /></p>
          </div>
        </div>
        <div className="flex mt-1 space-x-4">
          <div className="flex-1">
            <button
              className="block w-full rounded-md"
              onClick={() => cambiarEstadoUsuario(usuario.id)}
            >
              <EstadoIndicadorUsuario estado={usuario.estado} />
            </button>
          </div>
          <div className="flex-1 self-center">
            <Link
              to={`/Admin/UsersLog/Detail/${usuario.id}`}
              className="flex justify-center self-center w-full text-sm text-gray-700"
            >
              <View_SVG width="24px" height="24px" fill="LightGreen" />
              <p className="self-center">Ver</p>
            </Link>
          </div>
        </div>
      </div>
    ))}
    {Array.from({ length: 12 - usuariosEnPagina.length }).map((_, index) => (
      <div key={`placeholder-${index}`} className="w-full max-w-s h-[152px] flex justify-center items-center">
        {/* Placeholder vacío para mantener la estructura */}
      </div>
    ))}
  </div>
);

export default UsuariosList;
