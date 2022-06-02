import React from "react";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import "./CharacterList.css";
const characters = [
  {
    name: "Goku",
    health: 100,
    fraction: "Saiyan",
    weapon: "Ki",
    damagePerHit: 10,
  },
  {
    name: "Yugi Muto",
    health: 150,
    fraction: "Student",
    weapon: "Dark Magician",
    damagePerHit: 15,
  },
  {
    name: "Tanijro Kamado",
    health: 80,
    fraction: "Japanese",
    weapon: "Nichirin Katana",
    damagePerHit: 15,
  },
  {
      name: "Yuji Itadori",
      health: 150,
      fraction: "Japanese",
      weapon: "Slaughter Demon",
      damagePerHit: 10,
  },
  {
      name: "Izuku Midoriya",
      health: 200,
      fraction: "Japanese",
      weapon: "One For All",
      damagePerHit: 25
  }
];

// Props are passed to the component via attributes
export const CharacterList = () => {
  //returns true if Math.random() is more than 0.5  
  return (
    <ul>
      {characters.map((character) => (
        <CharacterListItem isChampion={Math.random() > 0.5} character={character} />
      ))}
    </ul>
  );
};