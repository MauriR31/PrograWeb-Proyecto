import React from 'react';

const EstadoIndicadorUsuario = ({ estado }) => {
  let icono;
  let color;

  if (estado === "Inactivo") {
    icono = "✔";
    color = "text-green-500";
  } else if (estado === "Activo") {
    icono = "✘";
    color = "text-red-500";
  } else {
    icono = "";
    color = "";
  }

  return (
    <div className={`text-3xl flex justify-center ${color}`}>
      {icono}
    </div>
  );
};

export default EstadoIndicadorUsuario;