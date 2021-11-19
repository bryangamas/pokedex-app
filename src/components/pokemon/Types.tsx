import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getColorByPokemonType } from "../../util/pokemonUtil";
import { PokemonTypeEntity } from "../../util/types/pokemon";

export default function Types({ types }: { types: PokemonTypeEntity[] }) {
  return (
    <View style={styles.container}>
      {types.map(({ name }) => (
        <Text
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType([{ name }]),
          }}
        >
          {name.toUpperCase()}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 40,
    marginTop: 20,
  },
  pill: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 10,
    color: "#FEFEFE",
  },
});
