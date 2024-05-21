function FilaOrdenes(props) {
  
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  return(
    <tr className="flex">
        <td className=" items-start">
          <ol>
            <li>Orden { props.items } items</li>
            <li>Fecha:{ props.fecha.getDay() } de { meses[ props.fecha.getMonth() ] } del { props.fecha.getFullYear() }</li>
            <li>Enviado a:{ props.destino }</li>
          </ol>
        </td>
        <td className=" items-end">Orden Nro:{ props.numeroOrden }</td>    
        <td className=" items-end">Ver detalle</td>                         
    </tr>
  )
}
export default FilaOrdenes