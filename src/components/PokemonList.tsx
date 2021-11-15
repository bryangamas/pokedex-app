import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { PokemonEntity } from "../util/types/pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: PokemonEntity[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
