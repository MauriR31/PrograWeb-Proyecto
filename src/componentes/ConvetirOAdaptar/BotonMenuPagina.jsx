import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu_SVG from '../../svg/Menu_SVG'
import { styled } from '@mui/material/styles';

const CustomListItemButton = styled(ListItemButton)({
  '&:hover': {
    borderLeft: '3px solid green',
    backgroundColor: '#f0f0f0', // slightly lighter for hover effect
  },
});

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

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
        <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Admin</p>
      </div>
      <Divider sx={{ backgroundColor: '#495057' }} />
      <List>
        {[
          { text: 'Dashboard', href: '/dashboard' },
          { text: 'Usuarios registrados', href: '/Admin/UsersLog' },
          { text: 'Productos', href: '/productos' },
          { text: 'Órdenes', href: '/Admin/OrdenLog' },
          { text: 'Productos más vendidos', href: '/productos-vendidos' },
          { text: 'Series', href: '/series' },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <CustomListItemButton component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </CustomListItemButton>
          </ListItem>
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
        onClose={toggleDrawer('left', false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
