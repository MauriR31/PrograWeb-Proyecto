import ErrorLogin from "./ErrorLogin.jsx"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function ContenidoLogin() {
  const [mensajeIncorrecto, setmensajeIncorrecto] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function Verificar () {
    if( user === "uno" && password === "123"){
      navigate("/usuarios/main")
    }
    else{      
      setmensajeIncorrecto(<ErrorLogin />)               
    }
  }
  return(
    <>
      <section className="flex flex-col items-center justify-center h-[35rem] bg-slate-100">
        <p className="mb-7">Ingreso para clientes registrados</p>        
        <input type="text" placeholder="Correo" value={ user } onChange={u => setUser(u.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"></input>
        <br/>
        <input type="password" placeholder="Contraseña" value={ password } onChange={p => setPassword(p.target.value)}
          className="w-[21.875rem] h-12 rounded-md border-s-4 border-e-4 border-y border-gray-500 hover:border-blue-700"   ></input> 
        {mensajeIncorrecto}
        <button onClick={Verificar}
          className=" m-4 w-64 h-12 bg-black text-white rounded-md border-2 border-gray-500 hover:bg-white hover:text-black">Ingresar</button>               
        <Link className="mb-2 hover:underline hover:text-red-600" 
          to="/recuperarPassword">Olvide mi contraseña</Link>
        <Link className="hover:underline hover:text-red-600" 
          to="/registro">No tengo cuenta, deseo registrarme</Link>
      </section>  
    </>
  )
}
export default ContenidoLogin