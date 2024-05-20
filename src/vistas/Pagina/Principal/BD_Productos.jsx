import React from 'react';
export const colecciones = [
  { idColeccion:"1", title: "Tecnología: Especiales para regresar al cole", imageUrl: "https://dlcdnwebimgs.asus.com/gain/3DA4CB6F-9EE9-4262-8841-C17C8F530440/w250", altText: "Categoria 1" },
  { idColeccion:"2", title: "Vestuario: Temporada Invierno", imageUrl: "https://plazavea.vteximg.com.br/arquivos/ids/22792791-1000-1000/imageUrl_1.jpg", altText: "Categoria 2" },
  { idColeccion:"3", title: "Bicicletas: De vuelta a la ruta", imageUrl: "https://www.heavenimagenes.com/heavencommerce/a7e17eec-f889-4581-bfcd-85360b2d9707/images/v2/TREK/4128_medium.jpg", altText: "Categoria 3" }
];

export const images = [
  [
    { idProducto: "1", idColeccion:"1", title: "Iphone 15", marca:"Apple", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Nuevos',
      imageUrl: "https://home.ripley.com.pe/Attachment/WOP_5/2065323799725/2065323799725_2.jpg", altText: "Imagen 1" },
    { idProducto: "2", idColeccion:"1", title: "Headset-w15", marca:"Sony", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Mas Vendidos',
      imageUrl: "https://tiendasishop.com/media/catalog/product/w/h/wh-1000xm4_bmuc.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", altText: "Imagen 2" },
    { idProducto: "3", idColeccion:"1", title: "Monitor-4K", marca:"Dell", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Nuevos',
      imageUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=476&wid=797&qlt=100,1&resMode=sharp2&size=797,476&chrss=full", altText: "Imagen 3" },
    { idProducto: "4", idColeccion:"1", title: "Headser-L-12", marca:"Logytech", serie:"", descripcion:"", caracteristicas:"", cantidad:"", precio:"",categoria:'Ofertas',
      imageUrl: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/audio/g735-wireless-headset/gallery/g735-gallery-1.png?v=1", altText: "Imagen 4" }
  ],
  [
    { idProducto: "5", idColeccion:"1", title: "Smart-Watch-S71", marca:"Apple", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Mas Vendidos',
      imageUrl: "https://tecnoloversperu.com/cdn/shop/products/Smartwatch-Reloj-Serie-6-W26-2021-Bluetooth-Android-iPhone1_600x.jpg?v=1625957902", altText: "Imagen 1" },
    { idProducto: "6", idColeccion:"3", title: "Bicicleta Giant Reign SX R29", marca:"Giant", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Nuevos',
      imageUrl: "https://xplorabike.com.mx/wp-content/uploads/2022/06/reign.jpg", altText: "Imagen 2" },
    { idProducto: "7", idColeccion:"2", title: "Polo de algodón NewPort", marca:"NewPort", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Mas Vendidos',
      imageUrl: "https://www.projectpieta.com/wp-content/uploads/2023/01/polo_oversize_cafe.jpg", altText: "Imagen 3" },
    { idProducto: "8", idColeccion:"2", title: "Gorro Buff Knitted UTMB", marca:"UTMB", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Ofertas',
      imageUrl: "https://4nomadsperu.com/wp-content/uploads/2021/10/Bandanas-y-gorros-Buff_Mesa-de-trabajo-1-copia-45.jpg", altText: "Imagen 4" }
  ],
  [
    { idProducto: "9", idColeccion:"2", title: "Beanie térmico de lana merino Brew", marca:"Montane", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Ofertas',
      imageUrl: "https://4nomadsperu.com/wp-content/uploads/2022/04/Nueva-coleccion-Naturehike-2022_Mesa-de-trabajo-1-copia-45.jpg", altText: "Imagen 1" },
    { idProducto: "10", idColeccion:"3", title: "Casco de bicicleta", marca:"Carbull", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Mas Vendidos',
      imageUrl: "https://smartmoveperu.com/wp-content/uploads/2020/12/casco-para-bicicleta-fungo-luz-led.jpg", altText: "Imagen 2" },
    { idProducto: "11", idColeccion:"3", title: "Guantes de bicicleta", marca:"Rockbros", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Ofertas',
      imageUrl: "https://rockbros.com.pe/wp-content/uploads/2021/06/S169-Guantes-de-gel-Rockbros-1-768x768.jpg", altText: "Imagen 3" },
    { idProducto: "12", idColeccion:"2", title: "Chaqueta de algodón", marca:"colo-colo", serie:"", descripcion:"", caracteristicas:"", cantidad:"5", precio:"",categoria:'Nuevos',
      imageUrl: "https://rimage.ripley.cl/home.ripley/Attachment/MKP/2950/MPM10001485686/full_image-5.jpeg", altText: "Imagen 4" }
  ]
];

function BD_Productos() {
    return (
      <>
        <ProductTable colecciones={colecciones} />
        <ImageTable images={images} />
      </>
    );
  }
  
export default BD_Productos;