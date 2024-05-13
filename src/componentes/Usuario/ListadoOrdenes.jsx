import "./MainUsuario.css"
function ListadoOrdenes() {
  return(
    <>    
    <section id="Ordenes">
      <table>
        <thead>
          <th className="LadoIzq">Ordenes Recientes</th>
          <th className="LadoDer" colSpan="2">Ordenar por fecha (mas antiguas primero)</th>
        </thead>
        <tbody>
          <tr>
            <td className="LadoIzq">
              <ol>
                <li>Orden x3 items</li>
                <li>Fecha 12 de octubre del 2024</li>
                <li>Enviado a Lima</li>
              </ol>
            </td>
            <td className="LadoDer">Orden num:121321421</td>    
            <td className="LadoDer">Ver detalle</td>                         
          </tr>
        </tbody>
      </table>
    </section>    
    </>
  )
}
export default ListadoOrdenes