// Importar los datos JSON
import DepartamentoData from '../data/Departamento.json';
import DetalleData from '../data/Detalle.json';
import DireccionData from '../data/Direccion.json';
import DistritoData from '../data/Distrito.json';
import EnvioData from '../data/Envio.json';
import MedioPagoData from '../data/MedioPago.json';
import OrdenData from '../data/Orden.json';
import PagoData from '../data/Pago.json';
import PaisData from '../data/Pais.json';
import PersonaData from '../data/Persona.json';
import ProductoData from '../data/Producto.json';
import ProvinciaData from '../data/Provincia.json';
import UsuarioData from '../data/Direccion.json';
import UsuarioDireccionData from '../data/UsuarioDireccion.json';

// Cargar los datos JSON al localStorage si no están ya almacenados
localStorage.setItem("departamentos", JSON.stringify(DepartamentoData));
localStorage.setItem("detalles", JSON.stringify(DetalleData));
localStorage.setItem("direcciones", JSON.stringify(DireccionData));
localStorage.setItem("distritos", JSON.stringify(DistritoData));
localStorage.setItem("envios", JSON.stringify(EnvioData));
localStorage.setItem("mediosPago", JSON.stringify(MedioPagoData));
localStorage.setItem("ordenes", JSON.stringify(OrdenData));
localStorage.setItem("pagos", JSON.stringify(PagoData));
localStorage.setItem("paises", JSON.stringify(PaisData));
localStorage.setItem("personas", JSON.stringify(PersonaData));
localStorage.setItem("productos", JSON.stringify(ProductoData));
localStorage.setItem("provincias", JSON.stringify(ProvinciaData));
localStorage.setItem("usuarios", JSON.stringify(UsuarioData));
localStorage.setItem("usuarioDireccion", JSON.stringify(UsuarioDireccionData));