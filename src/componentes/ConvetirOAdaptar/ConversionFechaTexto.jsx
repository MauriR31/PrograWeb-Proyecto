import React from 'react';

const FormatearFecha = ({ fechaOriginal }) => {
  const partesFecha = fechaOriginal.split("-");
  const año = partesFecha[0];
  const mesNum = parseInt(partesFecha[1], 10);
  let mes;

  switch (mesNum) {
    case 1:
      mes = "En";
      break;
    case 2:
      mes = "Feb";
      break;
    case 3:
      mes = "Mar";
      break;
    case 4:
      mes = "Abr";
      break;
    case 5:
      mes = "May";
      break;
    case 6:
      mes = "Jun";
      break;
    case 7:
      mes = "Jul";
      break;
    case 8:
      mes = "Ag";
      break;
    case 9:
      mes = "Set";
      break;
    case 10:
      mes = "Oct";
      break;
    case 11:
      mes = "Nov";
      break;
    case 12:
      mes = "Dic";
      break;
    default:
      mes = "";
      break;
  }

  const fechaFormateada = `${partesFecha[2]} ${mes} ${año}`;

  return <span>{fechaFormateada}</span>;
};

export default FormatearFecha;
