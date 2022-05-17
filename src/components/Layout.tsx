import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './Header';

const Layout: FC = () => {
  return (
    <div>
      <Header links={[]} />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
