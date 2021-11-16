import { API_BASE } from "../util/constants";
import axios from "axios";
import {
  OriginalPokemonDetailEntity,
  OriginalPokemonEntity,
  PokemonEntity,
} from "../util/types/pokemon";

export const getPokemonsApi = async (nextUrl?: string) => {
  try {
    const url = nextUrl || `${API_BASE}/pokemon?limit=20&offset=0`;
    const {
      data,
    }: { data: { results: OriginalPokemonEntity[]; next: string } } =
      await axios.get(url);
    const pokemons = data.results;
    const next = data.next;
    return { pokemons, next };
  } catch (e) {
    throw e;
  }
};

export const getPokemonByUrlApi = async (url: string) => {
  try {
    const { data }: { data: OriginalPokemonDetailEntity } = await axios.get(
      url
    );
    return data;
  } catch (e) {
    throw e;
  }
};

export const getFormattedPokemonInfoApi = async (
  nextUrl?: string
): Promise<[PokemonEntity[], string]> => {
  const { pokemons, next } = await getPokemonsApi(nextUrl);
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
  return [pokemonsDetail, next];
};
