import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { getColorByPokemonType } from "../util/pokemonUtil";
import { PokemonEntity } from "../util/types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonEntity;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const cardStyles = {
    backgroundColor: getColorByPokemonType(pokemon.types),
    ...styles.card,
  };

  const handlePress = () => {
    console.log("Go to: " + pokemon.name);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={cardStyles}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.name}>{pokemon.order}</Text>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    margin: 5,
    borderRadius: 15,
    padding: 8,
  },
  image: {
    position: "absolute",
    right: -15,
    bottom: -15,
    height: 110,
    width: 110,
  },
  name: {},
  info: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
  },
});

export default React.memo(PokemonCard);
