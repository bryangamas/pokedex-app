import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screen/Pokedex";
import PokemonScreen from "../screen/Pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokédex" component={PokedexScreen} />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: "",
          headerTintColor: "#fefefe",
          headerShadowVisible: false,
        }}
        name="Pokemon"
        component={PokemonScreen}
      />
    </Stack.Navigator>
  );
}
