import React, { useState, createContext } from "react";
import { UserEntity } from "../util/userDB";

export const AuthContext = createContext<{
  auth?: UserEntity;
  login?: Function;
  logout?: Function;
}>({});

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<UserEntity>();

  const login = (user: UserEntity) => setAuth(user);

  const logout = () => setAuth(undefined);

  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
