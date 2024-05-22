import { Link } from "react-router-dom"

function FilaOrdenes(props) {
  
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  return(
    <tr className="bg-slate-200 h-28 border-2 even:bg-slate-50">
        <td className="pl-8 w-[43.75rem]">
          <ol>
            <li className="text-sm mb-1">Orden { props.items } items</li>
            <li className="text-sm mb-1">Fecha:{ props.fecha.getDay() } de { meses[ props.fecha.getMonth() ] } del { props.fecha.getFullYear() }</li>
            <li className="text-sm mb-1">Enviado a:{ props.destino }</li>
          </ol>
        </td>
        <td className="text-right ">Orden Nro:{ props.numeroOrden }</td>    
        <td className="text-right pr-8" >
          <Link to={`/Admin/OrdenLog/Detail/${props.id}`}
            className="hover:underline hover:text-red-600">Ver detalle</Link></td>                         
    </tr>
  )
}
export default FilaOrdenes