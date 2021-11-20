import AsyncStorage from "@react-native-async-storage/async-storage";

const FAV_STORAGE = "favorites";

export const isFavoriteApi = async (id: string) => {
  const favorites = await getFavoritesApi();
  return favorites.includes(id);
};

export const getFavoritesApi = async (): Promise<string[]> => {
  const favorites = await AsyncStorage.getItem(FAV_STORAGE);
  return JSON.parse(favorites || "[]");
};

export const saveFavoritesApi = async (favorites: string[]) => {
  await AsyncStorage.setItem(FAV_STORAGE, JSON.stringify(favorites));
  return favorites;
};
