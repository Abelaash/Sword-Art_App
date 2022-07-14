import "./App.css";
import { useState } from "react";
import { Login } from "./Components/Login/Login";
import { useFetch } from "./hooks/useFetch";
import { CharactersScreen } from "./Components/screens/CharacterScreens";
import { Battleground } from "./Components/Battleground/Battleground";
import { Text } from "@chakra-ui/react";
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
  const [isFightGoingOn, setFightStart] = useState(false);
  const [battleCharacters, setBattleCharacters] = useState([]);
  const [winner, setWinner] = useState(null);
  const characters = [
    {
      name: "Super Saiyan Goku",
      health: 100,
      fraction: "Saiyan",
      weapon: "Ki",
      damagePerHit: 10,
    },
    {
      name: "Tanijro Kamado",
      health: 100,
      fraction: "Japanese",
      weapon: "Demon Sword",
      damagePerHit: 8,
    },
    {
      name: "Yugi Itadori",
      health: 100,
      fraction: "Japanese",
      weapon: "Slaughter Demon",
      damagePerHit: 15,
    },
    {
      name: "Izuku Midoriya",
      health: 150,
      fraction: "Japanese",
      weapon: "One For All",
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
  console.log("Selected characters", battleCharacters);

  return (
    <div className="App">
      {!isLoggedIn ? <Login setLoggedIn={setIsLoggedIn} /> : null}
      {isLoggedIn && !isFightGoingOn ? (
        <CharactersScreen
          characters={characters}
          setFightStart={setFightStart}
          setBattleCharacters={setBattleCharacters}
        />
      ) : null}
      {isFightGoingOn && !winner ? (
        <Battleground
          winner={winner}
          setWinner={setWinner}
          battleCharacters={battleCharacters}
        />
      ) : null}
      {isFightGoingOn && winner ? (
        <Text fontSize={"5xl"} fontWeight="800">
          Winner of the battle is {winner}
        </Text>
      ) : null}
    </div>
  );
};