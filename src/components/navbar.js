import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function ResponsiveAppBar() {




  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              flexGrow: 0.2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JSON Placeholder API
          </Typography>



          <Link style={{ textDecoration: "none", color: "white", marginInline: "2%" }} to="users">Users</Link>
          <Link style={{ textDecoration: "none", color: "white", marginInline: "1%" }} to="photos">Photos</Link>




        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;