import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../Components/CharacterList/CharacterList";
import { CharacterSelection } from "../Components/CharacterSelection/CharacterSelection";

export const CharactersScreen = ({
  characters,
  setBattleCharacters,
  isLoggedIn,
}) => {
  const navigate = useNavigate();

  if (!isLoggedIn){
    navigate("/login");
}
  return (
    <>
      <CharacterList characters={characters} />
      <CharacterSelection
        characters={characters}
        setBattleCharacters={setBattleCharacters}
      />
    </>
  );
};