import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './view/Home/Home';
import LogIn from './view/Authentication/LogIn/LogIn';
import SignUp from './view/Authentication/SignUp/SignUp';
import NotFound from './view/NotFound';
import RequireAuth from './view/RequireAuth/RequireAuth';
import Admin from './view/Authentication/Admin/Admin';

const ROLES = {
  User: 2001,
  Admin: 5150,
};
const Router = () => {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
