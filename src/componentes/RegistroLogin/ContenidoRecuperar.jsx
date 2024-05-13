import "../RegistroLogin/ContenidoRegistroLogin.css"
function ContenidoRecuperar() {
  return(
    <>
      <section>
        <p>Ingrese su correo para enviar contraseña</p>
        <input type="text" placeholder="Correo"></input>        
        <button>Enviar</button>
        <a href="/Login">Regresar a login</a>
      </section>      
    </>
  )
}
export default ContenidoRecuperar