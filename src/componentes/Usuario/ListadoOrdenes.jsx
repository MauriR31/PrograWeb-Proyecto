import FilaOrdenes from "./FilaOrdenes"
import "./MainUsuario.css"
function ListadoOrdenes(props) {
  const ordenes = [
    {
      items: "x3",
      fecha: "12 de octubre del 2024",
      destino: "Lima",
      numeroOrden: "121321421",      
    },
    {
      items: "x4",
      fecha: "12 de febrero del 2024",
      destino: "Lima",
      numeroOrden: "127688621",      
    },
    {
      items: "x4",
      fecha: "15 de octubre del 2024",
      destino: "Ica",
      numeroOrden: "121241412",      
    }
  ]
  return(
    <>    
    <section id="Ordenes">
      <table>
        <thead>
          <th className="LadoIzq">Ordenes Recientes</th>
          <th className="LadoDer" colSpan="2">Ordenar por fecha (mas antiguas primero)</th>
        </thead>
        <tbody>
        {
          ordenes.map( (orden) => <FilaOrdenes { ...orden } /> )
        }
        </tbody>
      </table>
    </section>    
    </>
  )
}
export default ListadoOrdenes