import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screen/Favorite";
import PokemonScreen from "../screen/Pokemon";

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
        }}
      />
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
