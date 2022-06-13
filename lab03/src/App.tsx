import "./App.css";
import React, { useEffect, useState } from "react";
import { Login } from "./Components/Login/Login";
import { CharacterList } from "./Components/CharacterList/CharacterList";

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
  const [posts, setPosts] = useState([]);

  // fetching
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typcode.com/posts');
    const json = await response.json();
    setPosts(json);
  };

  console.log("posts", posts);
  // UseEffect is a hook that is called after the component is rendered
  // to perform some kind of side effect e.g data fetching, subscription to events, etc
  // UseEffect is a function that takes a function as an argument
  // if dependency array is missing, use effect will be called on every render
  // When we provide empty dependency array, useEffect will be called only once
  // When we provide dependencies, if dependencies change, useEffect will be called again

  useEffect(() => {
    fetchPosts();
  }, [isLoggedIn]); 
  

  const userNotLoggedIn = (
    <h3 className="not-logged-in">
      Please log in as admin to see character list
    </h3>
  );

  

  
  return (
    <div className="App">
      <Login setLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? <CharacterList /> : userNotLoggedIn}
    </div>
  );
};