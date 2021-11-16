import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { ParamListBase } from "@react-navigation/routers";
import { PokemonEntity } from "../util/types/pokemon";
import Header from "../components/pokemon/Header";

export default function PokemonScreen({
  route,
}: NativeStackScreenProps<ParamListBase>) {
  const pokemon: PokemonEntity = route.params! as PokemonEntity;

  return (
    <View>
      <Header pokemon={pokemon} />
    </View>
  );
}
