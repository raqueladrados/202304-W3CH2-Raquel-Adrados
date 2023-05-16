import { King } from "./king";
import { Counselor } from "./counselor";
import { Squire } from "./squire";
import { Fighter } from "./fighter";

export const createCharacterList = () => {
  const joffrey = new King("Joffrey", "Baratheon", 18, 3);
  const jamie = new Fighter("Jamie", "Lannister", 33, "Espada");
  const daenerys = new Fighter("Daenerys", "Targaryen", 32, "Dragones");
  const tyrion = new Counselor("Tyrion", "Lannister", 35, daenerys);
  const broon = new Squire("Bronn", "Unknown", 40, jamie, 1);

  const characterList = [];

  characterList.push(joffrey);
  characterList.push(jamie);
  characterList.push(daenerys);
  characterList.push(tyrion);
  characterList.push(broon);

  return characterList;
};
