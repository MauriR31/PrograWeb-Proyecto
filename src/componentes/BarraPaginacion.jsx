import React from 'react';
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
                <button key={i} onClick={() => onChangePagina(i)} className={`px-4 py-2 ${paginaActual === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} rounded-md mr-2`}>{i}</button>
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
        <section id="MURABarraPaginacion" className="p-4">
            <ol id="MURABPListado" className="flex">
                <li id="MURABPLAnterior">
                    <button onClick={irPaginaAnterior} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2">&lt; Anterior</button>
                </li>
                {/* Botones de paginación */}
                {generarBotonesPaginacion()}
                <li id="MURABPLSiguiente">
                    <button onClick={irPaginaSiguiente} className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2">Siguiente &gt;</button>
                </li>
            </ol>
        </section>
    );
}
export default BarraPaginacion;