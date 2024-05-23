import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import View_SVG from '../../../svg/View_SVG'
import Option_SVG from '../../../svg/Option_SVG'
function BotonMenuOpciones({ usuario, cambiarEstadoUsuario }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const refMenu = useRef(null);

  useEffect(() => {
    const cerrarMenu = (event) => {
      if (refMenu.current && !refMenu.current.contains(event.target)) {
        setMenuAbierto(false);
      }
    };
    document.addEventListener("mousedown", cerrarMenu);
    return () => {
      document.removeEventListener("mousedown", cerrarMenu);
    };
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="relative inline-block text-left" ref={refMenu}>
      <div>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-full bg-white w-8 h-8 text-gray-900 shadow-md ring-1 ring-gray-300 hover:bg-gray-50"
        >
          
          <Option_SVG width="18px" height="18px" />
        </button>
      </div>
      {menuAbierto && (
        <div
          className="absolute top-full right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        >
          <div className="py-1">
            <Link
              to={`/Admin/UsersLog/Detail/${usuario.id}`}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <View_SVG width="24px" height="24px" fill="LightGreen" />
              Ver
            </Link>
            <button
              className={`block w-full px-4 py-2 rounded-md ${
                usuario.estado === "Activo" ? "bg-red-500" : "bg-green-500"
              } text-white`}
              onClick={() => cambiarEstadoUsuario(usuario.id)}
            >
              {usuario.estado === "Activo" ? "Desactivar" : "Activar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BotonMenuOpciones;
