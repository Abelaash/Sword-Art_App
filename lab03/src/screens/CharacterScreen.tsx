import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../Components/CharacterList/CharacterList";
import { CharacterSelection } from "../Components/CharacterSelection/CharacterSelection";
import { useAppDispatch } from "../hooks/redux";
import { getCharacters } from "../slices/charactersSlice";

//Screens are composed of components and they group what we want to see on the screen at one time
export const CharacterScreen = () => {
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn);

  const loading = useSelector((state: any) => state.characters.loading);
  const error = useSelector((state: any) => state.characters.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  if (!isLoggedIn) {
    navigate("/");
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <CharacterList />
      <CharacterSelection />
    </>
  );
};