import { useFocusEffect } from "@react-navigation/core";
import { useCallback, useState } from "react";
import {
  getFavoritesApi,
  isFavoriteApi,
  saveFavoritesApi,
} from "../util/favoriteUtil";

export const useFavorite = (id: string) => {
  const [isFavorite, setIsFavorite] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setIsFavorite(await isFavoriteApi(id));
      })();
    }, [id])
  );

  const toggleFavorite = async () => {
    const favorites = await getFavoritesApi();
    try {
      if (isFavorite) {
        const newFavorites = favorites.filter((item) => item !== id);
        await saveFavoritesApi(newFavorites);
      } else {
        favorites.push(id);
        await saveFavoritesApi(favorites);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    isFavorite,
    toggleFavorite,
  };
};
