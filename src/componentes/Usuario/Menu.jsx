import { Link, useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu_SVG from '../../svg/Menu_SVG'
import loginApi from "../../api/Login/login.js"
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

export default function AnchorTemporaryDrawer() {
  const { id } =  useParams()  

  // Menu en la parte izquierda de la pagina main del usuario
  const CustomListItemButton = styled(ListItemButton)({
    '&:hover': {
      borderLeft: '3px solid green', // borde color verde
      backgroundColor: '#f0f0f0', // color gris claro
    },
  });

  const [state, setState] = useState({left: false});
  const [sesion, setSesion] = useState([]);

  const handleOnLoad = async () => {
    const usuarioSesion = await loginApi.findOne(id);
    setSesion(usuarioSesion) 
    console.log(usuarioSesion)   
  }

  useEffect(() => {
    handleOnLoad();
  },[])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
};

const list = () => (
  <Box
    sx={{ width: 250, backgroundColor: '#fff', color: '#212529', height: '100%' }}
    role="presentation"
    onClick={toggleDrawer('left', false)}
    onKeyDown={toggleDrawer('left', false)}
  >
    <div style={{ padding: '16px', borderBottom: '1px solid #e0e0e0'  }}>
      <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{sesion.nombre} {sesion.apellido}</p>
    </div>
    <Divider sx={{ backgroundColor: '#495057' }} />
    <List>
      {[
        { text: 'Ordenes Recientes', link: '/usuarios/main/'+id},
        { text: 'Datos de Registro', link: '/Usuario/DatosRegistro'},
        { text: 'Cambiar Password', link: '/Usuario/CambiarPassword' }, 
      ].map((item) => (
        <Link to={item.link}>
          <ListItem key={item.text} disablePadding>          
            <CustomListItemButton >            
              <ListItemText primary={item.text}/>
            </CustomListItemButton>          
          </ListItem>
        </Link> 
      ))}
    </List>
  </Box>
);

return (
  <div>
    <Button onClick={toggleDrawer('left', true)} sx={{width: 25, backgroundColor: '#fff', border: "solid, green", height: '100%'}}>
      <Menu_SVG width="24px" height="24px" fill="LightGreen" />
    </Button>
    <Drawer
      anchor="left"
      open={state.left}
      onClose={toggleDrawer('left', false)}>
      {list()}
    </Drawer>
  </div>
);
}

