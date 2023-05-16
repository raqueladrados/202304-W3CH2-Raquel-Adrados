import { Character } from "./character.ts";
import { Fighter } from "./fighter.ts";

export class Squire extends Character {
  support;
  pelotismo;
  // eslint-disable-next-line max-params
  constructor(
    name: string,
    family: string,
    age: number,
    support: Fighter,
    pelotismo: number
  ) {
    super(name, family, age);
    this.support = support;
    this.pelotismo = pelotismo;
    this.warcry = "I'm a loser";
  }
}
