import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './view/Home/Home';
import LogIn from './view/Authentication/LogIn/LogIn';
import SignUp from './view/Authentication/SignUp/SignUp';
import NotFound from './view/NotFound';
import RequireAuth from './view/RequireAuth/RequireAuth';
import Admin from './view/Admin/Admin';
import UserLayout from './Layouts/UserLayout';
import AdminLayout from './Layouts/AdminLayout';

const ROLES = {
  User: 2,
  Admin: 1,
};
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route index element={<Home />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
