import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

// Layouts
import Layout from '../components/Layout';
import PublicLayout from '../components/PublicLayout';

import { r } from '../consts/routes';

// Elements
import SignIn from './SignIn';
import SignUp from './SingUp';
import Home from './Home';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path={r.root} element={<SignIn />} />
        <Route path={r.register} element={<SignUp />} />
      </Route>
      <Route element={<Layout />}>
        <Route path={r.home} element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
