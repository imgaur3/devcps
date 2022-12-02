import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

type props = {
  children: any;
};
export const AuthProvider = ({ children }: props) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
