import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <Text>A ver</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={() => console.log("Enviar")} />
    </View>
  );
}
