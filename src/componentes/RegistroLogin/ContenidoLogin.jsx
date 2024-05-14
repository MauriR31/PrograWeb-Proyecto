import "./ContenidoRegistroLogin.css"
import ErrorLogin from "./ErrorLogin"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function ContenidoLogin() {
  const [mensajeIncorrecto, setmensajeIncorrecto] = useState("")
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function Verificar () {
    if( user === "uno" && password === "123"){
      navigate("/MainUsuario")
    }
    else{      
      setmensajeIncorrecto(<ErrorLogin />)               
    }
  }
  return(
    <>
      <section className="inicio">
        <p>Ingreso para clientes registrados</p>        
        <input type="text" placeholder="Correo" value={ user } onChange={u => setUser(u.target.value)}></input>
        <br/>
        <input type="password" placeholder="Contraseña" value={ password } onChange={p => setPassword(p.target.value)}></input> 
        {mensajeIncorrecto}
        <button onClick={Verificar}>Ingresar</button>               
        <a href="/RecuperarPassword">Olvide mi contraseña</a>
        <a href="/Registrarse">No tengo cuenta, deseo registrarme</a>
      </section>  
    </>
  )
}
export default ContenidoLogin