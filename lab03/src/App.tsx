import "./App.css";
import React, { useState } from "react";
import { Login } from "./Components/Login/Login";
import { CharacterList } from "./Components/CharacterList/CharacterList";
import { useFetch } from "./hooks/useFetch";
import { CharacterSelection } from "./Components/CharacterSelection/CharacterSelection";

//React application can be represented as a tree of React components
//This is a react root component
//This type of components is called functional components
//Functional component should start with a capital letter,
//return JSX and be exported from a file
//try to abstain from default export

//Let's create a functionality that only when user logged in as admin,
//we can see the character list, otherwise we see the simple message like
//"You are not logged in"

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const characters = [
    {
      name: "Goku",
      health: 100,
      fraction: "Super Saiyan",
      weapon: "Ultra Instinct",
      damagePerHit: 10,
    },
    {
      name: "Tanjiro Kamado ",
      health: 150,
      fraction: "Japanese",
      weapon: "Demon Sword",
      damagePerHit: 8,
    },
    {
      name: "Yuji Itadori",
      health: 200,
      fraction: "Japanese",
      weapon: "Slaughter Demon",
      damagePerHit: 15,
    },
    {
      name: "Izuku Midoriya",
      health: 200,
      fraction: "Japanese",
      weapon: "One For All",
      damagePerHit: 5,
    },
    {
      name: "Yugi Muto",
      health: 100,
      fraction: "Japanese",
      weapon: "Dark Magician",
      damagePerHit: 15,
    },
  ];
  const { response, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response) {
    return <>Loading...</>;
  }

  if (error && error instanceof Error) {
    //We can use React.Fragment instead of div
    //In react we can't render objects or arrays
    return <>Error: {error.message} </>;
  }

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );
  return (
    <div className="App">
      {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
      {isLoggedIn ? <CharacterList characters={characters} /> : userNotLoggedIn}
      {isLoggedIn ? <CharacterSelection characters={characters} /> : null}
    </div>
  );
};