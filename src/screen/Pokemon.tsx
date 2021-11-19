import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import { ParamListBase } from "@react-navigation/routers";
import { PokemonEntity } from "../util/types/pokemon";
import Header from "../components/pokemon/Header";
import Types from "../components/pokemon/Types";

export default function PokemonScreen({
  route,
}: NativeStackScreenProps<ParamListBase>) {
  const pokemon: PokemonEntity = route.params! as PokemonEntity;

  return (
    <View>
      <Header pokemon={pokemon} />
      <Types types={pokemon.types} />
    </View>
  );
}
