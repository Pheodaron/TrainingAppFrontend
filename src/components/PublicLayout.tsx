import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from './Header';

const PublicLayout: FC = () => {
  return (
    <div>
      <Header links={[]} />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </div>
  );
};

export default PublicLayout;
