import React from 'react';
import BarraPaginacion from '../../../BarraPaginacion';

function OrdenesPagination({ paginaActual, totalPaginas, irAPagina }) {
  return (
    <section>
      <BarraPaginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        onChangePagina={irAPagina}
      />
    </section>
  );
}

export default OrdenesPagination;
