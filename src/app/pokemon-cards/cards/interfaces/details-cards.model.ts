export interface DetailsCards{
    ability: Ability;
    attacks: Attack[];
    convertedRetreatCost: number;
    evolvesFrom: string;
    hp: string;
    id: string;
    imageUrlHiRes: ImageData;
    name: string;
    nationalPokedexNumber: number;
    number: string;
    resistances: Resistances[];
    retreatCost: string[];
    series: string;
    setCode: string;
    subtype: string;
    supertype: string;
    text: string[];
    types: string[];
    weaknesses: Weakness[];
}

export interface Ability {
    name: string;
    text: string;
    type: string;
}

export interface Attack {
    convertedEnergyCost: string;
    cost: string[];
    damage: string;
    name: string;
    text: string;
}

export interface Resistances {
    type: string;
    value: string;
}

export interface Weakness {
    type: string;
    value: string;
}