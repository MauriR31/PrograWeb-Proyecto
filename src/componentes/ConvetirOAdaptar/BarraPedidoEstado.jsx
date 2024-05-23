import React from 'react';

const BarraPedidoEstado = ({ estado }) => {
  let barraColor = '';
  let progresoWidth = '';

  // Determina el color y el ancho de la barra según el estado
  switch (estado) {
    case 'Pendiente':
      barraColor = 'bg-blue-500';
      progresoWidth = 'w-1/3';
      break;
    case 'Por Enviar':
      barraColor = 'bg-yellow-500';
      progresoWidth = 'w-2/3';
      break;
    case 'Entregado':
      barraColor = 'bg-green-500';
      progresoWidth = 'w-full';
      break;
    default:
      break;
  }

  return (
    <div className="bg-gray-200 h-6 rounded-full overflow-hidden">
      <div className={`h-full ${barraColor} ${progresoWidth}`}></div>
    </div>
  );
};

export default BarraPedidoEstado;