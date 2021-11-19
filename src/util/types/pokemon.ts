export interface BaseEntity {
  name: string;
  url?: string;
}

export interface BasePokemonEntity extends BaseEntity {
  id: string;
  order: string;
}

export interface OriginalPokemonEntity extends BaseEntity {
  url: string;
}

export interface OriginalPokemonDetailEntity extends BasePokemonEntity {
  sprites: any;
  types: OriginalPokemonTypeEntity[];
  abilities: OriginalPokemonAbilityEntity[];
  weight: number;
  height: number;
}

export interface PokemonEntity extends BasePokemonEntity {
  image: string;
  types: PokemonTypeEntity[];
  abilities: PokemonAbilityEntity[];
  number: string;
  weight: number;
  height: number;
}

export interface OriginalPokemonTypeEntity {
  slot: number;
  type: BaseEntity;
}

export interface OriginalPokemonAbilityEntity {
  slot: number;
  ability: BaseEntity;
}

export interface PokemonTypeEntity extends BaseEntity {}

export interface PokemonAbilityEntity extends BaseEntity {}
