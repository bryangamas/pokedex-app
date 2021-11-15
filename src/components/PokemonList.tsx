import React from "react";
import { Text, View, FlatList } from "react-native";
import { PokemonEntity } from "../util/types/pokemon";

interface PokemonListProps {
  pokemons: PokemonEntity[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
