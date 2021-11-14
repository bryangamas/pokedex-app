import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../screen/Favorite";
import Pokedex from "../screen/Pokedex";
import Account from "../screen/Account";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
