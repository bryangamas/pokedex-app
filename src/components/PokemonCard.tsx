import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { PokemonEntity } from "../util/types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonEntity;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const handlePress = () => {
    console.log("Go to: " + pokemon.name);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.name}>{pokemon.name}</Text>
        </View>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    margin: 5,
  },
  image: {
    position: "absolute",
    right: 2,
    bottom: 2,
    height: 90,
    width: 90,
  },
  name: {},
  info: {
    backgroundColor: "gray",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});
