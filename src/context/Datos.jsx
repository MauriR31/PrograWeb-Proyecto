import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const DatosContext = createContext(null)

export const DatosProvider = ({ children }) => {
  
  //Guarda el numero de pagina al refrescar
  const guardarPagina = () =>{
    const localStoragePagina = localStorage.getItem('page')
    return localStoragePagina ? JSON.parse(localStoragePagina) : 1
  }  

  const guardarId = () =>{
    const localStorageId = localStorage.getItem('id')
    return localStorageId ? JSON.parse(localStorageId) : 0
  }


  //no cambiar ordenes ya que con eso inicia
  const [id,setId] = useState(guardarId)
  const [page,setPage] = useState(guardarPagina)
    
  useEffect(() => {      
    localStorage.setItem('page', JSON.stringify(page)) 
    localStorage.setItem('id', JSON.stringify(id)) 
  },[page,id])

    const value= useMemo(() => ({id,setId,page,setPage}), [id,setId,page,setPage])

    
    return (
      <DatosContext.Provider value={value}>
        {children}
      </DatosContext.Provider>
    )
}

export const useDatos = () => useContext(DatosContext)