import { Link } from "react-router-dom"

function FilaOrdenes(props) {
  
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  return(
    <tr className="flex">
        <td className=" ">
          <ol>
            <li>Orden { props.items } items</li>
            <li>Fecha:{ props.fecha.getDay() } de { meses[ props.fecha.getMonth() ] } del { props.fecha.getFullYear() }</li>
            <li>Enviado a:{ props.destino }</li>
          </ol>
        </td>
        <td className="">Orden Nro:{ props.numeroOrden }</td>    
        <td className=""><Link to={`/Admin/UsersLog/Detail/${props.id}`}>Ver detalle</Link></td>                         
    </tr>
  )
}
export default FilaOrdenes