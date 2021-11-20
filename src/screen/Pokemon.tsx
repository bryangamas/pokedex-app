import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/routers";
import { PokemonEntity } from "../util/types/pokemon";
import Header from "../components/pokemon/Header";
import Types from "../components/pokemon/Types";
import Details from "../components/pokemon/Details";
import { ScrollView } from "react-native-gesture-handler";
import useAuth from "../hooks/useAuth";
import FavoriteButton from "../components/pokemon/FavoriteButton";

export default function PokemonScreen({
  route,
  navigation,
}: NativeStackScreenProps<ParamListBase>) {
  const pokemon: PokemonEntity = route.params! as PokemonEntity;

  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <FavoriteButton id={pokemon?.id} />,
    });
  }, [navigation, pokemon, auth]);

  return (
    <ScrollView>
      <Header pokemon={pokemon} />
      <Types types={pokemon.types} />
      <Details pokemon={pokemon} />
    </ScrollView>
  );
}
