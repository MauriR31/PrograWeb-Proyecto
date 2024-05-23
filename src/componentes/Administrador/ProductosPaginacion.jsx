const BarraPaginacion = ({ paginaActual, totalPaginas, onChangePagina }) => {
  const irPagina = (pagina) => {
    onChangePagina(pagina);
  };

  const calcularRangoPaginas = () => {
    const cantidadBotones = 5;
    const rangoMitad = Math.floor(cantidadBotones / 2);
    let paginaInicio = Math.max(paginaActual - rangoMitad, 1);
    let paginaFin = Math.min(paginaInicio + cantidadBotones - 1, totalPaginas);

    if (paginaFin - paginaInicio < cantidadBotones - 1) {
      paginaInicio = Math.max(paginaFin - cantidadBotones + 1, 1);
    }

    return [paginaInicio, paginaFin];
  };

  const generarBotonesPaginacion = () => {
    const [paginaInicio, paginaFin] = calcularRangoPaginas();
    const botones = [];
    for (let i = paginaInicio; i <= paginaFin; i++) {
      botones.push(
        <button
          key={i}
          onClick={() => onChangePagina(i)}
          className={`px-4 py-2 ${
            paginaActual === i
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          } rounded-md mr-2`}
        >
          {i}
        </button>
      );
    }
    return botones;
  };

  const irPaginaAnterior = () => {
    if (paginaActual > 1) {
      irPagina(paginaActual - 1);
    }
  };

  const irPaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      irPagina(paginaActual + 1);
    }
  };

  return (
    <section className="p-4">
      <ol className="flex justify-end">
        <li>
          <button
            onClick={irPaginaAnterior}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
          >
            &lt; Anterior
          </button>
        </li>
        {generarBotonesPaginacion()}
        <li>
          <button
            onClick={irPaginaSiguiente}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
          >
            Siguiente &gt;
          </button>
        </li>
      </ol>
    </section>
  );
};

export default BarraPaginacion;
