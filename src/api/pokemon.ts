import { API_BASE } from "../util/constants";
import axios from "axios";
import {
  OriginalPokemonDetailEntity,
  OriginalPokemonEntity,
  PokemonEntity,
} from "../util/types/pokemon";

export const getPokemonsApi = async () => {
  try {
    const url = `${API_BASE}/pokemon?limit=20&offset=0`;
    const { data }: { data: { results: OriginalPokemonEntity[] } } =
      await axios.get(url);
    return data.results;
  } catch (e) {
    throw e;
  }
};

export const getPokemonByUrlApi = async (url: string) => {
  try {
    const { data }: { data: OriginalPokemonDetailEntity } = await axios.get(
      url
    );
    // console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};
//

export const getFormattedPokemonInfoApi = async () => {
  const pokemons = await getPokemonsApi();
  const pokemonsDetail = await Promise.all(
    pokemons.map(async ({ url }): Promise<PokemonEntity> => {
      const originalDetail = await getPokemonByUrlApi(url);
      const { id, name, order } = originalDetail;
      const image =
        originalDetail.sprites.other["official-artwork"].front_default;
      const types = originalDetail.types.map(({ type }) => type);
      return {
        id,
        name,
        order,
        image,
        types,
      };
    })
  );
  return pokemonsDetail;
};
