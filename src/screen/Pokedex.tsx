import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/routers";
import { getFormattedPokemonInfoApi } from "../api/pokemon";
import { PokemonEntity } from "../util/types/pokemon";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen({
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const [pokemons, setPokemons] = useState<PokemonEntity[]>([]);

  const fetchData = async () => {
    try {
      const data = await getFormattedPokemonInfoApi();
      setPokemons(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  return (
    <View>
      <Text>We are on PokedexScreen</Text>
      <PokemonList pokemons={pokemons} />
    </View>
  );
}
