import React from 'react';

const OrdenComponent = ({ orden }) => {
  const MAX_PRODUCTOS_A_MOSTRAR = 9;

  // Obtener los primeros 9 detalles de la orden
  const detallesAMostrar = orden.detalles.slice(0, MAX_PRODUCTOS_A_MOSTRAR);

  return (
    <div>
      <div className="flex flex-wrap">
        {detallesAMostrar.map((detalle, index) => (
          <div key={index}>
            <img src={detalle.producto.url} alt={`Imagen ${index}`} className="max-w-9 h-7" />
          </div>
        ))}
        {orden.detalles.length > MAX_PRODUCTOS_A_MOSTRAR && (
          <div className="">
            <p>...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdenComponent;
