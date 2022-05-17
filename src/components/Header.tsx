import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

type Link = {
  label: string;
  to: string;
};

type Props = {
  links: Link[];
};
const Header: FC<Props> = ({ links }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="md">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {links.map(({ to, label }) => (
              <NavLink to={to} key={label}>
                <Button>{label}</Button>
              </NavLink>
            ))}
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
