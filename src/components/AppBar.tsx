'use client';

import React, { ReactElement } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';
import Logo from './Logo';

export interface ElevationScrollProps {
  children: ReactElement;
  window?: Window | Node;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window!,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : theme.palette.grey[200],
      color: (theme.palette.text as any).dark ?? theme.palette.text.primary,
    },
  });
}

const AppBar = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = React.useState<boolean>(false);

  const drawerToggler = (open: boolean) => (event: any) => {
    if (event.type! === 'keydown' && (event.key! === 'Tab' || event.key! === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Link href="#home" style={{ textDecoration: 'none' }}>
                <Logo />
              </Link>
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              <Button color="inherit" href="#products">
                Products
              </Button>
              <Button color="inherit" href="#mission">
                Mission
              </Button>
              <Button color="inherit" href="#subscribe">
                Subscribe
              </Button>
            </Stack>
            <Box component="div" sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                <Box
                  component="div"
                  sx={{ width: 'auto' }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <Link style={{ textDecoration: 'none' }} href="#products">
                      <ListItemButton>
                        <ListItemIcon>
                          <SupportAgentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Products" />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="#mission">
                      <ListItemButton>
                        <ListItemIcon>
                          <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Mission" />
                      </ListItemButton>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} href="#subscribe">
                      <ListItemButton>
                        <ListItemIcon>
                          <SupportAgentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Subscribe" />
                      </ListItemButton>
                    </Link>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
