import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getFormattedPokemonInfoApi } from "../api/pokemon";
import { PokemonEntity } from "../util/types/pokemon";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState<PokemonEntity[]>([]);
  const [nextUrl, setNextUrl] = useState<string | undefined>(undefined);

  const fetchData = async () => {
    try {
      const [data, next] = await getFormattedPokemonInfoApi(nextUrl);
      setPokemons((prev) => [...prev, ...data]);
      setNextUrl(next);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => await fetchData())();
  }, []);

  return (
    <View>
      <PokemonList
        pokemons={pokemons}
        loadMore={fetchData}
        isNext={Boolean(nextUrl)}
      />
    </View>
  );
}
