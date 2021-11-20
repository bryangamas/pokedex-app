import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { getFavoritesApi } from "../util/favoriteUtil";

export default function FavoriteScreen() {
  useEffect(() => {
    (async () => console.log(await getFavoritesApi()))();
  });

  return (
    <View>
      <Text>We are on FavoriteScreen</Text>
    </View>
  );
}
