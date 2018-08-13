import { Abilities } from './abilities.model';
import { Stats } from './stats.model';
import { Moves } from './moves.model';
import { Link } from './link.model';
import { Types } from './types.model';

export interface Pokemon {
  id: number;
  order: number;
  base_experience: number;
  name: string;
  weight: number;
  location_area_encounters: string;
  height: number;
  is_default: boolean;
  species: Link;
  abilities: Abilities[];
  stats: Stats[];
  moves: Moves[];
  types: Types[];
}
