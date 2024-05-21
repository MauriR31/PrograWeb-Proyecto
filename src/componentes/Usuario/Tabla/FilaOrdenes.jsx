import { Link } from "react-router-dom"

function FilaOrdenes(props) {
  
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  return(
    <tr className="bg-slate-100 h-28">
        <td className="pl-8  border-2 w-[43.75rem]">
          <ol>
            <li>Orden { props.items } items</li>
            <li>Fecha:{ props.fecha.getDay() } de { meses[ props.fecha.getMonth() ] } del { props.fecha.getFullYear() }</li>
            <li>Enviado a:{ props.destino }</li>
          </ol>
        </td>
        <td className="text-right  border-2 ">Orden Nro:{ props.numeroOrden }</td>    
        <td className="text-right  pr-8 border-2" >
          <Link to={`/Admin/OrdenLog/Detail/${props.id}`}
            className="hover:underline hover:text-red-600">Ver detalle</Link></td>                         
    </tr>
  )
}
export default FilaOrdenes