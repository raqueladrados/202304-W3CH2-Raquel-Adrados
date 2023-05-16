import { Character } from "./character.ts";
import { King } from "./king.ts";
import { Fighter } from "./fighter.ts";

export class Counselor extends Character {
  support;
  warcry;
  constructor(
    name: string,
    family: string,
    age: number,
    support: Fighter | King
  ) {
    super(name, family, age);
    this.support = support;
    this.warcry = "I don't know why, but I think I will die soon";
  }
}
