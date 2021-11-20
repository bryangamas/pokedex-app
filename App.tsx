import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationTab />
      </AuthProvider>
    </NavigationContainer>
  );
}
