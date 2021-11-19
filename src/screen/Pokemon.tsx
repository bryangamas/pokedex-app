import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/routers";
import { PokemonEntity } from "../util/types/pokemon";
import Header from "../components/pokemon/Header";
import Types from "../components/pokemon/Types";
import Details from "../components/pokemon/Details";
import { ScrollView } from "react-native-gesture-handler";

export default function PokemonScreen({
  route,
}: NativeStackScreenProps<ParamListBase>) {
  const pokemon: PokemonEntity = route.params! as PokemonEntity;

  return (
    <ScrollView>
      <Header pokemon={pokemon} />
      <Types types={pokemon.types} />
      <Details pokemon={pokemon} />
    </ScrollView>
  );
}
