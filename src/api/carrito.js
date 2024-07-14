const URI = 'http://localhost:3001/';

export const actualizarCantidadP = async (idProducto, nuevaCantidad) => {
  try {
    const response = await fetch(URI + 'api/carrito/actualizar-cantidad', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idProducto,
        cantidad: nuevaCantidad,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error('Error al actualizar la cantidad del producto');
      return null;
    }
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    return null;
  }
};

export const eliminarImages = async (idProducto) => {
  try {
    const response = await fetch(URI + `api/carrito/eliminar/${idProducto}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return true;
    } else {
      console.error('Error al eliminar el producto del carrito');
      return false;
    }
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    return false;
  }
};

export const guardarParaDespues = async (idProducto) => {
  try {
    const response = await fetch(URI + 'api/carrito/guardar-para-despues', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idProducto,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error('Error al guardar el producto para después');
      return null;
    }
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    return null;
  }
};
