import React from "react";
import { View } from "react-native";
import Account from "../components/account/Account";
import LoginForm from "../components/account/LoginForm";
import useAuth from "../hooks/useAuth";

export default function AccountScreen() {
  const { auth } = useAuth();

  return <View>{auth ? <Account /> : <LoginForm />}</View>;
}
