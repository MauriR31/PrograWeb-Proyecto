import React from "react";
import { Link } from "react-router-dom";

function PaginaError() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-2xl font-semibold mb-4">¡Página no encontrada!</h3>
      <p className="mb-4">
        Por favor, verifica el enlace e intenta nuevamente.
      </p>
      <div className="flex">
        {/* Para volver a la pagina anterior */}
        <Link
          to="#"
          onClick={() => window.history.back()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Volver
        </Link>
        {/* Para ir directo a la pagina Principal */}
        <Link
          to="/"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Ir a la Página Principal
        </Link>
      </div>
    </div>
  );
}

export default PaginaError;
