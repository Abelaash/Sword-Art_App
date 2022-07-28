import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../Components/CharacterList/CharacterList";
import { CharacterSelection } from "../Components/CharacterSelection/CharacterSelection";

//Screens are composed of components and they group what we want to see on the screen at one time
export const CharacterScreen = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((store: any) => store.login.isLoggedIn);
  if (!isLoggedIn) {
    navigate("/");
  }
  return (
    <>
      <CharacterList />
      <CharacterSelection
      />
    </>
  );
};

