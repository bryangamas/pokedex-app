import React from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { PokemonEntity } from "../util/types/pokemon";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: PokemonEntity[];
  loadMore?: VoidFunction;
  isNext?: boolean;
}

export default function PokemonList({
  pokemons,
  loadMore,
  isNext,
}: PokemonListProps) {
  return (
    <View>
      <FlatList
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        contentContainerStyle={styles.container}
        onEndReached={isNext ? loadMore : null}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isNext ? (
            <ActivityIndicator
              style={styles.spinner}
              size="large"
              color="#AEAEAE"
            />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
