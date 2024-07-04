import {  getDate, getMonth, getYear } from "date-fns"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

function FilaOrdenes({id,cantidad_total,fecha,dep,pa}) {
  
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  //Convertimos la fecha a modo de cadena de texto 
  //Porque muestra muchos datos que no sirven
  const convertirFecha = (fecha) => {
    return <>{getDate(fecha)} de {meses[getMonth(fecha)]} del {getYear(fecha)}</>
  }  
  
  return(
    <tr className=" bg-gray-200  h-28 border-y-4 even:bg-slate-50">
        <td className="pl-8 w-[43.75rem]">
          <ol>
            <li className="text-sm mb-1">Orden x{ cantidad_total } items</li>
            <li className="text-sm mb-1">Fecha: { convertirFecha(fecha) } </li>
            <li className="text-sm mb-1">Enviado a:
              {dep.nombre},
              {pa.nombre}
            </li>
          </ol>
        </td>
        <td className="text-right ">Orden Nro:{ id }</td>    
        <td className="text-right pr-8" >
          <Link to={`/Admin/OrdenLog/Detail/${id}`}>
            <Button variant="contained" color="secondary" size="large">Ver detalle</Button></Link></td>                         
    </tr>
  )
}
export default FilaOrdenes