import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ordenes } from "../data/Ordenes";


export const DatosContext = createContext(null)

export const DatosProvider = ({ children }) => {
  
  //Guarda el numero de pagina al refrescar
  const guardarPagina = () =>{
    const localStoragePagina = localStorage.getItem('page')
    return localStoragePagina ? JSON.parse(localStoragePagina) : 1
  }  

  const guardarOrdenes = () =>{
    const localStorageOrdenes = localStorage.getItem('datos')
    return localStorageOrdenes ? JSON.parse(localStorageOrdenes) : ordenes
  } 

  //no cambiar ordenes ya que con eso inicia
  const [datos,setDatos] = useState(guardarOrdenes)
  const [page,setPage] = useState(guardarPagina)
    
  useEffect(() => {      
    localStorage.setItem('page', JSON.stringify(page))    
    localStorage.setItem('datos', JSON.stringify(datos))   
  },[page,datos])

    const value= useMemo(() => ({datos,setDatos,page,setPage}), [datos,setDatos,page,setPage])

    
    return (
      <DatosContext.Provider value={value}>
        {children}
      </DatosContext.Provider>
    )
}

export const useDatos = () => useContext(DatosContext)