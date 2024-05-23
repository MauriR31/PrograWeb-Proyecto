import React from "react";
/** @type {import('tailwindcss').Config} */

function BarraPaginacion({ paginaActual, totalPaginas, onChangePagina }) {
  const irPagina = (pagina) => {
    onChangePagina(pagina);
  };

  // Función para calcular el rango de páginas a mostrar
  const calcularRangoPaginas = () => {
    const cantidadBotones = 5; // Cantidad total de botones de paginación a mostrar
    const rangoMitad = Math.floor(cantidadBotones / 2);
    let paginaInicio = Math.max(paginaActual - rangoMitad, 1);
    let paginaFin = Math.min(paginaInicio + cantidadBotones - 1, totalPaginas);

    // Ajustar el rango si estamos cerca del inicio o fin
    if (paginaFin - paginaInicio < cantidadBotones - 1) {
      paginaInicio = Math.max(paginaFin - cantidadBotones + 1, 1);
    }

    return [paginaInicio, paginaFin];
  };

  // Función para generar los botones de paginación
  const generarBotonesPaginacion = () => {
    const [paginaInicio, paginaFin] = calcularRangoPaginas();
    const botones = [];
    for (let i = paginaInicio; i <= paginaFin; i++) {
      botones.push(
        <a
          key={i}
          onClick={() => onChangePagina(i)}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
            paginaActual === i
              ? "bg-gray-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              : "ursor-pointer text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          }`}
        >
          {i}
        </a>
      );
    }
    return botones;
  };

  const irPaginaInicial = () => {
    if (paginaActual > 1) {
      irPagina(1);
    }
  };

  const irPaginafinal = () => {
    if (paginaActual < totalPaginas) {
      irPagina(totalPaginas);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg mx-3">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Mostrando
              <span className="font-medium"> {paginaActual} </span>
              de
              <span className="font-medium"> {totalPaginas} </span>
              paginas
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                onClick={irPaginaInicial}
                className="cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Anterior</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {generarBotonesPaginacion()}
              <a
                onClick={irPaginafinal}
                className="cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Siguiente</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default BarraPaginacion;
