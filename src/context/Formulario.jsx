import { createContext, useContext, useMemo, useState } from "react";

export const FormularioContext = createContext(null)

//Todos los datos del formulario para no repetir
export const FormularioProvider = ({ children }) => {  

  const[nombre,setNombre] = useState('')
  const[apellido,setApellido] = useState('')
  const[correo,setCorreo] = useState('')
  const[password, setPassword] = useState('')
  const[password2,setPassword2] = useState('')
  const[mensajeError,setMensajeError] = useState('')


  const value= useMemo(() => ({nombre,setNombre,apellido,setApellido,correo,setCorreo,password,setPassword,password2,setPassword2,mensajeError,setMensajeError})
  , [nombre,setNombre,apellido,setApellido,correo,setCorreo,password,setPassword,password2,setPassword2,mensajeError,setMensajeError])

    
  return (
    <FormularioContext.Provider value={value}>
      {children}
    </FormularioContext.Provider>
  )
}

export const useFormulario = () => useContext(FormularioContext)