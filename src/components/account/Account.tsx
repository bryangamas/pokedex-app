import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../../hooks/useAuth";
import { ItemMenu } from "./ItemMenu";

export default function Account() {
  const { auth, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenid@, {auth!.firstName}</Text>
      <View style={styles.dataContainer}>
        <ItemMenu
          title="Nombre"
          text={`${auth!.firstName} ${auth!.lastName}`}
        />
        <ItemMenu title="Username" text={auth!.username} />
        <ItemMenu title="Email" text={auth!.email} />
        <ItemMenu title="Total Favoritos" text={`0 pokemons`} />
      </View>
      <Button title="Cerrar Sesión" onPress={() => logout!()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  dataContainer: {
    marginVertical: 40,
  },
});
