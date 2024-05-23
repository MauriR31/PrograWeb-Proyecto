import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormulario } from "../../context/Formulario.jsx"
import ErrorLogin from "./ErrorLogin.jsx"
function ContenidoRegistro() {
  const navigate = useNavigate()
  const formulario = useFormulario()

  //Asegurar de completar bien el formulario
  function handleClickForm() {
    if(formulario.nombre != '' && formulario.apellido != '' && formulario.correo != '' && formulario.password != '' && formulario.password2 != ''){
      if(formulario.password === formulario.password2){
        alert("Usuario creado exitosamente")
        //mostrar en consola la cuenta nueva  
        const cuenta = [formulario.nombre, formulario.apellido , formulario.correo, formulario.password]
        console.log(cuenta)
        formulario.setMensajeError('')
        formulario.setNombre('')
        formulario.setApellido('')
        formulario.setCorreo('')
        formulario.setPassword('')
        formulario.setPassword2('')
        navigate("/usuarios/main")
      }
      else{
        formulario.setMensajeError(<ErrorLogin />)
      }
    }
    else{
      formulario.setMensajeError(<ErrorLogin />)
    }   
  }

  function handleClickRegresar () {
    formulario.setNombre('')
    formulario.setApellido('')
    formulario.setCorreo('')
    formulario.setPassword('')
    formulario.setPassword2('')
    formulario.setMensajeError('')
  }  
  return(
    <>
      <section className="flex flex-col items-center justify-center h-[41.125rem] bg-slate-100">
        <p className="mb-7">Registra una nueva cuenta</p>
        <input type="text" placeholder="Nombre" value={formulario.nombre} onChange={nom => formulario.setNombre(nom.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="text" placeholder="Apellido" value={formulario.apellido} onChange={ape => formulario.setApellido(ape.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="text" placeholder="Correo" value={formulario.correo} onChange={mail => formulario.setCorreo(mail.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="password" placeholder="Contraseña" value={formulario.password} onChange={pass1 => formulario.setPassword(pass1.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="password" placeholder="Confirma Contraseña" value={formulario.password2} onChange={pass2 => formulario.setPassword2(pass2.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
          {formulario.mensajeError}
        <button onClick={handleClickForm}
          className="m-4 w-64 h-12 bg-[#0c2941] text-white rounded-md border-2 border-gray-500 hover:bg-white hover:text-black">Crear nueva cuenta</button>
        <Link onClick={handleClickRegresar}
          className="hover:underline hover:text-red-600"
          to="/login">Regresar a login</Link>
      </section>      
    </>
  )
}
export default ContenidoRegistro