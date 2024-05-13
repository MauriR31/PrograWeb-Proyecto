import "../Footer/Footer.css"
function Footer() {
  return(
    <>
      <footer>
        <span>
          <ol>
            <li id="Tienda">LA TIENDA</li>
            <li>@2024</li>
            <li>Privacy-Terms</li>
          </ol>
        </span>
        <span>
          <ol>
            <li className="resaltado">Cuenta</li>
            <li>Login</li>
            <li>Registro</li>
            <li>Carrito</li>
          </ol>
        </span>
        <span>
          <ol>
            <li className="resaltado">Productos</li>
            <li>Mas Vendidos</li>
            <li>Nuevos</li>
            <li>Ofertas</li>
          </ol>
        </span>
        <span>
          <ol>
            <li className="resaltado">Ayuda</li>
            <li>Acerca de nosotros</li>
            <li>Politica de Envio</li>
            <li>FAQ</li>
          </ol>
        </span>   
        <span>
          <img src="../src/assets/facebook.PNG"></img>
          <img src="../src/assets/instagram.PNG"></img>
          <img src="../src/assets/twitter.PNG"></img>
          <img src="../src/assets/whatsapp.PNG"></img>
        </span>     
      </footer>
    </>
  )
}
export default Footer