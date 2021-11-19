import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { PokemonEntity } from "../../util/types/pokemon";

export default function Details({ pokemon }: { pokemon: PokemonEntity }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.detailContainer}>
          <Icon name="dumbbell" color="#111" size={20} />
          <Text style={styles.detailText}>{pokemon.weight} kg</Text>
        </View>
        <View style={styles.detailContainer}>
          <Icon name="arrows-alt-v" color="#111" size={20} />
          <Text style={styles.detailText}>{pokemon.height} cm</Text>
        </View>
      </View>
      <View style={styles.abilitiesContainer}>
        <>
          <Text style={styles.abilitiesTitle}>Abilities</Text>
          {pokemon.abilities.map(({ name }) => (
            <Text
              key={name}
              style={{
                ...styles.pill,
              }}
            >
              {name.toUpperCase()}
            </Text>
          ))}
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  detailText: {
    color: "#111",
    marginLeft: 10,
    fontSize: 18,
  },
  abilitiesContainer: {
    justifyContent: "flex-start",
  },
  abilitiesTitle: {
    color: "#010101",
    marginVertical: 10,
    fontSize: 20,
  },
  pill: {
    backgroundColor: "#DDD",
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 10,
    color: "#010101",
    marginBottom: 20,
  },
});
