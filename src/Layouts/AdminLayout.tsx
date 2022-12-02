// import React from 'react';
// import { Navigate } from 'react-router-dom';

// import { IRoute } from '../common/types/common';

// type RouteWrapper = IRoute;
// const AdminLayout = ({
//   layout: Layout,
//   component: Component,
//   ...props
// }: RouteWrapper) => {
//   const loggedIn = true;
//   console.log('AUTHENTICATE ROUTE '); //eslint-disable-line
//   const RouteWrapper = () => {
//     return (
//       <Layout>
//         <Component {...props} />
//       </Layout>
//     );
//   };
//   return loggedIn ? <RouteWrapper /> : <Navigate to="/signup" />;
// };

// export default AdminLayout;

import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

import Sidebar from '../components/SideBar/SideBar';
type Props = {
  children: ReactNode;
};
const AdminLayout = ({ children }: Props) => {
  return (
    <Box>
      <Sidebar />
      {children}
    </Box>
  );
};

export default AdminLayout;
