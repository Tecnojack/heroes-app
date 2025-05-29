export interface Hero {
  id: number;
  name: string;
  slug: string;
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export interface Powerstats {
  combat: number;
  power: number;
  strength: number;
  speed: number;
  intelligence: number;
  durability: number;
}

export interface Appearance {
  gender: string;
  race: string;
  height: [string, string]; 
  weight: [string, string]; 
  eyeColor: string;
  hairColor: string;
}

export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: 'good' | 'bad' | 'neutral' | string;
}

export interface Work {
  occupation: string;
  base: string;
}

export interface Connections {
  groupAffiliation: string;
  relatives: string;
}

export interface HeroDetail extends Hero {
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
}
