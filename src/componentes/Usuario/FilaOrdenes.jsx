import "./MainUsuario.css"
function FilaOrdenes(props) {
  
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  return(
    <tr>
        <td className="LadoIzq">
          <ol>
            <li>Orden { props.items } items</li>
            <li>Fecha:{ props.fecha.getDay() } de { meses[ props.fecha.getMonth() ] } del { props.fecha.getFullYear() }</li>
            <li>Enviado a:{ props.destino }</li>
          </ol>
        </td>
        <td className="LadoDer">Orden Nro:{ props.numeroOrden }</td>    
        <td className="LadoDer">Ver detalle</td>                         
    </tr>
  )
}
export default FilaOrdenes