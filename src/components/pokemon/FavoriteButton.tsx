import React from "react";

import Icon from "react-native-vector-icons/FontAwesome5";
import { useFavorite } from "../../hooks/useFavorite";

export default function FavoriteButton({ id }: { id: string }) {
  const { isFavorite, toggleFavorite } = useFavorite(id);

  return (
    <Icon
      solid={isFavorite}
      name="heart"
      color="#fff"
      size={25}
      onPress={toggleFavorite}
    />
  );
}
