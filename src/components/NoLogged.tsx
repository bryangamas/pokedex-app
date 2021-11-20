import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function NoLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Debes iniciar sesión para poder ver los favoritos
      </Text>
      <Button
        title="Inicia Sesión"
        onPress={() => navigation.navigate("Account" as never)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 20,
    marginHorizontal: 10,
    textAlign: "center",
  },
});
