import "./ContenidoRegistroLogin.css"
function ContenidoLogin() {
  return(
    <>
      <section className="inicio">
        <p>Ingreso para clientes registrados</p>        
        <input type="text" placeholder="Correo"></input>
        <br/>
        <input type="password" placeholder="Contraseña"></input>
        <button>Ingresar</button>
        <a href="/RecuperarPassword">Olvide mi contraseña</a>
        <a href="/Registrarse">No tengo cuenta, deseo registrarme</a>
      </section>  
    </>
  )
}
export default ContenidoLogin