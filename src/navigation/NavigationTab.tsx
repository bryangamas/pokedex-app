import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteScreen from "../screen/Favorite";
import AccountScreen from "../screen/Account";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => getPokeball({ focused }),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const getPokeball = ({ focused }: { focused: boolean }) => {
  const style = {
    width: 65,
    height: 65,
    top: -15,
    opacity: focused ? 1 : 0.8,
  };

  return (
    <Image source={require("../assets/icons/pokeball.png")} style={style} />
  );
};
