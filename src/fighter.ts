import { Character } from "./character.ts";

export class Fighter extends Character {
  weapon;
  skills;
  warcry;
  constructor(name: string, family: string, age: number, weapon: string) {
    super(name, family, age);
    this.weapon = weapon;
    this.skills = Math.floor(Math.random() * 11);
    this.warcry = "I shall strike first, ask questions later";
  }
}
