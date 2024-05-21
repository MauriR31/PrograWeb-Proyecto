import { createContext, useContext, useMemo, useState } from "react";
import { ordenes } from "../data/Ordenes";


export const DatosContext = createContext(null)

export const DatosProvider = ({ children }) => {

    const [datos, setDatos] = useState(ordenes)
    const [page,setPage] = useState(1)

    const value= useMemo(() => ({datos,setDatos,page,setPage}), [datos,setDatos,page,setPage])

    
    return (
      <DatosContext.Provider value={value}>
        {children}
      </DatosContext.Provider>
    )
}

export const useDatos = () => useContext(DatosContext)