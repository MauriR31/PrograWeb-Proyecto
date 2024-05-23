import { getDay, getMonth, getYear } from "date-fns"
import { Link } from "react-router-dom"

function FilaOrdenes({id,items,fecha,destino}) {
  
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  //Convertimos la fecha a modo de cadena de texto 
  //Porque muestra muchos datos que no sirven
  const convertirFecha = (fecha) => {
    return <>{getDay(fecha)} de {meses[getMonth(fecha)]} del {getYear(fecha)}</>
  }  
  
  return(
    <tr className=" bg-gray-200  h-28 border-y-4 even:bg-slate-50">
        <td className="pl-8 w-[43.75rem]">
          <ol>
            <li className="text-sm mb-1">Orden x{ items } items</li>
            <li className="text-sm mb-1">Fecha: { convertirFecha(fecha) } </li>
            <li className="text-sm mb-1">Enviado a:{ destino }</li>
          </ol>
        </td>
        <td className="text-right ">Orden Nro:{ id }</td>    
        <td className="text-right pr-8" >
          <Link to={`/Admin/OrdenLog/Detail/${id}`}
            className="hover:underline hover:text-red-600">Ver detalle</Link></td>                         
    </tr>
  )
}
export default FilaOrdenes