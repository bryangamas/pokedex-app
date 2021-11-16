import { POKEMON_TYPE_COLORS } from "./constants";
import { PokemonTypeEntity } from "./types/pokemon";

export const getColorByPokemonType = (type: PokemonTypeEntity[]) => {
  return POKEMON_TYPE_COLORS[type[0].name.toLowerCase()];
};
