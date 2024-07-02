import React from 'react';

const FormatearFecha = ({ fechaOriginal }) => {
  const fecha = new Date(fechaOriginal);

  if (isNaN(fecha)) {
    console.error("Fecha inválida:", fechaOriginal);
    return <span>Fecha inválida</span>;
  }

  const año = fecha.getFullYear();
  const mesNum = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  const obtenerNombreMes = (mesNum) => {
    const meses = ["En", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ag", "Set", "Oct", "Nov", "Dic"];
    return meses[mesNum - 1] || "";
  };

  const mes = obtenerNombreMes(mesNum);
  const fechaFormateada = `${dia} ${mes} ${año}`;

  return <span>{fechaFormateada}</span>;
};

export default FormatearFecha;
