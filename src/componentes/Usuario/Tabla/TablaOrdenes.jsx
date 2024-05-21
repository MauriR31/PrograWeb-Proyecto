//Tabla de ordenes que se van a mostrar de 3 en 3 por cada pagina
import FilaOrdenes from "./FilaOrdenes";
//UseContext
import { useDatos } from "../../../context/Datos";
import { useState } from "react";

function TablaOrdenes() {  
  const datosPagina = useDatos()
  const [ordenar, setOrdenar] = useState('')   
  console.log(datosPagina.datos)
  function original(){
    datosPagina.datos.sort( (k1, k2) => {
      if (k1.id < k2.id) return -1     
    })
  }
  //Ordenar por fecha mas reciente
  function ascendente () {
    datosPagina.datos.sort( (f1, f2) => {
      if (f1.fecha < f2.fecha) return -1   
    })
  }
  //Ordenar por fecha mas antigua
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
      <table className="flex flex-col flex-grow rounded-md bg-slate-50">
        <thead >
          <tr>
            <th className="">Ordenes Recientes</th>
            <th className="" colSpan="2" onClick={handleOrdenar}>Ordenar por fecha {ordenar} </th>
          </tr>
        </thead>
        <tbody >
        {              
          //Iterar sobre cada elemento del arreglo y llamando al componenete FilaOrdenes    
          ordenesPagina.map( (orden) => <FilaOrdenes key={orden.id} {...orden} /> )          
        }        
        </tbody>
      </table>                  
    </section>      
    </>
  )
}
export default TablaOrdenes