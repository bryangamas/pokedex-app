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
      return formatPokemonInfo(originalDetail);
    })
  );
  return [pokemonsDetail, next];
};

export async function getPokemonDetailsApi(id: string) {
  try {
    const url = `${API_BASE}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return formatPokemonInfo(result);
  } catch (error) {
    throw error;
  }
}

export async function getPokemonsDetailsByIdsApi(ids: string[]) {
  const pokemonsDetail = await Promise.all(
    ids.map(async (id): Promise<PokemonEntity> => {
      return await getPokemonDetailsApi(id);
    })
  );
  return pokemonsDetail;
}

const formatPokemonInfo = (
  originalDetail: OriginalPokemonDetailEntity
): PokemonEntity => {
  const { id, name, order } = originalDetail;
  const image = originalDetail.sprites.other["official-artwork"].front_default;
  const height = originalDetail.height * 10;
  const weight = originalDetail.weight / 10;
  const types = originalDetail.types.map(({ type }) => type);
  const abilities = originalDetail.abilities.map(({ ability }) => ability);
  const number = String(id).padStart(3, "0");
  return {
    id,
    name,
    order,
    image,
    types,
    number,
    abilities,
    height,
    weight,
  };
};
