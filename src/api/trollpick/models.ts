import { Base } from '@/api/models-base';

interface InformationRune extends Base {
  image: string;
  title: string;
  color: string;
}

export interface Rune extends Base {
  description: string;
  position: number;
  id_rune: number;
  id_trollpick: number;
  rune: InformationRune;
}

interface NameImage extends Base {
  name: string;
  image: string;
}

interface Level extends Base {
  duoPosition: number;
  first_spell_id: number;
  second_spell_id: number;
  first_spell: NameImage;
  second_spell: NameImage;
}

export interface Lanes extends Base {
  lane_id: number;
  trollpick_id: number;
  first_level_id: number;
  second_level_id: number;
  lane: NameImage;
  first_level: Level;
  second_level: Level;
}

interface TrollpickObject extends Base {
  position: number;
  id_objects: number;
  id_trollpicks: number;
}

export interface Objects extends Base {
  image: string;
  title: string;
  trollpick_objects: TrollpickObject;
}

export interface Counter extends Base {
  description: string;
  champion_id: number;
  trollpick_id: number;
  champion: NameImage;
}

export interface Video extends Base {
  platform: string;
  urlVideo: string;
  position: number;
  id_trollpick: number;
}

interface GameplayContent extends Base {
  description: string;
  position: number;
  id_trollpick: number;
}

interface GameplayImage extends Base {
  urlImage: string;
  position: number;
  id_trollpick: number;
}

interface IntroImage extends Base {
  urlImage: string;
  idTrollpick: number;
  id_trollpick: number;
}

export interface Trollpick extends Base {
  name: string;
  actif: number;
  title: string;
  image: string;
  nameIntro: string;
  nameIntro2: string;
  logo: string;
  introIntro: string;
  introContent: string;
  runeIntro: string;
  runePicture: string;
  runeContentEnd: string;
  objectsContent: string;
  sortsOrder: string;
  spellsEnd: string;
  gameplayIntro: string;
  gameplayIntroVideo: string;
  endPicture: string;
  trollpickRunes: Array<Rune>;
  trollpick_lanes: Array<Lanes>;
  objects: Array<Objects>;
  trollpick_counters: Array<Counter>;
  gameplayVideosYoutubes: Array<Video>;
  gameplayContents: Array<GameplayContent>;
  gameplayImages: Array<GameplayImage>;
  trollpickIntroImages: Array<IntroImage>;
}
