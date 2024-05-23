//Tabla de ordenes que se van a mostrar de 3 en 3 por cada pagina
import FilaOrdenes from "./FilaOrdenes";
//UseContext
import { useDatos } from "../../../context/Datos";
import { useEffect, useState } from "react";

function TablaOrdenes() {  
  const datosPagina = useDatos()

  //Guarda el el filtro de orden al refrescar
  const guardarOrden = () =>{
    const localStorageOrden = localStorage.getItem('ordenar')
    return localStorageOrden ? JSON.parse(localStorageOrden) : ''
  }  

  const [ordenar, setOrdenar] = useState(guardarOrden) 
    
  useEffect(() => {      
    localStorage.setItem('ordenar', JSON.stringify(ordenar))    
  },[ordenar])


  //Copia del arreglo original para no modificarlo
  const copia = datosPagina.datos.map(copy => copy)  

  function original(){
    copia.sort( (k1, k2) => {
      if (k1.id < k2.id) return -1     
    })       
  }  
  
  //Ordenar por fecha mas reciente
  function ascendente () {
    copia.sort( (f1, f2) => {
      if (f1.fecha < f2.fecha) return -1   
    })
  }
  //Ordenar por fecha mas antigua
  function descendente() {
    copia.sort( (f1, f2) => {
      if (f1.fecha > f2.fecha) return -1          
    })
  }  
  function handleOrdenar() {
    if(ordenar === ''){      
      setOrdenar('(mas antiguas primero) ↑')  
      ascendente() 
      datosPagina.setDatos(copia)   
    }
    else if(ordenar === '(mas antiguas primero) ↑') {      
      setOrdenar('(mas recientes primero) ↓')  
      descendente()     
      datosPagina.setDatos(copia) 
    }
    else{      
      setOrdenar('') 
      original()  
      datosPagina.setDatos(copia)     
    }
  }
  const filasxtabla = 4
  const fin= datosPagina.page * filasxtabla
  const inicio = fin-filasxtabla
  const ordenesPagina = datosPagina.datos.slice(inicio,fin)  
  return(
    <> 
      <section className=" h-[31rem] bg-slate-50" >    
        <table className=" w-full ">
          <thead>
            <tr className="bg-slate-500">
              <th className="text-xl font-normal text-left p-2 pl-8 rounded-s">Ordenes Recientes</th>
              <th className="text-xl font-normal text-right p-2 pr-8 rounded-e" 
              colSpan="2" onClick={handleOrdenar}><button className="hover:text-white">Ordenar por fecha {ordenar}</button></th>
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