import "./MainUsuario.css"
function FilaOrdenes(props) {
  return(
    <tr>
        <td className="LadoIzq">
          <ol>
            <li>Orden { props.items } items</li>
            <li>Fecha:{ props.fecha } </li>
            <li>Enviado a:{ props.destino }</li>
          </ol>
        </td>
        <td className="LadoDer">Orden Nro:{ props.numeroOrden }</td>    
        <td className="LadoDer">Ver detalle</td>                         
    </tr>
  )
}
export default FilaOrdenes