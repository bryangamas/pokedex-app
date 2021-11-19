import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteScreen from "../screen/Favorite";
import AccountScreen from "../screen/Account";
import PokedexNavigation from "./PokedexNavigation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName="Home">
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
    opacity: focused ? 1 : 0.8,
  };

  const containerStyle = {
    top: -15,
  };

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Home" as never)}
      style={containerStyle}
    >
      <Image source={require("../assets/icons/pokeball.png")} style={style} />
    </TouchableWithoutFeedback>
  );
};
