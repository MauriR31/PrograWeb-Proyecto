import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <span>
          <ol>
            <li id="Tienda">LA TIENDA DE DON PEDRITO</li>
            <li>@2024</li>
            <li>Privacy - Terms</li>
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
        <div className="DivPersonalizado">
          <img src="../src/assets/facebook.PNG" alt="Facebook"/>
          <img src="../src/assets/instagram.PNG" alt="Instagram"/>
          <img src="../src/assets/twitter.PNG" alt="Twitter"/>
          <img src="../src/assets/whatsapp.PNG" alt="Whatsapp"/>
        </div>
      </footer>
    </>
  );
}
export default Footer;
