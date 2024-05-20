import FilaOrdenes from "./FilaOrdenes"
import "./MainUsuario.css"
import { useDatos } from "../../context/Datos";
import { useState } from "react";

function ListadoOrdenes() {  

  const datosPagina = useDatos()
  const [ordenar, setOrdenar] = useState('')   
  console.log(datosPagina.datos)
  function original(){
    datosPagina.datos.sort( (k1, k2) => {
      if (k1.id < k2.id) return -1     
    })
  }
  function ascendente () {
    datosPagina.datos.sort( (f1, f2) => {
      if (f1.fecha < f2.fecha) return -1   
    })
  }
  function descendente() {
    datosPagina.datos.sort( (f1, f2) => {
      if (f1.fecha > f2.fecha) return -1          
    })
  }  
  function handleOrdenar() {
    if(ordenar === ''){
      setOrdenar('(mas antiguas primero)')
      ascendente()
    }
    else if(ordenar === '(mas antiguas primero)'){
      setOrdenar('(mas recientes primero)')  
      descendente()   
    }
    else{
      setOrdenar('')   
      original() 
    }
  }
  console.log(ordenar)
  const fin= datosPagina.page * 3
  const inicio = fin-3
  const ordenesPagina = datosPagina.datos.slice(inicio,fin)  
  return(
    <>    
    <section id="Ordenes">
      <table>
        <thead>
          <tr>
            <th className="LadoIzq">Ordenes Recientes</th>
            <th className="LadoDer" colSpan="2" onClick={handleOrdenar}>Ordenar por fecha {ordenar} </th>
          </tr>
        </thead>
        <tbody >
        {          
          ordenesPagina.map( (orden) => <FilaOrdenes key={orden.id} {...orden} /> )          
        }        
        </tbody>
      </table>                  
    </section>      
    </>
  )
}
export default ListadoOrdenes