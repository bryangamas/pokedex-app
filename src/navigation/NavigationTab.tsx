import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountScreen from "../screen/Account";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteNavigation}
        options={{
          title: "Favoritos",
          headerShown: false,
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
          title: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const getPokeball = ({ focused }: { focused: boolean }) => {
  const styles = StyleSheet.create({
    image: {
      width: 60,
      height: 60,
      opacity: focused ? 1 : 0.8,
      top: -2,
    },
  });

  return (
    <Image
      source={require("../assets/icons/pokeball.png")}
      style={styles.image}
    />
  );
};
