import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { View } from "react-native";
import { getPokemonsDetailsByIdsApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";
import useAuth from "../hooks/useAuth";
import { getFavoritesApi } from "../util/favoriteUtil";
import { PokemonEntity } from "../util/types/pokemon";
import NoLogged from "../components/NoLogged";

export default function FavoriteScreen() {
  const [favorites, setFavorites] = React.useState<PokemonEntity[]>([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const favoritesIds = await getFavoritesApi();
        setFavorites(await getPokemonsDetailsByIdsApi(favoritesIds));
      })();
    }, [auth])
  );

  return (
    <View>{!auth ? <NoLogged /> : <PokemonList pokemons={favorites} />}</View>
  );
}
