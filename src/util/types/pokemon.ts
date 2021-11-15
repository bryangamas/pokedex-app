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
}

export interface PokemonEntity extends BasePokemonEntity {
  image: string;
  types: PokemonTypeEntity[];
}

export interface OriginalPokemonTypeEntity {
  slot: number;
  type: BaseEntity;
}

export interface PokemonTypeEntity extends BaseEntity {}
